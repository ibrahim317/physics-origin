import React from "react";
import get_course_by_id from "@/src/lib/db/get_course_by_id";
import NotFound from "@/src/app/not-found";
import dose_user_have_course from "@/src/lib/db/dose_user_have_course";
import CourseBody from "./components/CourseBody";

interface params {
	params: { slug: string };
	searchParams: { id: string };
}

const page: React.FC<params> = async ({ params, searchParams }) => {
	const course = await get_course_by_id(Number(searchParams.id));
	if (!course) return <NotFound />;
	const paid_course = await dose_user_have_course(course);
	return <CourseBody course={course} paid_course={paid_course} />;
};
export default page;