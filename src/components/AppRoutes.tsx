import Header from "./Header";
import { Route, Routes } from "react-router";
import { AppRoute, routes } from "../utils/routes";
import Layout from "./Layout";

const makeRouteComponent = (route: AppRoute) => {
  return route.header ? (
    <Header header={route.header}>
      <route.component />
    </Header>
  ) : (
    <route.component />
  );
};

const makeRouteComponents = (route: AppRoute) => {
  const routeComponent = makeRouteComponent(route);
  const path = route.path;
  return (
    <Route key={`route-${path}`} path={path} element={routeComponent}></Route>
  );
};

export default function AppRoutes() {
  const appRoutes = routes.map((route) => makeRouteComponents(route));
  return (
    <Layout>
      <Routes>{appRoutes}</Routes>
    </Layout>
  );
}
