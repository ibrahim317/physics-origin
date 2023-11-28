import React from "react";
import getCourse from "@/src/lib/getCourse";
import getId from "@/src/lib/getId";

const page = async () => {
  const id = await getId("id");
  const course = await getCourse(`course/${id}`);
  return (
    <section className="p-8 rtl">
      <h2 className="font-extrabold m-6 text-7xl max-md:text-5xl">
        {course.name}
      </h2>
      <div className="text-xl opacity-70">{course.des}</div>
    </section>
  );
};
export default page;
