import get_all_courses from "@/src/lib/get_all_courses";
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
  const all_course = await get_all_courses();
  const session = await getServerSession();
  const needed_course = all_course.find(
    (course: any) => course.id == searchParams.id
  );
  if (session) {
    const user = await get_user_by_email(session.user?.email);
    let locked = true ? true : false;
    const len = user?.courses.length ? user.courses.length : 0;
    if (len > 0) {
      user?.courses.forEach((id: any) => {
        if (id == searchParams.id) {
          locked = false;
        }
      });
      if (locked == false) {
        redirect(`/course?id=${searchParams.id}`);
      }
    }
  }
  if (needed_course !== undefined) {
    const price = needed_course?.price ?? 0;
    return (
      <div className="min-h-[calc(100vh-6rem)] flex  justify-center rtl text-black items-center ">
        <div className="max-w-[65vw] text-4xl gap-7 max-md:text-xl max-[400px]:text-base justify-between text-white bg-[#2c3342] max-md:min-w-[80vw] flex flex-col m-2 flex-grow rounded-2xl p-10">
          {price > 0 ? (
            <>
              <div className="flex flex-col gap-10">
                <div className="grid gap-5 ">
                  <div> اسم الكورس </div>
                  <div className="text-start text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                    {needed_course?.name}
                  </div>
                </div>
                <div className="grid gap-5 ">
                  محتوى الكورس
                  <div className="text-start text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                    {needed_course?.des[0]}
                  </div>
                </div>
                <div className="grid  gap-5 ">
                  سعر الكورس
                  <div className="text-start md:inline text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                    {needed_course?.price} جنية
                  </div>
                </div>
              </div>
              <PayButton price={price} />
            </>
          ) : (
            <>
              <div>
                <span className=" text-[#F9c500]">هذا الكورس مجاني</span>
              </div>
              <PayButton price={price} />
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
