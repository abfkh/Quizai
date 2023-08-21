import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {};

const HotTopicsCard = (props: Props) => {
  return (
    <Card className="col-span-2 ">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">hot topics</CardTitle>
        <CardDescription>Click on a topics to start a quiz !!</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">word cloud</CardContent>
    </Card>
  );
};

export default HotTopicsCard;
