import React from "react";
import DriveEmbed from "@/src/components/DriveEmbed";
import { SectionType } from "@/src/types/global";

interface props {
  section: SectionType;
}

const File: React.FC<props> = ({ section }) => {
  return (
    <div className="rtl flex  flex-col items-center">
      <DriveEmbed fileUrl={section.yourlink} />

      <div className=" w-7/12 text-right">
        <h1 className="my-6 text-5xl text-[#F9C500]">{section.name} </h1>
        <p className="flex flex-wrap text-right text-xl">{section.des}</p>
      </div>
    </div>
  );
};

export default File;
