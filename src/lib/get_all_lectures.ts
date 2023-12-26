import prisma from "@/src/lib/PrismaClient";
const get_all_lectures = async () => {
	try {
		const videos = await prisma.section.findMany({
			where: { tag: "VIDEO" },
		});
		return videos;
	} catch (err) {
		throw err;
	}
};
prisma.$disconnect();
export default get_all_lectures;
