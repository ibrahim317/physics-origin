import React from "react";
import YouTubeEmbed from "@/src/components/YouTubeEmbed";
import get_section_by_id from "@/src/lib/get_section_by_id";
import DriveEmbed from "@/src/components/DriveEmbed";
import get_user_by_email from "@/src/lib/get_user_by_email";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
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
  const session = await getServerSession();
  if (!session) {
    return <NotFound />;
  }
  try {
    const user = await get_user_by_email(session?.user?.email);
    const found = user.courses.find((id: any) => id === searchParams.id);
    if (!found) {
      throw new Error();
    }
  } catch (err) {
    return <NotFound />;
  }
  const section = await get_section_by_id(searchParams.id);

  if (section.tag == "vid") {
    return (
      <div className="flex flex-col items-center">
        <YouTubeEmbed vidlink={section.yourlink} />
        <div className=" text-right w-7/12">
          <h1 className="text-[#F9C500] text-5xl my-6">{section.name} •</h1>
          <p className="flex text-xl text-right flex-wrap">{section.des}</p>
        </div>
      </div>
    );
  } else if (section.tag == "file") {
    return (
      <div className="flex flex-col  rtl items-center">
        <DriveEmbed fileUrl={section.yourlink} />

        <div className=" text-right w-7/12">
          <h1 className="text-[#F9C500] text-5xl my-6">{section.name} •</h1>
          <p className="flex text-right text-xl flex-wrap">{section.des}</p>
        </div>
      </div>
    );
  }
};

export default page;
