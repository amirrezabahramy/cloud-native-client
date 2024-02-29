import { forwardRef } from "react";
import Button from "../basic/Button";
import { BeatLoader } from "react-spinners";
const LoadingButton = forwardRef(({ isLoading, loaderSize, ...rest }, ref) => {
  return (
    <Button disabled={isLoading || rest?.disabled} {...rest} ref={ref}>
      {isLoading ? (
        <BeatLoader color="#fff" size={loaderSize || 4} />
      ) : (
        rest?.children
      )}
    </Button>
  );
});

export default LoadingButton;
