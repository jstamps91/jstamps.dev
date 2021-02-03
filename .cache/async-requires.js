// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("./../../../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-index-tsx": () => import("./../../../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-portfolio-tsx": () => import("./../../../src/pages/portfolio.tsx" /* webpackChunkName: "component---src-pages-portfolio-tsx" */),
  "component---src-templates-project-template-tsx": () => import("./../../../src/templates/ProjectTemplate.tsx" /* webpackChunkName: "component---src-templates-project-template-tsx" */)
}

