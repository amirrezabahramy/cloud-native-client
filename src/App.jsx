import "./App.css";
import LocalConfigProvider from "./providers/LocalConfigProvider";
import AuthProvider from "./providers/AuthProvider";
import QueryClientProvider from "./providers/QueryClientProvider";
import RouterProvider from "./providers/RouterProvider";

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
    </>
  );
}

export default App;
