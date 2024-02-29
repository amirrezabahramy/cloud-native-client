import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Select = forwardRef(
  (
    {
      label,
      error,
      helperText,
      color = "primary",
      options,
      optionsProps,
      containerProps,
      selectProps,
    },
    ref
  ) => {
    return (
      <div
        {...containerProps}
        className={twMerge(
          "flex flex-col gap-[0.375rem]",
          containerProps?.className
        )}
      >
        {Boolean(label) && <label htmlFor={selectProps?.name}>{label}</label>}
        <select
          {...selectProps}
          className={twMerge(
            "py-2 px-3 rounded outline outline-1 border-r-8 border-r-transparent shadow transition focus:outline-4 disabled:outline-none",
            color === "primary" && "outline-blue-500",
            color === "success" && "outline-green-500",
            color === "warning" && "outline-yellow-500",
            color === "error" && "outline-red-500",
            selectProps?.className
          )}
          ref={ref}
        >
          {options.map((option) => (
            <option key={option.value} {...optionsProps} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {Boolean(helperText) && (
          <small
            className={twMerge(
              // Enabled
              color === "primary" && "text-slate-700",
              color === "success" && "text-green-500",
              color === "warning" && "text-yellow-500",
              color === "error" && "text-red-500",
              Boolean(error) && "text-red-500",
              // Disabled
              selectProps?.disabled && color === "primary" && "text-slate-400",
              selectProps?.disabled && color === "success" && "text-green-200",
              selectProps?.disabled && color === "warning" && "text-yellow-200",
              selectProps?.disabled && color === "error" && "text-red-200",
              selectProps?.disabled && Boolean(error) && "text-red-200"
            )}
          >
            {helperText}
          </small>
        )}
      </div>
    );
  }
);

export default Select;
