import { lazy } from "react";

import Home from "./views/Home/Home";
import Login from "./views/Login/Login"
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound/NotFound";
import JobsListing from "./views/JobsListing/JobsListing";


export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/register",
    component: Register,
    requiresAuth: false,
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false,
  },
  {
    path: "/jobs",
    component: JobsListing,
    requiresAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requiresAuth: false,
  },
];