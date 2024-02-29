import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef(
  (
    {
      className,
      variant = "solid",
      color = "primary",
      startContent,
      endContent,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        {...rest}
        className={twMerge(
          // Base
          "bg-transparent py-2 px-3 min-h-9 inline-flex justify-center items-center gap-[0.375rem] rounded shadow transition",
          // Solid
          variant === "solid" && "text-white",
          variant === "solid" &&
            color === "primary" &&
            "bg-pink-500 hover:bg-pink-600 active:bg-pink-700 disabled:bg-pink-200",
          variant === "solid" &&
            color === "success" &&
            "bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-green-200",
          variant === "solid" &&
            color === "error" &&
            "bg-red-500 hover:bg-red-600 active:bg-red-700 disabled:bg-red-200",
          variant === "solid" &&
            color === "warning" &&
            "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 disabled:bg-yellow-200",
          // Outline
          variant === "outline" && "border hover:disabled:bg-transparent",
          variant === "outline" &&
            color === "primary" &&
            "border-pink-500 text-pink-500 hover:bg-pink-100 active:bg-pink-200 disabled:border-pink-200 disabled:text-pink-200",
          variant === "outline" &&
            color === "success" &&
            "border-green-500 text-green-500 hover:bg-green-100 active:bg-green-200 disabled:border-green-200 disabled:text-green-200",
          variant === "outline" &&
            color === "error" &&
            "border-red-500 text-red-500 hover:bg-red-100 active:bg-red-200 disabled:border-red-200 disabled:text-red-200",
          variant === "outline" &&
            color === "warning" &&
            "border-yellow-500 text-yellow-500 hover:bg-yellow-100 active:bg-yellow-200 disabled:border-yellow-200 disabled:text-yellow-200",
          className
        )}
        type={rest?.type || "button"}
        ref={ref}
      >
        {startContent}
        {children}
        {startContent}
      </button>
    );
  }
);

export default Button;
