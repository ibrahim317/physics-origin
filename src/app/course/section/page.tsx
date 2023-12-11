import React from "react";
import File from "./File";
import get_section_by_id from "@/src/lib/get_section_by_id";
import get_user_by_email from "@/src/lib/get_user_by_email";
import { getServerSession } from "next-auth";
import NotFound from "@/src/app/not-found/not-found";
import Video from "./Video";
import Quiz from "./Quiz";

interface params {
  params: { slug: string };
  searchParams: { id: string };
}

const page: React.FC<params> = async ({ params, searchParams }) => {
  try {
    const session = await getServerSession();
    const section = await get_section_by_id(Number(searchParams.id));
    const user = await get_user_by_email(session?.user?.email);
    const userHaveAccess = user?.courses.find(
      (id: any) => id === section?.course[0].id
    );
    if (!userHaveAccess || !session) {
      return <NotFound />;
    }
    switch (section?.tag) {
      case "VIDEO":
        return <Video section={section} />;

      case "FILE":
        return <File section={section} />;
      case "QUIZ":
        return <Quiz section={section} />;
      default:
        break;
    }
  } catch (err) {
    return <NotFound />;
  }
};

export default page;
