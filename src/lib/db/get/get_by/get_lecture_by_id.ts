import prisma from "@/src/lib/PrismaClient";
const get_lecture_by_id = async (id: number) => {
  try {
    const lecture = await prisma.lecture.findFirst({
      where: { id: id },
    });
    return lecture;
  } catch (err) {
    throw err;
  }
};

prisma.$disconnect();
export default get_lecture_by_id;
