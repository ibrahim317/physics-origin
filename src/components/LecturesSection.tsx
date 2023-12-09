import React from "react";

import Card from "./Card";
import get_all_lectures from "../lib/get_all_lectures";

const LecturesSection = async () => {
  const lectures = await get_all_lectures();
  if (lectures.length > 0) {
    return (
      <section
        className=" bg-[#1c232d] p-3 flex flex-col rtl "
        id="lecturesSection"
      >
        <div className="flex bg-[#1c232d] max-lg:justify-center ">
          <h2 className="text-7xl text-white p-10  ">المحاضرات</h2>
        </div>
        <div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
          {lectures.map((lecture: any) => (
            <Card type="section" content={lecture} key={lecture.id} />
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
            لا توجد محاضرات احالياً....ترقب نزولها قريباً
          </h2>
        </div>
      </section>
    );
  }
};

export default LecturesSection;
