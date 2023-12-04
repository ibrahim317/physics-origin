// import axios from "axios";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

const get_course_sections = async (id: string) => {
  // const instance = axios.create({
  //   baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  // });
  // try {
  //   const sections = await instance.get("/api/ccontent", {
  //     params: { id: id },
  //   });
  //   return await sections.data;
  // } catch (err) {
  //   throw err;
  // }
  try {
    const sections = await prisma.section.findMany({
      where: { course: id },
    });
    return sections;
  } catch (err) {
    throw err;
  }
};
export default get_course_sections;
