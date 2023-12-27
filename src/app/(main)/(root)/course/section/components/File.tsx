import React from "react";
import DriveEmbed from "@/src/components/DriveEmbed";
import { SectionType } from "@/src/types/global";

interface props {
  section: SectionType;
}

const File: React.FC<props> = ({ section }) => {
  return (
    <div className="flex flex-col  rtl items-center">
      <DriveEmbed fileUrl={section.yourlink} />

      <div className=" text-right w-7/12">
        <h1 className="text-[#F9C500] text-5xl my-6">{section.name} </h1>
        <p className="flex text-right text-xl flex-wrap">{section.des}</p>
      </div>
    </div>
  );
};

export default File;
