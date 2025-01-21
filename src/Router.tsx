import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";

const parentRoute = {
  path: "/AB-list-maker",
  element: <Layout />,
  children: routes,
};
const router = createBrowserRouter([parentRoute]);

export function Router() {
  return <RouterProvider router={router} />;
}
