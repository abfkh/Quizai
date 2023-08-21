"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BrainCircuit, History, HistoryIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const HistoryCard = (props: Props) => {
  const router = useRouter();

  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75  "
      onClick={() => {
        router.push("/quiz");
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-2">
        <CardTitle className="text-2xl font-bold">history</CardTitle>
        <HistoryIcon size={28} strokeWidth={2.5}></HistoryIcon>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">View past View attempt</p>
      </CardContent>
    </Card>
  );
};

export default HistoryCard;
