import React from "react";
import File from "./File";
import YouTubeEmbed from "@/src/components/YouTubeEmbed";
import get_section_by_id from "@/src/lib/get_section_by_id";
import DriveEmbed from "@/src/components/DriveEmbed";
import get_user_by_email from "@/src/lib/get_user_by_email";
import { getServerSession } from "next-auth";
import NotFound from "@/src/app/not-found/not-found";
import Video from "./Video";
import Quiz from "./Quiz";

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
    const found = user?.courses.find((id: any) => id === section?.course[0].id);
    if (!found || !session) {
      throw new Error();
    }
    switch (section?.tag) {
      case "video":
        return <Video section={section} />;

      case "file":
        return <File section={section} />;
      case "quiz":
        return <Quiz section={section} />;
      default:
        break;
    }
  } catch (err) {
    return <NotFound />;
  }
};

export default page;
