import { Outlet } from "@tanstack/react-router";

function AuthRoot() {
  return (
    <div className="flex justify-center items-center h-full">
      <Outlet />
    </div>
  );
}

export default AuthRoot;
