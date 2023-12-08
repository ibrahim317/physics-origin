import get_all_lectures from "@/src/lib/get_all_lectures";
import React from "react";
import PayButton from "./PayButton";
import NotFound from "@/src/app/not-found/not-found";
import { getServerSession } from "next-auth";
import get_user_by_email from "@/src/lib/get_user_by_email";
import { redirect } from "next/navigation";

const page = async (
  {
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams: { id: number };
  },
  props: any
) => {
  const all_lecture = await get_all_lectures();
  const session = await getServerSession();
  const needed_lecture = all_lecture.find(
    (lecture: any) => lecture.id == searchParams.id
  );
  const user = await get_user_by_email(session?.user?.email);
  let locked = true ? true : false;
  const len = user?.lectures.length ? user.lectures.length : 0;
  if (len > 0) {
    user?.lectures.forEach((id: any) => {
      if (id == searchParams.id) {
        locked = false;
      }
    });
    if (locked == false) {
      redirect(`/lecture?id=${searchParams.id}`);
    }
  }
  if (needed_lecture !== undefined) {
    const price = needed_lecture?.price ?? 0;
    return (
      <div className="min-h-[calc(100vh-6rem)] flex  justify-center rtl text-black items-center ">
        <div className="max-w-[65vw] text-4xl gap-7 max-md:text-xl max-[400px]:text-base justify-between text-white bg-[#2c3342] max-md:min-w-[80vw] flex flex-col m-2 flex-grow rounded-2xl p-10">
          {price > 0 ? (
            <>
              <div className="flex flex-col gap-10">
                <div className="grid gap-5 ">
                  <div> اسم الكورس </div>
                  <div className="text-start text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                    {needed_lecture?.name}
                  </div>
                </div>
                <div className="grid gap-5 ">
                  محتوى الكورس
                  <div className="text-start text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                    {needed_lecture?.des[0]}
                  </div>
                </div>
                <div className="grid  gap-5 ">
                  سعر الكورس
                  <div className="text-start md:inline text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                    {needed_lecture?.price} جنية
                  </div>
                </div>
              </div>
              <PayButton user={user} lecture={needed_lecture} price={price} />
            </>
          ) : (
            <>
              <div>
                <span className=" text-[#F9c500]">هذا الكورس مجاني</span>
              </div>
              <PayButton user={user} lecture={needed_lecture} price={price} />
            </>
          )}
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default page;
