import { Navigate } from "react-router-dom";
import { lazy } from "react";
const QuestBuilder = lazy(() => import("./pages/Builder"));
const HomePage = lazy(() => import("./pages/Home.page"));
const AccountLookup = lazy(() => import("./pages/Lookup.page"));
export const routes = [
  { index: true, element: <Navigate to="home" replace />, hide: true },
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
export default routes;
