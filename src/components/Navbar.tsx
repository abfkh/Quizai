"use client";

import React from "react";
import Link from "next/link";
import SignInButton from "./SignInButton";
import { ThemeToggle } from "./ThemeToggle";
import { useSession } from "next-auth/react";
import CSSLoading from "./CSSLoading";
import UserAccountNav from "./UserAccountNav";

type Props = {};
const Navbar = (props: Props) => {
  const { data: session, status } = useSession();

  // if (session?.user) {
  //   return <pre>{JSON.stringify(session.user, null, 2)}</pre>;
  // } else {
  //   return <div>Not sign in</div>;
  // }

  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-6 border-r-6 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[4px] md:block dark:border-white">
            Abfkh Ai
          </p>
        </Link>
        <div className="flex item-center">
          <ThemeToggle className="mr-4" />
          <div className="flex items-center">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : // <h1>welcome {session.user.name}</h1>
            status === "loading" ? (
              <div className="w-20 h-5">
                <CSSLoading />
              </div>
            ) : (
              <SignInButton text="sign in"></SignInButton>
            )}
            {/* <ThemeToggle className="mr-4" />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

{
  /*SHIT */
}

// import Link from "next/link";
// import React from "react";

// import UserAccountNav from "./UserAccountNav";
// import { ThemeToggle } from "./ThemeToggle";
// import { getAuthSession } from "@/lib/nextauth";
// import SignInButton from "./SignInButton";

// const Navbar = async () => {
//   const session = await getAuthSession();

//   return (
//     <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
//       <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
//         {/* Logo */}
//         <Link href={"/"} className="flex items-center gap-2">
//           <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
//             Quizmify
//           </p>
//         </Link>
//         <div className="flex items-center">
//           <ThemeToggle className="mr-4" />

//           {session?.user ? (
//             <UserAccountNav user={session.user} />
//           ) : (
//             <SignInButton text={"Sign In"} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
