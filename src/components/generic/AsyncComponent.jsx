import colors from "tailwindcss/colors";
import { HashLoader as Loader } from "react-spinners";
import LegacyCentered from "./LegacyCentered";

function AsyncComponent({ isLoading, isError, error, children }) {
  if (isLoading) {
    return (
      <LegacyCentered>
        <Loader color={colors.blue[500]} />
      </LegacyCentered>
    );
  }

  if (isError) {
    return (
      <LegacyCentered>
        <p className="mb-0 font-irbold">
          Error occured.{" "}
          {error && error.message && <>Reason: {error.message}</>}
        </p>
      </LegacyCentered>
    );
  }

  return children;
}

export default AsyncComponent;
