// import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { prisma } from "./dt";
// import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
// // declare module "next-auth" {
// //   interface Session extends DefaultSession {
// //     User: {
// //       id: string;
// //     } & DefaultSession["user"];
// //   }
// // }
// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     user: {
//       id: string;
//       // ...other properties
//       // role: UserRole;
//     } & DefaultSession["user"];
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//   }
// }

// export const authOptions: NextAuthOptions = {
//   callbacks: {
//     // jwt: async ({ token }) => {
//     //   console.log({
//     //     token,
//     //   });
//     //   const db_user = await prisma.user.findFirst({
//     //     where: {
//     //       email: token?.email,
//     //     },
//     //   });
//     //   if (db_user) {
//     //     token.id = db_user.id;
//     //   }
//     //   return token;
//     // },
//     session: ({ session, token }) => {
//       if (token) {
//         session.user.id = token.id;
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.image = token.picture;
//       }
//       return session;
//     },
//     signIn(params) {
//       console.log({
//         params,
//       });

//       return true;
//     },
//   },
//   secret: "gfdgfdgfdgfdgfdgd",

//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId:
//         "153533578305-0gb3civeteatvagcosd3jgd8d72vpcsh.apps.googleusercontent.com",
//       clientSecret: "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",
//       allowDangerousEmailAccountLinking: true,
//       async profile(profile: GoogleProfile, tokens) {
//         try {
//           const { name, email, picture } = profile;
//           // console.log("================= PRISMA ================");
//           // console.log({
//           //   prisma,
//           // });
//           const user = await prisma.user.upsert({
//             where: { email },
//             update: { emailVerified: new Date() },
//             create: {
//               accounts: {
//                 create: {
//                   provider: "google",
//                   providerAccountId: profile.sub,
//                   type: "oauth",
//                   scope: tokens.scope,
//                   access_token: tokens.access_token,
//                   refresh_token: tokens.refresh_token,
//                   token_type: tokens.token_type,
//                   session_state: tokens.session_state,
//                   expires_at: tokens.expires_at,
//                   id_token: tokens.id_token,
//                 },
//               },
//               email,
//               emailVerified: new Date(),
//               name,
//               image: picture,
//             },
//           });

//           return {
//             ...user,
//           };
//         } catch (e) {
//           console.log("============ ERRORRRRRRRRRRRRRRRRR ============");
//           console.log({
//             ERRORRR: e,
//           });
//           return {
//             id: "llll",
//           };
//         }
//       },
//     }),
//   ],
// };

// export const getAuthSession = () => {
//   return getServerSession(authOptions);
// };

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

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, {
  NextAuthOptions,
  DefaultSession,
  getServerSession,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./dt";

// Extend the default session and JWT structures
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // Add any other user properties here
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

// Configuration options for NextAuth
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token }) => {
      try {
        const db_user = await prisma.user.findFirst({
          where: { email: token?.email },
        });
        if (db_user) {
          token.id = db_user.id;
        }
      } catch (error) {
        console.error("Error fetching user from DB:", error);
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
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

// Utility function to get authentication session
export const getAuthSession = () => {
  return getServerSession(authOptions);
};
