// login thing //
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/src/lib/prismadb'

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

      async authorize(credentials) {

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
              phone: credentials?.phone
          }
        });

        // if no user was found 
        if (!user) {
            throw new Error('No user found')
        }

        const passwordMatch = credentials?.password === user.password;
        // if password does not match
        if (!passwordMatch) {
          throw new Error('Incorrect password')
        }

        return user;
      },
    }),
  ],

  secret: process.env.SECRET,

  pages: {
    signIn: "/login",
    signOut: "/",
  },

  debug: process.env.NODE_ENV === "development",
};
