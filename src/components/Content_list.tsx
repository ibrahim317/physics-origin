import React from "react";
import Card from "./Card";
import get_lecture_sections from "../lib/get_lecture_sections";

const Content = async (props: any) => {
  const id = props.id.toString();
  const sections = await get_lecture_sections(id);
  if (sections.length > 0) {
    return (
      <section className="bg-[#1c232d] p-3 flex flex-col" id="Content">
        <div className="flex bg-[#1c232d] max-lg:justify-center "></div>
        <div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
          {sections.map((section: any) => (
            <Card
              type="section"
              locked={props.locked}
              content={section}
              key={section.id}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="bg-[#1c232d] p-3 flex flex-col" id="Content">
        <div className="flex bg-[#1c232d] max-lg:justify-center "></div>
        <div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
          <h2 className="font-extrabold my-6 max-sm:text-center text-3xl  max-[420px]:text-4xl">
            لا توجد محاضرات حالياً....ترقب نزولها قريباً
          </h2>
        </div>
      </section>
    );
  }
};

export default Content;
