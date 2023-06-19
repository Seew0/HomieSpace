import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../../pages/dashboard"));
const List = lazy(() => import("../../pages/list"));
const Explore = lazy(() => import("../../pages/explore"));
const Page404 = lazy(() => import("../pages/404"));

const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/create",
    component: List,
  },
  {
    path: "/charts",
    component: Explore,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export default routes;
