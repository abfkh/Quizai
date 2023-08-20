import React from "react";
import { cn } from "@/lib/utils";

function CSSLoading() {
  return (
    <div
      className={cn(
        "css-loading",
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md bg-gray-400 bg-opacity-50"
      )}
    >
      <div
        // blur
        className={cn(
          "glare",
          "absolute top-0 h-full w-full bg-white blur-[80px]"
        )}
      />
    </div>
  );
}

export default CSSLoading;
