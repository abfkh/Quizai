// "use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import SignInButton from "@/components/SignInButton";
import { useSession } from "next-auth/react";
// import CSSLoading from "@/components/CSSLoading";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

// import { getAuthSession } from "@/lib/nextauth";
export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }
  // const { data: session } = useSession();
  // // const session = await getAuthSession();
  // if (session?.user) {
  //   return redirect("/dashboard");
  // }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px] ">
        <CardHeader>
          welcome bro !!
          <CardDescription>hi brothers welcome to my platform</CardDescription>
          {/* {session?.user ? (
            <h1>welcome {session.user.name}</h1>
          ) : status === "loading" ? (
            <div className="w-20 h-5">
              <CSSLoading />
            </div>
          ) : (
           
          )}  */}
          <SignInButton text="sign in"></SignInButton>
        </CardHeader>
      </Card>
    </div>
  );
}
