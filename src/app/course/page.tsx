import React from "react";
import get_course_by_id from "@/src/lib/get_course_by_id";
import NotFound from "../not-found/not-found";
import is_user_have_course from "@/src/lib/is_user_have_course";
import CourseBody from "./CourseBody";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) => {
  const course = await get_course_by_id(Number(searchParams.id));
  if (!course) return <NotFound />;
  const opened_course = await is_user_have_course(course);
  return <CourseBody course={course} opened_course={opened_course} />;
};
export default page;
