import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
// import axios from "axios";
const get_section_by_id = async (id: number) => {
  try {
    const section = await prisma.section.findFirst({
      where: { id: id },
    });
    return section;
  } catch (err) {
    throw err;
  }
};
export default get_section_by_id;
