import { lazy } from "react";
import HomeLayouts from "./layouts";
const routes = [
  {
    path: "/",
    component: lazy(() => import("./Components/Hero/Hero")),
    exact: true,
    layout: HomeLayouts,
    guard: false,
  },
  {
    path: "/about-us",
    component: lazy(() => import("./Components/AboutUs/AboutUs")),
    exact: true,
    layout: HomeLayouts,
    guard: false,
  },
  {
    path: "/contact-us",
    component: lazy(() => import("./Components/ContactUS")),
    exact: true,
    layout: HomeLayouts,
    guard: false,
  },
  {
    path: "/testimonials",
    component: lazy(() => import("./Components/Testimonials/Testimonials")),
    exact: true,
    layout: HomeLayouts,
    guard: false,
  },
  {
    path: "/internship",
    component: lazy(() => import("./Components/Internship/Internship")),
    exact: true,
    layout: HomeLayouts,
    guard: false,
  },
  {
    path: "/term-and-condition",
    component: lazy(() => import("./Components/TermCondition/TermCondition")),
    exact: true,
    layout: HomeLayouts,
    guard: false,
  },
  {
    path: "/privacy-and-policy",
    component: lazy(() => import("./Components/PrivacyPolicy/PrivacyPolicy")),
    exact: true,
    layout: HomeLayouts,
    guard: false,
  },
  {
    path: "/faqs",
    component: lazy(() => import("./Components/FAQs/FAQs")),
    exact: true,
    layout: HomeLayouts,
    guard: false,
  },
  {
    path: "*",
    component: lazy(() => import("./Components/NotFound/NotFound")),
    exact: true,
    guard: false,
  },
];
export default routes;
