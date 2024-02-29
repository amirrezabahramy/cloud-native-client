import TextField from "./TextField";
import { forwardRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import colors from "tailwindcss/colors";

const PasswordField = forwardRef(
  (
    { label, error, helperText, startContent, containerProps, inputProps },
    ref
  ) => {
    const [isShow, setShow] = useState(false);

    const handleShow = () => {
      setShow(true);
    };

    const handleHide = () => {
      setShow(false);
    };

    return (
      <TextField
        ref={ref}
        label={label}
        error={error}
        helperText={helperText}
        startContent={startContent}
        endContent={
          isShow ? (
            <AiOutlineEyeInvisible
              className="cursor-pointer"
              color={colors.slate[900]}
              onClick={handleHide}
            />
          ) : (
            <AiOutlineEye
              className="cursor-pointer"
              color={colors.slate[900]}
              onClick={handleShow}
            />
          )
        }
        containerProps={containerProps}
        inputProps={{
          ...inputProps,
          type: isShow ? inputProps?.type : "password",
        }}
      />
    );
  }
);

export default PasswordField;
