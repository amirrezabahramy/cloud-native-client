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
            "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-200",
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
            "border-blue-500 text-blue-500 hover:bg-blue-100 active:bg-blue-200 disabled:border-blue-200 disabled:text-blue-200",
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
