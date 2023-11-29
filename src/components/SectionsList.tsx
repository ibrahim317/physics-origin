import React from "react";
import Card from "./SectionCard";
import getSection from "../lib/getSection";

const Section = async (props: any) => {
  const sections = await getSection(props.id);
  console.log(sections);
  return (
    <section className=" bg-[#1c232d] p-3 flex flex-col" id="CoursesSection">
      <div className="flex bg-[#1c232d] max-lg:justify-center flex-row-reverse">
        <h2 className="text-7xl text-white p-10  ">الاجزاء</h2>
      </div>
      <div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
        {sections.map((section: any) => (
          <Card course={section} key={section.id} />
        ))}
      </div>
    </section>
  );
};

export default Section;
