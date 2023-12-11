import React from "react";
import Card from "../Card";
import get_all_courses from "@/src/lib/get_all_courses";

const CoursesSection = async () => {
  const courses = await get_all_courses();
  return (
    <section
      className=" bg-[#1c232d] p-3 flex flex-col rtl "
      id="coursesSection"
    >
      {courses.length > 0 ? (
        <>
          <div className="flex bg-[#1c232d] max-lg:justify-center ">
            <h2 className="text-7xl text-white p-10  ">الكورسات</h2>
          </div>
          <div className=" grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
            {courses.map((course: any) => (
              <Card type="course" content={course} key={course.id} />
            ))}
          </div>
        </>
      ) : (
        <h2 className="font-extrabold my-6 max-sm:text-center text-3xl  max-[420px]:text-4xl">
          لا توجد كورسات حالياً....ترقب نزولها قريباً
        </h2>
      )}
    </section>
  );
};

export default CoursesSection;
