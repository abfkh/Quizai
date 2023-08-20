"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
type Props = {
  text: string;
};

const SignInButton = (props: Props) => {
  return (
    <Button
      onClick={() => {
        signIn("google").catch(console.error);
      }}
    >
      {props.text}
    </Button>
  );
};
// const SignInButton = (props: Props) => {
//   return (
//     <Button
//       onClick={() => {
//         signIn("google").catch(console.error);
//       }}
//     >
//       {""}
//     </Button>
//   );
// };

export default SignInButton;
