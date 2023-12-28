import prisma from "@/src/lib/PrismaClient";
const get_all_courses = async () => {
  const users = await prisma.user.findMany({});
  return users;
};
prisma.$disconnect();
export default get_all_courses;
