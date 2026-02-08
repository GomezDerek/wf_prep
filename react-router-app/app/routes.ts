import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("1stRoute", "routes/1stRouteComponent.tsx")
] satisfies RouteConfig;
