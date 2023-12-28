// import axios from "axios";
import prisma from "@/src/lib/PrismaClient";

const get_course_sections = async (ids: any) => {
	try {
		const sections = await prisma.section.findMany({
			where: { id: { in: ids } },
		});
		return sections;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
export default get_course_sections;
