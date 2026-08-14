const fs = require("fs");
const path = require("path");

const SITE_URL = "https://bassammalik.com";
const TODAY = new Date().toISOString().split("T")[0];

/* =========================================================
   STATIC PAGES
========================================================= */

const staticPages = [
  "/",
  "/learn",
  "/learn/categories",
  "/discover",
  "/discover/exchanges",
  "/discover/books",
  "/discover/analysis-websites",
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

/* =========================================================
   HELPERS
========================================================= */

function readFile(filePath) {
  return fs.readFileSync(
    path.join(process.cwd(), filePath),
    "utf8"
  );
}

function fileExists(filePath) {
  return fs.existsSync(
    path.join(process.cwd(), filePath)
  );
}

/* =========================================================
   ARTICLE FILES
========================================================= */

function getAllTsFiles(directory) {
  const fullDirectory = path.join(
    process.cwd(),
    directory
  );

  if (!fs.existsSync(fullDirectory)) {
    return [];
  }

  const entries = fs.readdirSync(fullDirectory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(
      fullDirectory,
      entry.name
    );

    if (entry.isDirectory()) {
      const nestedPath = path.join(
        directory,
        entry.name
      );

      files.push(...getAllTsFiles(nestedPath));
      continue;
    }

    if (
      entry.isFile() &&
      entry.name.endsWith(".ts") &&
      entry.name !== "index.ts"
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractArticleRoute(fileContent) {
  const slugMatch = fileContent.match(
    /slug:\s*["'`]([^"'`]+)["'`]/
  );

  const categoryMatch = fileContent.match(
    /category:\s*\{[\s\S]*?slug:\s*["'`]([^"'`]+)["'`]/
  );

  if (!slugMatch || !categoryMatch) {
    return null;
  }

  return {
    slug: slugMatch[1],
    category: categoryMatch[1],
  };
}

const articleFiles = getAllTsFiles(
  "src/data/articles"
);

const articleRoutes = articleFiles
  .map((filePath) => {
    const content = fs.readFileSync(
      filePath,
      "utf8"
    );

    return extractArticleRoute(content);
  })
  .filter(Boolean);

/* =========================================================
   CALCULATORS
========================================================= */

function extractSlugs(fileContent) {
  const regex =
    /slug:\s*["'`]([^"'`]+)["'`]/g;

  return [...fileContent.matchAll(regex)].map(
    (match) => match[1]
  );
}

const calculatorSlugs = fileExists(
  "src/data/calculators/index.ts"
)
  ? extractSlugs(
      readFile(
        "src/data/calculators/index.ts"
      )
    )
  : [];

const calculatorPaths = calculatorSlugs.map(
  (slug) => `/calculators/${slug}`
);

/* =========================================================
   TOOLS
========================================================= */

const toolSlugs = fileExists(
  "src/data/tools/index.ts"
)
  ? extractSlugs(
      readFile("src/data/tools/index.ts")
    )
  : [];

const toolPaths = toolSlugs.map(
  (slug) => `/tools/${slug}`
);

/* =========================================================
   OPTIONAL DISCOVER DATA
========================================================= */

function extractDiscoverSlugs(
  filePath,
  baseRoute
) {
  if (!fileExists(filePath)) {
    return [];
  }

  const slugs = extractSlugs(
    readFile(filePath)
  );

  return slugs.map(
    (slug) => `${baseRoute}/${slug}`
  );
}

const exchangePaths = extractDiscoverSlugs(
  "src/data/discover/exchanges/index.ts",
  "/discover/exchanges"
);

const bookPaths = extractDiscoverSlugs(
  "src/data/discover/books/index.ts",
  "/discover/books"
);

const analysisWebsitePaths =
  extractDiscoverSlugs(
    "src/data/discover/analysis-websites/index.ts",
    "/discover/analysis-websites"
  );

/* =========================================================
   BUILD URL LIST
========================================================= */

const categoryPaths = [
  ...new Set(
    articleRoutes.map(
      (article) =>
        `/learn/${article.category}`
    )
  ),
];

const individualArticlePaths =
  articleRoutes.map(
    (article) =>
      `/learn/${article.category}/${article.slug}`
  );

const urls = [
  ...staticPages,

  ...categoryPaths,
  ...individualArticlePaths,

  ...calculatorPaths,
  ...toolPaths,

  ...exchangePaths,
  ...bookPaths,
  ...analysisWebsitePaths,
];

/* Remove duplicates */

const uniqueUrls = [...new Set(urls)];

/* =========================================================
   SITEMAP XML
========================================================= */

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map((url) => {
    let priority = "0.8";

    if (url === "/") {
      priority = "1.0";
    } else if (
      url.startsWith("/learn/")
    ) {
      priority = "0.9";
    }

    return `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${
      url === "/" ? "weekly" : "monthly"
    }</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

/* =========================================================
   WRITE FILE
========================================================= */

const outputPath = path.join(
  process.cwd(),
  "public/sitemap.xml"
);

fs.writeFileSync(outputPath, sitemap);

console.log(
  `✅ Sitemap generated with ${uniqueUrls.length} URLs`
);

console.log(
  `📄 Articles: ${individualArticlePaths.length}`
);

console.log(
  `🧮 Calculators: ${calculatorPaths.length}`
);

console.log(
  `🛠 Tools: ${toolPaths.length}`
);

console.log(
  `🔎 Discover entries: ${
    exchangePaths.length +
    bookPaths.length +
    analysisWebsitePaths.length
  }`
);