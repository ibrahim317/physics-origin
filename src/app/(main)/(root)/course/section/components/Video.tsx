import React from "react";
import { SectionType } from "@/src/types/global";
import DailymotionEmbed from "@/src/components/DailymotionEmbed";

interface props {
  section: SectionType;
}
const Video: React.FC<props> = ({ section }) => {
  return (
    <div className="rtl flex flex-col items-center gap-10 max-lg:mb-20 lg:m-32">
      <div className="w-7/12 py-9 text-right">
        <h1 className="my-6 text-5xl text-[#F9C500]">{section?.name} </h1>
        <p className="flex flex-wrap text-right text-xl">{section?.des}</p>
      </div>
      <DailymotionEmbed id={section.id} />
    </div>
  );
};

export default Video;
