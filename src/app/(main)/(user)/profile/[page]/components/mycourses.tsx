import Card from "@/src/components/Card";
import ProfileNavBar from "@/src/components/ProfileNavBar";
import get_all_courses from "@/src/lib/db/get_all_courses";
import { get_user_by_email } from "@/src/lib/db/get_user";
import { getServerSession } from "next-auth";

const MyCourses = async () => {
	const session = await getServerSession();
	const courses = await get_all_courses();
	const user = await get_user_by_email(session?.user?.email);

	if (courses.length > 0) {
		const paidcourse = courses.filter((course: any) =>
			user?.courses.find((paidid: any) => paidid == course.id)
		);

		return (
			<>
				<ProfileNavBar name="mycourses" />
				<section className=" p-3 flex flex-col rtl ">
					<div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
						{paidcourse.map((course: any) => (
							<Card type="course" content={course} key={course.id} />
						))}
					</div>
				</section>
			</>
		);
	} else {
		return (
			<>
				<ProfileNavBar name="profile" />
				<section className="rtl w-full flex justify-center items-center">
					<h2 className="text-4xl p-10 font-bold">
						لم تشترك في أي كورسات حتي الان!
					</h2>
				</section>
			</>
		);
	}
};

export default MyCourses;
