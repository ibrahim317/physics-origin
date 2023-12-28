import prisma from "@/src/lib/PrismaClient";
const get_all_courses = async (id: any) => {
	const courses = await prisma.course.findFirst({
		where: {
			id: id,
		},
		include: { section: true },
	});
	return courses;
};

prisma.$disconnect();
export default get_all_courses;
