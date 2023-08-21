import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type Props = {};

const RecentActivites = (props: Props) => {
  return (
    <Card className="col-span-5 lg:col-span-2 ">
      <CardHeader>
        <CardTitle className="text-2xl font-bold ">Recent Activites</CardTitle>
        <CardDescription>you have player a total of 7 games.</CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        histories
      </CardContent>
    </Card>
  );
};

export default RecentActivites;
