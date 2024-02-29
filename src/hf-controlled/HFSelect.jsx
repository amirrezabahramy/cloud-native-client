import Select from "@/enhanced/Select";
import { Controller } from "react-hook-form";

function HFSelect({
  name,
  control,
  rules,
  label,
  options,
  containerProps,
  selectProps,
  optionsProps,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Select
          label={label}
          containerProps={containerProps}
          options={options}
          selectProps={{ ...field, ...selectProps }}
          optionsProps={optionsProps}
          error={error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default HFSelect;
