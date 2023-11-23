import NextAuth from "next-auth";
<<<<<<< HEAD
import { options } from "@/src/lib/auth";
import { options } from "../../../../lib/auth";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
=======

>>>>>>> feature-database
const handler = NextAuth(options);

export { handler as GET, handler as POST };
