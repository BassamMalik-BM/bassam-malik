const fs = require("fs");
const path = require("path");

const SITE_URL = "https://bassammalik.com";
const TODAY = new Date().toISOString().split("T")[0];

const staticPages = [
  "/",
  "/learn",
  "/learn/categories",
  "/resources",
  "/tools",
  "/calculators",
  "/ebooks",
  "/about",
  "/contact",
  "/faq",
  "/sources",
  "/editorial-policy",
  "/risk-disclaimer",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookies-policy",
  "/start-here",
];

function readFile(filePath) {
  return fs.readFileSync(path.join(process.cwd(), filePath), "utf8");
}

function extractArticleRoutes(fileContent) {
  const regex =
    /slug:\s*["'`](.*?)["'`][\s\S]*?category:\s*\{[\s\S]*?slug:\s*["'`](.*?)["'`]/g;

  const routes = [];

  let match;

  while ((match = regex.exec(fileContent)) !== null) {
    routes.push({
      slug: match[1],
      category: match[2],
    });
  }

  return routes;
}

function extractPaths(fileContent, key) {
  const regex = new RegExp(`${key}:\\s*["'\`]([^"'\`]+)["'\`]`, "g");

  return [...fileContent.matchAll(regex)].map((match) => match[1]);
}

const articleRoutes = extractArticleRoutes(
  readFile("src/data/articles/index.ts")
);

const calculatorPaths = extractPaths(
  readFile("src/data/calculators.ts"),
  "path"
);

const toolPaths = extractPaths(
  readFile("src/data/tools.ts"),
  "href"
);

const resourcePaths = extractPaths(
  readFile("src/data/resources.ts"),
  "path"
);

const urls = [
  ...staticPages,

  // Category pages
  ...new Set(articleRoutes.map((article) => `/learn/${article.category}`)),

  // Article pages
  ...articleRoutes.map(
    (article) => `/learn/${article.category}/${article.slug}`
  ),

  ...calculatorPaths,
  ...toolPaths,
  ...resourcePaths,
];

const uniqueUrls = [...new Set(urls)];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (url) => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${url === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${
      url === "/"
        ? "1.0"
        : url.startsWith("/learn/")
        ? "0.9"
        : "0.8"
    }</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(
  path.join(process.cwd(), "public/sitemap.xml"),
  sitemap
);

console.log(`✅ Sitemap generated with ${uniqueUrls.length} URLs`);