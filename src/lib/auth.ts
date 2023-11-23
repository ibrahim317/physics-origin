import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({

      
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your-username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-password",
        },
      },



      async authorize(credentials) {
        const user: any = { id: 12, name: "ibrahim", password: "123" };
        if (
          credentials?.password === user.password &&
          credentials?.username === user.name
        ) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
