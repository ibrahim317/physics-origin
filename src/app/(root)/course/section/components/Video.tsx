import React from "react";
import { SectionType } from "@/src/types/global";
import DailymotionEmbed from "@/src/components/DailymotionEmbed";

interface props {
  section: SectionType;
}
const Video: React.FC<props> = ({ section }) => {
  return (
    <div className="flex flex-col rtl gap-10 items-center lg:m-32 max-lg:mb-20">
      <div className="py-9 text-right w-7/12">
        <h1 className="text-[#F9C500] text-5xl my-6">{section?.name} </h1>
        <p className="flex text-xl text-right flex-wrap">{section?.des}</p>
      </div>
      <DailymotionEmbed id={section.id} />
    </div>
  );
};

export default Video;
