import NextAuth from "next-auth";
import { options } from "@/src/lib/auth";
import { PrismaClient } from "@/prisma/generated/client";

const prisma = new PrismaClient();
const handler = NextAuth(options);

export { handler as GET, handler as POST };
