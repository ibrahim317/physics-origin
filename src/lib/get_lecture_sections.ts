// import axios from "axios";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

const get_lecture_sections = async (id: string) => {
  try {
    const sections = await prisma.section.findMany({
      where: { lecture: id },
    });
    return sections;
  } catch (err) {
    throw err;
  }
};
export default get_lecture_sections;
