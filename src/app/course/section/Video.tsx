import React from "react";
import YouTubeEmbed from "@/src/components/YouTubeEmbed";

const Video = (props: any) => {
  return (
    <div className="flex flex-col rtl gap-10 items-center">
      <div className="py-9 text-right w-7/12">
        <h1 className="text-[#F9C500] text-5xl my-6">{props.section?.name} </h1>
        <p className="flex text-xl text-right flex-wrap">
          {props.section?.des}
        </p>
      </div>
      <YouTubeEmbed vidlink={props.section?.yourlink} />
    </div>
  );
};

export default Video;
