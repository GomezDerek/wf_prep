import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), // renders into the root.tsx Outlet at /
    route("1stRoute", "routes/1stRouteComponent.tsx"),
    route("teams/:teamId", "routes/team.tsx"), // dynamic segments
    route("c/:categoryId/p/:productId", "routes/product.tsx"), // you can have multiple dynamic segments in one route path
    route("default-params", "routes/my-route-with-default-params.tsx"),
    route("custom-hook", "routes/custom-hook.tsx"),
    route("fetch-practice", "routes/fetch-practice.tsx"),
    route("dog-facts", "routes/custom-hook-fetch.tsx"),

    //parent route
    route("dashboard", "routes/dashboard.tsx", [
    // layout("routes/dashboard.tsx", [
        //child routes
        index("routes/dashboard-home.tsx"), // renders into the dashboard.tsx Outlet at /dashboard
        route("settings", "routes/settings.tsx")
    ]),

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

    // optional segments
    // you can make a route segment optional by adding a ? to the end of the segment
    // route(":lang?/categories", "routes/categories.tsx"),

    // you can have optional static segments, too
    // route("users/:userId/edit?", "routes/user.tsx"),

    // component routes (descendant routes)
    route("wizard/*", "routes/componentRoutes.tsx"),

    // splats
    route("files/*", "routes/files.tsx"),

    // You can also use a splat to catch requests that don't match any route:
    route("*", "routes/catchall.tsx"), // catchall route


] satisfies RouteConfig;
