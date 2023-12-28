import { get_all_courses } from "@/src/lib/db/get/get_all";
import React from "react";
import NotFound from "@/src/app/not-found";
import { getServerSession } from "next-auth";
import { get_user_by_email } from "@/src/lib/db/get/get_by/get_user";
import { redirect } from "next/navigation";
import PayBody from "./PayBody";

interface props {
  params: { slug: string };
  searchParams: { id: number };
}

const page: React.FC<props> = async ({ params, searchParams }) => {
  const all_course = await get_all_courses();
  const needed_course = all_course.find(
    (course: any) => course.id == searchParams.id,
  );
  if (!needed_course) return <NotFound />;
  const session = await getServerSession();
  const user = await get_user_by_email(session?.user?.email);
  // if user alreay bought the course get back
  if (user?.courses.includes(searchParams.id)) {
    redirect(`/course?id=${searchParams.id}`);
  }
  const price = needed_course?.price ?? 0;
  return <PayBody price={price} user={user} needed_course={needed_course} />;
};

export default page;
