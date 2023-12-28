import prisma from "@/src/lib/PrismaClient";
const get_section_by_id = async (id: number) => {
	try {
		const section = await prisma.section.findFirst({
			where: { id: id },
			include: { course: true, questions: true },
		});
		return section;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
export default get_section_by_id;
