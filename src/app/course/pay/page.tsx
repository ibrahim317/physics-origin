import get_all_courses from "@/src/lib/get_all_courses";
import React from "react";
import PayButton from "./PayButton";
import NotFound from "@/src/app/not-found/not-found";

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
  const needed_course = all_course.find(
    (course: any) => course.id == searchParams.id
  );
  if (needed_course !== undefined) {
    const price = needed_course?.price ?? 0;
    return (
      <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-center rtl text-black items-center ">
        <div className="min-w-[65vw] text-4xl max-md:text-xl max-h-[45vh] justify-between text-white bg-[#2c3342] max-md:min-w-[80vw] flex flex-col m-2 flex-grow rounded-2xl p-10">
          {price > 0 ? (
            <>
              <div className="flex flex-col gap-10">
                <div className="flex  gap-1">
                  اسم الكورس :
                  <span className="text-start text-[#F9c500]  font-semibold">
                    {needed_course?.name}
                  </span>
                </div>
                <div className="flex gap-2">
                  سعر الكورس :
                  <span className="text-start text-[#F9c500]  font-semibold">
                    {needed_course?.price} جنية
                  </span>
                </div>
              </div>
              <PayButton free={false} />
            </>
          ) : (
            <>
              <span className=" text-[#F9c500]">هذا الكورس مجاني</span>
              <PayButton free={true} />
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
