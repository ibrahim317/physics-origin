import React from "react";
import Card from "../Card";
import get_all_courses from "@/src/lib/db/get/get_all_courses";
import { CourseType } from "@/src/types/global";
const CoursesSection = async () => {
  const courses = await get_all_courses();
  return (
    <section
      className=" rtl flex flex-col bg-[#1c232d] p-3 "
      id="coursesSection"
    >
      {courses.length > 0 ? (
        <>
          <div className="flex bg-[#1c232d] max-lg:justify-center ">
            <h2 className="p-10 text-7xl text-white  ">الكورسات</h2>
          </div>
          <div className="grid min-h-[50%] grid-cols-3  gap-6 p-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {courses.map((course: CourseType) => (
              <Card type="course" content={course} key={course.id} />
            ))}
          </div>
        </>
      ) : (
        <h2 className="my-6 text-3xl font-extrabold max-sm:text-center  max-[420px]:text-4xl">
          لا توجد كورسات حالياً....ترقب نزولها قريباً
        </h2>
      )}
    </section>
  );
};

export default CoursesSection;
