
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

const get_quiz_questions = async (id: string) => {

  try {
    const questions = await prisma.question.findMany({
      where: { quiz: id },
    });
    return questions;
  } catch (err) {
    throw err;
  }
};

export default get_quiz_questions;
