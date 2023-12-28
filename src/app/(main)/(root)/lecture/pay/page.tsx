import React from "react";
import get_lecture_by_id from "@/src/lib/db/get/get_by/get_lecture_by_id";
import { get_user_by_email } from "@/src/lib/db/get/get_by/get_user";
import { getServerSession } from "next-auth";
import NotFound from "@/src/app/not-found";
import { redirect } from "next/navigation";
import PayBody from "./components/PayBody";

interface props {
  searchParams: { id: number };
}

const page: React.FC<props> = async ({ searchParams }) => {
  const lecture = await get_lecture_by_id(Number(searchParams.id));
  if (!lecture) return <NotFound />;
  const session = await getServerSession();
  const user = await get_user_by_email(session?.user?.email);
  // if user alreay bought the course get back
  if (user?.lectures.includes(searchParams.id)) {
    redirect(`/`);
  }
  const price = lecture.price ?? 0;
  return <PayBody price={price} user={user} lecture={lecture} />;
};

export default page;
