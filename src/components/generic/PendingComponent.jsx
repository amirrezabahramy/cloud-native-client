import colors from "tailwindcss/colors";
import { HashLoader as Loader } from "react-spinners";

function PendingComponent() {
  return (
    <div className="absolute top-1/2 start-1/2 -translate-y-1/2 translate-x-1/2">
      <Loader color={colors.blue[500]} />
    </div>
  );
}

export default PendingComponent;
