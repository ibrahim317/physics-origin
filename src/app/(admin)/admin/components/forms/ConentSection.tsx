"use client";
import React from "react";
import Card from "@/src/components/Card";
import { SectionType } from "@/src/types/global";
interface props {
  sections?: SectionType[];
}
const Content: React.FC<props> = ({ sections }) => {
  if (sections && sections?.length > 0) {
    return (
      <section className="flex flex-col  " id="Content">
        <div className="grid w-fit  grid-cols-3  gap-6 max-xl:flex max-xl:flex-col ">
          {sections?.map((section: SectionType) => (
            <Card
              type="section"
              paid={true}
              link={`../edit/section`}
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
        <h2 className="my-6 text-3xl font-extrabold max-sm:text-center  max-[420px]:text-4xl">
          لا توجد دروس في هذا الكورس ابدء في اضافتها
        </h2>
      </section>
    );
  }
};

export default Content;
