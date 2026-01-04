import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/:hotel_name", "routes/pages/hotel-details.tsx"),
] satisfies RouteConfig;
