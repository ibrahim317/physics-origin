import NextAuth from "next-auth";
import { options } from "@/src/lib/auth";
const handler = NextAuth(options);

export { handler as GET, handler as POST };
