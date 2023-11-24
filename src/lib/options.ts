// login thing //
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "phone",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },

      async authorize(credentials, req) {
        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            phone: credentials?.phone,
          },
        });
        // if no user was found
        if (!user) {
          throw new Error("No user found");
        }

        const passwordMatch = credentials?.password === user.pass;
        // if password does not match
        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }

        setTimeout(() => console.log("ibrahim is the best"), 2000);
        return user;
      },
    }),
  ],

  pages: {
    signIn: "/login",
    signOut: "/",
  },
};
