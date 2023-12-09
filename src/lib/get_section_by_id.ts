import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
const get_section_by_id = async (id: number) => {
  try {
    const section = await prisma.section.findFirst({
      where: { id: id },
      include: { course: true },
    });
    return section;
  } catch (err) {
    throw err;
  }
};
export default get_section_by_id;
