import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    path: "wiki-lookup",
    label: "Account Lookup",
    element: <AccountLookup />,
  },
  {
    path: "quest-builder",
    label: "Quest Builder",
    element: <QuestBuilder />,
  },
];

const parentRoute = {
  path: "/ab",
  element: <Layout />,
  children: routes,
};
const router = createBrowserRouter([parentRoute]);

export function Router() {
  return <RouterProvider router={router} />;
}
