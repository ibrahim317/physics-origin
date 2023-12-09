import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

const get_all_quizes = async () => {
  const quizes = await prisma.quiz.findMany();
  return quizes;
};

export default get_all_quizes;
