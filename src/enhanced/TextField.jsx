import { forwardRef, useCallback } from "react";
import Input from "../basic/Input";
import { twJoin, twMerge } from "tailwind-merge";

const TextField = forwardRef(
  (
    {
      label,
      error,
      helperText,
      startContent,
      endContent,
      containerProps,
      inputProps,
    },
    inputRef
  ) => {
    const iconBaseClassName = useCallback(
      () =>
        twMerge(
          // Base
          "absolute top-1/2 -translate-y-1/2",
          // Enabled
          inputProps?.color === "primary" && "[&>svg]:fill-slate-700",
          inputProps?.color === "success" && "[&>svg]:fill-green-500",
          inputProps?.color === "warning" && "[&>svg]:fill-yellow-500",
          inputProps?.color === "error" && "[&>svg]:fill-red-500",
          Boolean(error) && "[&>svg]:fill-red-500",
          // Disabled
          inputProps?.disabled &&
            inputProps?.color === "primary" &&
            "[&>svg]:fill-slate-400",
          inputProps?.disabled &&
            inputProps?.color === "success" &&
            "[&>svg]:fill-green-200",
          inputProps?.disabled &&
            inputProps?.color === "warning" &&
            "[&>svg]:fill-yellow-200",
          inputProps?.disabled &&
            inputProps?.color === "error" &&
            "[&>svg]:fill-red-200",
          inputProps?.disabled && Boolean(error) && "[&>svg]:fill-red-200"
        ),
      [error]
    );

    return (
      <div
        {...containerProps}
        className={twMerge(
          "flex flex-col gap-[0.375rem]",
          containerProps?.className
        )}
      >
        {Boolean(label) && <label htmlFor={inputProps?.name}>{label}</label>}
        <div className="relative w-full">
          {Boolean(startContent) && (
            <span className={twJoin(iconBaseClassName(), "start-2.5")}>
              {startContent}
            </span>
          )}
          <Input
            {...inputProps}
            className={twMerge(
              "w-full",
              Boolean(startContent) && "ps-8",
              Boolean(endContent) && "pe-8",
              inputProps?.className
            )}
            color={Boolean(error) ? "error" : inputProps?.color}
            ref={inputRef}
          />
          {Boolean(endContent) && (
            <span className={twJoin(iconBaseClassName(), "end-2.5")}>
              {endContent}
            </span>
          )}
        </div>
        {Boolean(helperText) && (
          <small
            className={twMerge(
              // Enabled
              inputProps?.color === "primary" && "text-slate-700",
              inputProps?.color === "success" && "text-green-500",
              inputProps?.color === "warning" && "text-yellow-500",
              inputProps?.color === "error" && "text-red-500",
              Boolean(error) && "text-red-500",
              // Disabled
              inputProps?.disabled &&
                inputProps?.color === "primary" &&
                "text-slate-400",
              inputProps?.disabled &&
                inputProps?.color === "success" &&
                "text-green-200",
              inputProps?.disabled &&
                inputProps?.color === "warning" &&
                "text-yellow-200",
              inputProps?.disabled &&
                inputProps?.color === "error" &&
                "text-red-200",
              inputProps?.disabled && Boolean(error) && "text-red-200"
            )}
          >
            {helperText}
          </small>
        )}
      </div>
    );
  }
);

export default TextField;
