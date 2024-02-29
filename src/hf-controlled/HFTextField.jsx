import TextField from "../enhanced/TextField";

import { Controller } from "react-hook-form";

function HFTextField({
  name,
  control,
  rules,
  label,
  startContent,
  endContent,
  containerProps,
  inputProps,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label={label}
          startContent={startContent}
          endContent={endContent}
          containerProps={containerProps}
          inputProps={{ ...field, ...inputProps }}
          error={error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default HFTextField;
