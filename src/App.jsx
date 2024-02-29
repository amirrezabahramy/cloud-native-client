import "./App.css";
import LocalConfigProvider from "./providers/LocalConfigProvider";
import AuthProvider from "./providers/AuthProvider";
import QueryClientProvider from "./providers/QueryClientProvider";
import RouterProvider from "./providers/RouterProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <LocalConfigProvider>
        <AuthProvider>
          <QueryClientProvider>
            <>
              <RouterProvider />
            </>
          </QueryClientProvider>
        </AuthProvider>
      </LocalConfigProvider>
      <ToastContainer closeOnClick theme="colored" />
    </>
  );
}

export default App;
