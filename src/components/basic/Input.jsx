import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Input = forwardRef(({ className, color = "primary", ...rest }, ref) => {
  return (
    <input
      {...rest}
      className={twMerge(
        "py-2 px-3 rounded outline outline-1 shadow transition focus:outline-4 disabled:outline-none",
        color === "primary" && "outline-blue-500",
        color === "success" && "outline-green-500",
        color === "warning" && "outline-yellow-500",
        color === "error" && "outline-red-500",
        className
      )}
      ref={ref}
    />
  );
});

export default Input;
