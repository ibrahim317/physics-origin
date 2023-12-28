import React from "react";
import { LectureType } from "@/src/types/global";
import DailymotionEmbed from "@/src/components/DailymotionEmbed";
import NotFound from "@/src/app/not-found";

interface props {
  lecture: LectureType;
}
const Video: React.FC<props> = ({ lecture }) => {
  if (!lecture) return <NotFound />;
  return (
    <div className="rtl flex flex-col items-center gap-10 max-lg:mb-20 lg:m-32">
      <div className="w-7/12 py-9 text-right">
        <h1 className="my-6 text-5xl text-[#F9C500]">{lecture?.name} </h1>
        <p className="flex flex-wrap text-right text-xl">{lecture?.des}</p>
      </div>
      <DailymotionEmbed id={lecture.id} />
    </div>
  );
};

export default Video;
