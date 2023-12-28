// import axios from "axios";
import prisma from "@/src/lib/PrismaClient";

export const get_user_by_email = async (email: null | undefined | string) => {
  try {
    const user = await prisma.user.findFirst({
      where: { email: email?.toString() },
    });
    return user;
  } catch (err) {
    throw err;
  }
};
export const get_user_by_id = async (id: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    });
    return user;
  } catch (err) {
    throw err;
  }
};
export const get_user_with_progress = async (
  email: null | undefined | string,
) => {
  try {
    return await prisma.user.findUnique({
      where: {
        email: email?.toString(),
      },
      include: { progress: true },
    });
  } catch (err) {
    throw err;
  }
};

prisma.$disconnect();
