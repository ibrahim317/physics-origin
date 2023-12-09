import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const get_quiz = async () => {
  
    const quiz = await prisma.quiz.findMany({
        include: {
            questions: true
        }
    })
    return quiz;
};
export default get_quiz;
