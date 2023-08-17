import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./dt";
import GoogleProvider from "next-auth/providers/google";
// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     User: {
//       id: string;
//     } & DefaultSession["user"];
//   }
// }

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt: async ({ token }) => {
      const db_user = await prisma.user.findFirst({
        where: {
          email: token?.email,
        },
      });
      if (db_user) {
        token.id = db_user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};

// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { type GetServerSidePropsContext } from "next";
// import NextAuth from "next-auth";

// import {
//   getServerSession,
//   type NextAuthOptions,
//   type DefaultSession,
// } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { prisma } from "./dt";

// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     user: {
//       id: string;
//       // ...other properties
//       // role: UserRole;
//     } & DefaultSession["user"];
//   }

//   // interface User {
//   //   // ...other properties
//   //   // role: UserRole;
//   // }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//   }
// }

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     jwt: async ({ token }) => {
//       const db_user = await prisma.user.findFirst({
//         where: {
//           email: token?.email,
//         },
//       });
//       if (db_user) {
//         token.id = db_user.id;
//       }
//       return token;
//     },
//     session: ({ session, token }) => {
//       if (token) {
//         session.user.id = token.id;
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.image = token.picture;
//       }
//       return session;
//     },
//   },
//   adapter: PrismaAdapter(prisma),
//   //   providers: [
//   //     GoogleProvider({
//   //       clientId: process.env.GOOGLE_CLIENT_ID as string,
//   //       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//   //       authorization: {
//   //         params: {
//   //           prompt: "consent",
//   //           access_type: "offline",
//   //           response_type: "code",
//   //         },
//   //       },
//   //     }),
//   //   ],
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
// };

// export const getAuthSession = () => {
//   return getServerSession(authOptions);
// };