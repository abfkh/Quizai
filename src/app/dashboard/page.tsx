import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export const metadata = {
  title: "Dashboard | Quizmify",
  description: "Quiz yourself on anything!",
};

const Dasboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  return <main className="p-8 mx-auto max-w-7xl">HI </main>;
};

export default Dasboard;

// import React from "react";
// import Dashboard from "@/components/pages/dashboard";

// type Props = {};

// export const metadata = {
//   title: "Dashboard | abfkh",
// };

// const page = (props: Props) => {
//   return <Dashboard />;
// };

// export default page;
