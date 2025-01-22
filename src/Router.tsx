import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.js";
import { Navigate } from "react-router-dom";
import { lazy } from "react";
const QuestBuilder = lazy(() => import("./pages/Builder.js"));
const HomePage = lazy(() => import("./pages/Home.page.js"));
const AccountLookup = lazy(() => import("./pages/Lookup.page.js"));
export const routes = [
  { index: true, element: <Navigate to="home" replace /> },
  {
    path: "home",
    label: "Home",
    element: <HomePage />,
  },
  {
    path: "quest-builder",
    label: "Account Builder",
    element: <AccountLookup />,
  },
];

const parentRoute = {
  path: "/",
  element: <Layout />,
  children: routes,
};
const router = createHashRouter([parentRoute]);

export function Router() {
  return <RouterProvider router={router} />;
}
