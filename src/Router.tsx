import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import QuestBuilder from "./pages/Builder";
import { HomePage } from "./pages/Home.page";
import AccountLookup from "./pages/Lookup.page";

export const routes = [
  {
    path: "/",
    label: "Home",
    element: <HomePage />,
  },
  {
    path: "/wiki-lookup",
    label: "Account Lookup",
    element: <AccountLookup />,
  },
  {
    path: "/quest-builder",
    label: "Quest Builder",
    element: <QuestBuilder />,
  },
];

const parentRoute = {
  path: "/AB-list-maker",
  label: "Layout",
  element: <Layout />,
  children: routes,
};
const router = createBrowserRouter([parentRoute]);

export function Router() {
  return <RouterProvider router={router} />;
}
