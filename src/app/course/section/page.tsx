import React from "react";
import YouTubeEmbed from "@/src/components/YouTubeEmbed";
import get_section_by_id from "@/src/lib/get_section_by_id";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}, props:any) => {

  const sections = await get_section_by_id();
  const section = sections.filter(
    (section: any) => section.id == searchParams.id
  )[0];


  if (section.tag=='vid') {
    return (
      <div className="flex flex-col items-center">
        <YouTubeEmbed vidlink={section.vidlink}/>
        <div className=" text-right w-7/12">
          <h1 className="text-[#F9C500] text-5xl my-6">{section.name}  •</h1>
          <p className="flex text-xl flex-wrap">{section.des}</p>
        </div>
      </div>
    );
  }

};

export default page;
