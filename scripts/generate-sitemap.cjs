const fs = require("fs");
const path = require("path");

const siteUrl = "https://bassammalik.com";
const today = new Date().toISOString().split("T")[0];

const staticPages = [
  "/",
  "/blogs",
  "/learn",
  "/resources",
  "/calculators",
  "/tools",
  "/ebooks",
  "/about",
  "/contact",
  "/faq",
  "/risk-disclaimer",
  "/privacy-policy",
  "/terms-and-conditions",
];

function readFile(filePath) {
  return fs.readFileSync(path.join(process.cwd(), filePath), "utf8");
}

function extractSlugs(fileContent) {
  return [...fileContent.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)].map(
    (match) => match[1]
  );
}

function extractPaths(fileContent, key) {
  const regex = new RegExp(`${key}:\\s*['"\`]([^'"\`]+)['"\`]`, "g");
  return [...fileContent.matchAll(regex)].map((match) => match[1]);
}

const blogSlugs = extractSlugs(readFile("src/data/blogs.ts"));
const learnSlugs = extractSlugs(readFile("src/data/learn.ts"));
const calculatorPaths = extractPaths(readFile("src/data/calculators.ts"), "path");
const toolPaths = extractPaths(readFile("src/data/tools.ts"), "href");
const resourcePaths = extractPaths(readFile("src/data/resources.ts"), "path");

const urls = [
  ...staticPages,
  ...blogSlugs.map((slug) => `/blogs/${slug}`),
  ...learnSlugs.map((slug) => `/learn/${slug}`),
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
    <loc>${siteUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(process.cwd(), "public/sitemap.xml"), sitemap);

console.log(`✅ Sitemap generated with ${uniqueUrls.length} URLs`);