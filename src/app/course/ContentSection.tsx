import React from "react";
import Card from "@/src/components/Card";
import { SectionType } from "@/src/types/global";
interface props {
  sections: SectionType[];
  opened: boolean;
}
const Content: React.FC<props> = ({ sections, opened }) => {
  if (sections.length > 0) {
    return (
      <section
        className="bg-[#1c232d] max-md:bg-[#2c3342] p-3 flex flex-col  "
        id="Content"
      >
        <div className="grid gap-6  p-6 grid-cols-3 max-xl:flex max-xl:flex-col ">
          {sections.map((section: any) => (
            <Card
              type="section"
              opened={opened}
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
            لا توجد كورسات حالياً....ترقب نزولها قريباً
          </h2>
        </div>
      </section>
    );
  }
};

export default Content;
