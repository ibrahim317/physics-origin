import React from "react";
import Card from "./Card";
import get_all_courses from "@/src/lib/get_all_courses";

const CourceSection = async () => {
  const courses = await get_all_courses();
  if (courses.length > 0) {
    return (
      <section
        className=" bg-[#1c232d] p-3 flex flex-col rtl "
        id="CoursesSection"
      >
        <div className="flex bg-[#1c232d] max-lg:justify-center ">
          <h2 className="text-7xl text-white p-10  ">الكورسات</h2>
        </div>
        <div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
          {courses.map((course: any) => (
            <Card type="course" content={course} key={course.id} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="bg-[#1c232d] p-3 rtl flex flex-col" id="Content">
        <div className="flex bg-[#1c232d] max-lg:justify-center "></div>
        <div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
          <h2 className="font-extrabold my-6 max-sm:text-center text-3xl  max-[420px]:text-4xl">
            لا توجد كورسات حالياً....ترقب نزولها قريباً
          </h2>
        </div>
      </section>
    );
  }
};

export default CourceSection;
