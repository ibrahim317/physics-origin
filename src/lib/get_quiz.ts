import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

prisma.quiz.findMany({
    include: {
        questions: true
    }
}) // {id: , title: , question{id: , text ...}}