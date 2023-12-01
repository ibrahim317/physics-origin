import get_all_courses from "@/src/lib/get_all_courses";
import React from "react";

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
  return (
    <div className="min-h-[calc(100vh-6rem)] flex justify-center rtl text-black items-center ">
      <div className="max-w-[65vw] min-h-[45vh] bg-slate-400 flex  flex-grow rounded-2xl p-10">
        <div className="flex text-4xl gap-3">
          اسم الكورس :
          <span className="text-end font-semibold">{needed_course?.name}</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
