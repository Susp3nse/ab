import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.js";
import { Navigate } from "react-router-dom";
import { lazy } from "react";
import PremadeLists from "./pages/Premade.page.js";
const QuestBuilder = lazy(() => import("./components/Builder.js"));
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
  {
    path: "premade",
    label: "Premade Lists",
    element: <PremadeLists />,
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
