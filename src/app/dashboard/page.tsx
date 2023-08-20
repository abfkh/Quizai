import HistoryCard from "@/components/dashboard/HistoryCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export const metadata = {
  title: "Dashboard | Abfkh Ai",
  description: "Quiz yourself on anything!",
};

const Dasboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex item-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="grid gap-4 mt-4 md:grid-cols-2">
          <QuizMeCard />
          <HistoryCard />
        </div>
      </div>
    </main>
  );
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
