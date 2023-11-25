// where we do all the sign in authentications with whatever prividers
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials", // use this name when using signIn function
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

      async authorize(credentials) {
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

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
};
