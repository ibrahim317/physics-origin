import NextAuth from "next-auth";
import { authOptions } from "@/src/lib/options";
import { PrismaClient } from "@/prisma/generated/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
