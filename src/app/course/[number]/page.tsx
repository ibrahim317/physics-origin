import React from "react";
import Image from "next/image";
import courseList from "@/src/lib/courseList";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) => {
  const courses = await courseList();
  const c_id = searchParams.id;
  const course = courses.filter((course: any) => course.id == c_id)[0];
  return (
    <section className="p-8  rtl">
      <div className="flex justify-between w-full min-h-[calc(100vh-6rem)] ">
        <div>
          <h2 className="font-extrabold m-6 text-7xl max-md:text-5xl">
            {course.name}
          </h2>
          <div className="text-xl opacity-70">{course.des}</div>
        </div>
        <div className="basis-[2/3] ">
          <Image
            src={course.thumbnail}
            width={300}
            height={300}
            alt="courceImage"
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
export default page;
