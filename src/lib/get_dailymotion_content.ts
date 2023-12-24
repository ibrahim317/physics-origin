// import axios from "axios";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

const get_dailymotion_content = async (id: number) => {
  try {
    const section = await prisma.section.findUnique({
      where: { id },
    });
    const link = section?.yourlink ?? "";
    return link;
  } catch (err: any) {
    console.error("Error" + err.message);
  }
};
export default get_dailymotion_content;
