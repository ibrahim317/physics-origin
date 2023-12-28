import prisma from "@/src/lib/PrismaClient";

export const get_all_courses = async () => {
  const courses = await prisma.course.findMany({
    include: { section: true },
  });
  return courses;
};

export const get_all_lectures = async () => {
  try {
    const videos = await prisma.lecture.findMany({});
    return videos;
  } catch (err) {
    throw err;
  }
};
export const get_all_sections = async () => {
  try {
    const section = await prisma.section.findMany({});
    return section;
  } catch (err) {
    throw err;
  }
};
export const get_all_users = async () => {
  const users = await prisma.user.findMany({});
  return users;
};
prisma.$disconnect();
