import React from "react";
import NotFound from "@/src/app/not-found/not-found";
import { getServerSession } from "next-auth";
import get_user_by_email from "@/src/lib/get_user_by_email";
import { redirect } from "next/navigation";
import PayBody from "./PayBody";
import get_section_by_id from "@/src/lib/get_section_by_id";

interface props {
  params: { slug: string };
  searchParams: { id: number };
}

const page: React.FC<props> = async ({ params, searchParams }) => {
  const lecture = await get_section_by_id(Number(searchParams.id));
  if (!lecture) return <NotFound />;
  const session = await getServerSession();
  const user = await get_user_by_email(session?.user?.email);
  // if user alreay bought the course get back
  if (user?.lectures.includes(searchParams.id)) {
    redirect(`/`);
  }
  const price = lecture?.price ?? 0;
  return <PayBody price={price} user={user} lecture={lecture} />;
};

export default page;
