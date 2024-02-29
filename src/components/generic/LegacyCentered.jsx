import React from "react";
import { twMerge } from "tailwind-merge";

function LegacyCentered({ className = "", children }) {
  return (
    <div
      className={twMerge(
        "absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2",
        className
      )}
    >
      {children}
    </div>
  );
}

export default LegacyCentered;
