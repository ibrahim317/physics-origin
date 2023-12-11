import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
const get_all_lectures = async () => {
  try {
    const videos = await prisma.section.findMany({
      where: { tag: "video" },
    });
    return videos;
  } catch (err) {
    throw err;
  }
};
export default get_all_lectures;
