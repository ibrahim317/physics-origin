import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
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
        // checking
        if (
          credentials?.phone != "01011111111" ||
          credentials?.password != "banana123#"
        ) {
          throw new Error("Invalid Credentials");
        }

        // if everything is ok
        return "cool";
      },
    }),
  ],

  pages: {
    signIn: "@src/app/login",
    signOut: "@src/app/",
  },
};
