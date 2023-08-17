import { getAuthSession } from "@/lib/nextauth";
import React from "react";
import Link from "next/link";
import SignInButton from "./SignInButton";
import { ThemeToggle } from "./ThemeToggle";
type Props = {};
const Navbar = async (props: Props) => {
  // const session = await getAuthSession();
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
            Quiz Ai
          </p>
        </Link>
        <div className="flex item-center">
          <ThemeToggle className="mr-4" />
          <div className="flex items-center">
            <SignInButton text="sign in"></SignInButton>
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
