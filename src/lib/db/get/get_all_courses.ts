// import axios from "axios";
import prisma from "@/src/lib/PrismaClient";
const get_all_courses = async () => {
	const courses = await prisma.course.findMany({
		include: { section: true },
	});
	return courses;
};
prisma.$disconnect();
export default get_all_courses;
