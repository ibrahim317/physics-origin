import React from "react";
import Card from "../Card";
import { get_all_courses } from "@/src/lib/db/get/get_all";
import { CourseType } from "@/src/types/global";
interface CourseSectionProps {
  disabled?: boolean;
}
const CoursesSection = async ({ disabled }: CourseSectionProps) => {
  const courses = await get_all_courses();
  const type = disabled ? "section" : "course";
  const bgColor = disabled ? "#020817" : "#1c232d";
  let empty = true;
  return (
    <section
      className={`rtl flex flex-col bg-[${bgColor}] p-3 `}
      id="coursesSection"
    >
      <div className={`flex bg-[${bgColor}] max-lg:justify-center `}>
        <h2 className="p-10 text-7xl text-white  ">الكورسات</h2>
      </div>
      <div className="grid min-h-[50%] grid-cols-3  gap-6 p-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {courses.map((course: CourseType) => {
          if (course.published) {
            empty = false;
            return <Card type={type} content={course} key={course.id} />;
          }
        })}
      </div>
      {empty ? (
        <h2 className="my-6 text-3xl font-extrabold max-sm:text-center  max-[420px]:text-4xl">
          لا توجد كورسات حالياً....ترقب نزولها قريباً
        </h2>
      ) : (
        <></>
      )}
    </section>
  );
};

export default CoursesSection;
