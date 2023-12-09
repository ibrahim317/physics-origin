import React from "react";
import YouTubeEmbed from "@/src/components/YouTubeEmbed";
import get_section_by_id from "@/src/lib/get_section_by_id";
import DriveEmbed from "@/src/components/DriveEmbed";
import get_user_by_email from "@/src/lib/get_user_by_email";
import { getServerSession } from "next-auth";
import NotFound from "@/src/app/not-found/not-found";

const page = async (
  {
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams: { id: number };
  },
  props: any
) => {
  try {
    const session = await getServerSession();
    const section = await get_section_by_id(Number(searchParams.id));
    const user = await get_user_by_email(session?.user?.email);
    const found = user?.courses.find((id: any) => id === section?.course);
    if (!found || !session) {
      throw new Error();
    }
    if (section?.tag == "vid") {
      return (
        <div className="flex flex-col rtl gap-10 items-center">
          <div className="py-9 text-right w-7/12">
            <h1 className="text-[#F9C500] text-5xl my-6">{section?.name} </h1>
            <p className="flex text-xl text-right flex-wrap">{section?.des}</p>
          </div>
          <YouTubeEmbed vidlink={section?.yourlink} />
        </div>
      );
    } else if (section?.tag == "file") {
      return (
        <div className="flex flex-col  rtl items-center">
          <DriveEmbed fileUrl={section?.yourlink} />

          <div className=" text-right w-7/12">
            <h1 className="text-[#F9C500] text-5xl my-6">{section?.name} </h1>
            <p className="flex text-right text-xl flex-wrap">{section?.des}</p>
          </div>
        </div>
      );
    }
  } catch (err) {
    return <NotFound />;
  }
};

export default page;
