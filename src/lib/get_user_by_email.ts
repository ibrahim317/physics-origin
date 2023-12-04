// import axios from "axios";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

const get_user_by_email = async (email: null | undefined | string) => {
  // const instance = axios.create({
  //   baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  // });
  // try {
  //   const user = await instance.get("/api/user", {
  //     params: { email: email },
  //   });
  //   return await user.data;
  // } catch (err) {
  //   throw err;
  // }
  try {
    const user = await prisma.user.findFirst({
      where: { email: email?.toString() },
    });
    return user;
  } catch (err) {
    throw err;
  }
};
export default get_user_by_email;
