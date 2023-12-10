import React from "react";
import DriveEmbed from "@/src/components/DriveEmbed";

const File = (props: any) => {
  return (
    <div className="flex flex-col  rtl items-center">
      <DriveEmbed fileUrl={props.section?.yourlink} />

      <div className=" text-right w-7/12">
        <h1 className="text-[#F9C500] text-5xl my-6">{props.section?.name} </h1>
        <p className="flex text-right text-xl flex-wrap">
          {props.section?.des}
        </p>
      </div>
    </div>
  );
};

export default File;
