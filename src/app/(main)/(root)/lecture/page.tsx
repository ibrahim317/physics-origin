import React from "react";
import { get_user_by_email } from "@/src/lib/db/get/get_by/get_user";
import { getServerSession } from "next-auth";
import NotFound from "@/src/app/not-found";
import Video from "./components/Video";
import { LectureType } from "@/src/types/global";
import get_lecture_by_id from "@/src/lib/db/get/get_by/get_lecture_by_id";

interface params {
  searchParams: { id: string };
}
const page = async ({ searchParams }: params) => {
  try {
    const session = await getServerSession();
    const lecture = await get_lecture_by_id(Number(searchParams.id));
    const user = await get_user_by_email(session?.user?.email);
    const userHaveAccess = user?.lectures.find((id: any) => id === lecture?.id);
    if (!userHaveAccess || !session) {
      return <NotFound />;
    }
    return <Video lecture={lecture as LectureType} />;
  } catch (err) {
    return <NotFound />;
  }
};

export default page;
