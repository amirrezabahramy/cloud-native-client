import {
  RouterProvider as TanstackRouterProvider,
  lazyRouteComponent as lazy,
  Outlet,
  createRootRoute,
  createRouter,
  createRoute,
} from "@tanstack/react-router";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";
import PendingComponent from "@/components/generic/PendingComponent";
import NotFoundComponent from "@/components/generic/NotFoundComponent";

/*** Layouts ***/
// Auth
const AuthLayout = lazy(() => import("@/layouts/auth"));
const AuthLoginLayout = lazy(() => import("@/layouts/auth/outlets/login"));
const AuthSignupLayout = lazy(() => import("@/layouts/auth/outlets/signup"));
/*** Layouts ***/

/*** Routes ***/
// Root
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
  notFoundComponent: NotFoundComponent,
});

// Auth
const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "auth",
  component: AuthLayout,
});
const authLoginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "login",
  component: AuthLoginLayout,
});
const authSignupRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "signup",
  component: AuthSignupLayout,
});
/*** Routes ***/

// Creating route
const routeTree = rootRoute.addChildren([
  authRoute.addChildren([authLoginRoute, authSignupRoute]),
]);

const router = createRouter({
  routeTree,
  defaultPendingComponent: PendingComponent,
});

/*** Routes ***/

// Provider
function RouterProvider() {
  const { loggedInUser } = useAuth();

  useEffect(() => {
    router.invalidate();
  }, [loggedInUser]);

  return <TanstackRouterProvider router={router} />;
}

export default RouterProvider;
