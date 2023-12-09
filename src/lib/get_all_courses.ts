// import axios from "axios";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
const get_all_courses = async () => {
  const courses = await prisma.course.findMany();
  return courses;
};
export default get_all_courses;
