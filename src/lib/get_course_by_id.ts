import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
const get_all_courses = async (id: any) => {
  const courses = await prisma.course.findFirst({
    where: {
      id: id,
    },
    include: { section: true },
  });
  return courses;
};
export default get_all_courses;
