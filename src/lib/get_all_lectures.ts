// import axios from "axios";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
const get_all_lectures = async () => {
  // const instance = axios.create({
  //   baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  // });

  // try {
  //   const lectures = await instance.get("/api/lecture");
  //   return await lectures.data;
  // } catch (err) {
  //   throw err;
  // }
  const lectures = await prisma.lecture.findMany();
  return lectures;
};
export default get_all_lectures;
