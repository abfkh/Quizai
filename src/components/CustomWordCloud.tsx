"use client";
import { useTheme } from "next-themes";
import React from "react";
import D3WordCloud from "react-d3-cloud";
type Props = {};
const data = [
  {
    text: "heGy",
    value: 33,
  },
  {
    text: "RFDhey",
    value: 7,
  },
  {
    text: "heGHHy",
    value: 9,
  },
  {
    text: "heFDy",
    value: 22,
  },
  {
    text: "hREey",
    value: 35,
  },
];
const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;
const CustomWordCloud = (props: Props) => {
  const theme = useTheme();
  return (
    <>
      <D3WordCloud
        data={data}
        height={550}
        width={500}
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme == "dark" ? "white" : "black"}
      />
    </>
  );
};

export default CustomWordCloud;
