import prisma from "@/src/lib/PrismaClient";
const get_course_by_id = async (id: any) => {
  const courses = await prisma.course.findFirst({
    where: {
      id: id,
    },
    include: { section: true },
  });
  return courses;
};

prisma.$disconnect();
export default get_course_by_id;
