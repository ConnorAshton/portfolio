// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-page-tsx": preferDefault(require("/Users/connorashton/Development/connor-ashton-portfolio/src/templates/page.tsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/connorashton/Development/connor-ashton-portfolio/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/connorashton/Development/connor-ashton-portfolio/src/pages/index.tsx")),
  "component---src-pages-page-2-tsx": preferDefault(require("/Users/connorashton/Development/connor-ashton-portfolio/src/pages/page-2.tsx"))
}

exports.json = {
  "layout-index.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/layout-index.json"),
  "a-markdown-page.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/a-markdown-page.json"),
  "layout-index.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/layout-index.json"),
  "404.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/404.json"),
  "layout-index.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/layout-index.json"),
  "index.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/index.json"),
  "layout-index.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/404-html.json"),
  "layout-index.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/connorashton/Development/connor-ashton-portfolio/.cache/json/page-2.json")
}