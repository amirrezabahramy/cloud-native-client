import PasswordField from "../enhanced/PasswordField";

import { Controller } from "react-hook-form";

function HFPasswordField({
  name,
  control,
  rules,
  label,
  startContent,
  containerProps,
  inputProps,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <PasswordField
          label={label}
          startContent={startContent}
          containerProps={containerProps}
          inputProps={{ ...field, ...inputProps }}
          error={error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default HFPasswordField;
