"use client";
import React from "react";
import Card from "@/src/components/Card";
import { SectionType } from "@/src/types/global";
interface props {
  sections?: SectionType[];
}
const Content: React.FC<props> = async ({ sections }) => {
  if (sections && sections?.length > 0) {
    return (
      <section
        className="flex flex-col bg-[#1c232d] p-3 max-md:bg-[#2c3342]  "
        id="Content"
      >
        <div className="grid grid-cols-3  gap-6 p-6 max-xl:flex max-xl:flex-col ">
          {sections?.map((section: SectionType) => (
            <Card
              type="section"
              paid={true}
              content={section}
              key={section.id}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col bg-[#1c232d] p-3" id="Content">
        <div className="flex bg-[#1c232d] max-lg:justify-center "></div>
        <div className="grid min-h-[50%] grid-cols-3  gap-6 p-6 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
          <h2 className="my-6 text-3xl font-extrabold max-sm:text-center  max-[420px]:text-4xl">
            لا توجد دروس حالياً....ترقب نزولها قريباً
          </h2>
        </div>
      </section>
    );
  }
};

export default Content;
