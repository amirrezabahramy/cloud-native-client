import { httpMessages } from "@/services/api";
import { HttpStatusCode } from "axios";
import { toast } from "react-toastify";

function useQueryHandler() {
  const handleSuccess = (data) => {
    toast.success(httpMessages.success[data.status]);
  };

  const handleError = (error, logoutFn) => {
    if (error.response) {
      toast.error(
        { ...httpMessages.error.client, ...httpMessages.error.server }[
          error.response.status
        ]
      );
      if (error.response.status === HttpStatusCode.Unauthorized) {
        logoutFn();
      }
    } else {
      toast.error(httpMessages.error.network[error.code]);
    }
  };

  return { handleSuccess, handleError };
}

export default useQueryHandler;
