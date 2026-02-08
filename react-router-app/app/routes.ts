import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), // renders into the root.tsx Outlet at /
    route("1stRoute", "routes/1stRouteComponent.tsx"),
    route("teams/:teamId", "routes/team.tsx"), // dynamic segments
    route("c/:categoryId/p/:productId", "routes/product.tsx"), // you can have multiple dynamic segments in one route path
    
    //parent route
    route("dashboard", "routes/dashboard.tsx", [
    // layout("routes/dashboard.tsx", [
        //child routes
        index("routes/dashboard-home.tsx"), // renders into the dashboard.tsx Outlet at /dashboard
        route("settings", "routes/settings.tsx")
    ])

    // This usage of `prefix`...
    // prefix("parent", [
    //   route("child1", "./child1.tsx"),
    //   route("child2", "./child2.tsx"),
    // ])

    // ...is equivalent to this:
    // [
    //   route("parent/child1", "./child1.tsx"),
    //   route("parent/child2", "./child2.tsx"),
    // ]

] satisfies RouteConfig;
