import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    // route("/", "routes/home.tsx"),
    route("", "routes/home.tsx"),
    route("callapi", "callapi/callapi.tsx"),
    route("style-guide", "routes/style-guide/style-guide.tsx"),
] satisfies RouteConfig;
