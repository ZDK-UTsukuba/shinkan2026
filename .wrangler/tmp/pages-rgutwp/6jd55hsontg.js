// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/",
    "/_server-islands/*",
    "/_image"
  ],
  exclude: [
    "/_astro/*",
    "/.assetsignore",
    "/favicon.ico",
    "/favicon.svg",
    "/logo.svg",
    "/logo_horizontal.svg",
    "/og-image.png",
    "/robots.txt",
    "/attachments/*",
    "/maps/*",
    "/og/*",
    "/404",
    "/about",
    "/orgs/*",
    "/privacy",
    "/timetable"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/home/raspi0124/WS/shinkan2026/.wrangler/tmp/pages-rgutwp/bundledWorker-0.5604375259389646.mjs";
import { isRoutingRuleMatch } from "/home/raspi0124/WS/shinkan2026/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/home/raspi0124/WS/shinkan2026/.wrangler/tmp/pages-rgutwp/bundledWorker-0.5604375259389646.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=6jd55hsontg.js.map
