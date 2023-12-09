import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

const get_question_by_id = async (id: number) => {
  try {
    const question = await prisma.question.findMany({
      where: { id: id },
    });
    return question;
  } catch (err) {
    throw err;
  }
};

export default get_question_by_id;
