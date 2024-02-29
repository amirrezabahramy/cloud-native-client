import { Outlet } from "@tanstack/react-router";

function AuthRoot() {
  return (
    <div className="border flex justify-center items-center h-full">
      <Outlet />
    </div>
  );
}

export default AuthRoot;
