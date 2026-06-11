const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const srcDir = path.join(rootDir, "src");
const publicDir = path.join(rootDir, "public");

const dataFiles = [
  "src/data/blogs.ts",
  "src/data/learn.ts",
  "src/data/tools.ts",
  "src/data/calculators.ts",
  "src/data/resources.ts",
];

const staticRoutes = [
  "/",
  "/learn",
  "/blogs",
  "/tools",
  "/calculators",
  "/learn/categories",
  "/resources",
  "/ebooks",
  "/faq",
  "/contact",
  "/about",
  "/risk-disclaimer",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookies-policy",
];

const validRoutes = new Set(staticRoutes);
const issues = [];

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

function getAllFiles(dir, extensions = [".ts", ".tsx"]) {
  let files = [];

  if (!fs.existsSync(dir)) return files;

  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.includes(path.extname(fullPath))) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractValues(content, key) {
  const regex = new RegExp(`${key}:\\s*["'\`]([^"'\`]+)["'\`]`, "g");
  const values = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    values.push(match[1]);
  }

  return values;
}

function addRoutesFromDataFiles() {
  for (const relativeFile of dataFiles) {
    const filePath = path.join(rootDir, relativeFile);
    const content = readFileSafe(filePath);

    if (!content) {
      issues.push({
        type: "Missing data file",
        value: relativeFile,
        foundIn: relativeFile,
      });
      continue;
    }

    const slugs = extractValues(content, "slug");
    const paths = extractValues(content, "path");
    const hrefs = extractValues(content, "href");

    if (relativeFile.includes("blogs.ts")) {
      slugs.forEach((slug) => validRoutes.add(`/blogs/${slug}`));
    }

    if (relativeFile.includes("learn.ts")) {
      slugs.forEach((slug) => validRoutes.add(`/learn/${slug}`));

      const categorySlugs = extractValues(content, "categorySlug");
      categorySlugs.forEach((slug) =>
        validRoutes.add(`/learn/category/${slug}`)
      );
    }

    if (relativeFile.includes("tools.ts")) {
      slugs.forEach((slug) => validRoutes.add(`/tools/${slug}`));
    }

    if (relativeFile.includes("calculators.ts")) {
      slugs.forEach((slug) => validRoutes.add(`/calculators/${slug}`));
    }

    paths.forEach((route) => validRoutes.add(route));

    hrefs.forEach((href) => {
      if (href.startsWith("/") && !href.includes(".")) {
        validRoutes.add(href);
      }
    });
  }
}

function publicFileExists(urlPath) {
  const cleanPath = urlPath.split("?")[0].split("#")[0];
  const filePath = path.join(publicDir, cleanPath.replace(/^\//, ""));
  return fs.existsSync(filePath);
}

function isIgnoredLink(link) {
  return (
    !link ||
    link.startsWith("#") ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:") ||
    link.startsWith("javascript:") ||
    link.startsWith("http://") ||
    link.startsWith("https://") ||
    link.startsWith("//")
  );
}

function extractLinksFromContent(content) {
  const links = new Set();

  const patterns = [
    /href=["'`]([^"'`]+)["'`]/g,
    /to=["'`]([^"'`]+)["'`]/g,
    /src=["'`]([^"'`]+)["'`]/g,
    /image:\s*["'`]([^"'`]+)["'`]/g,
    /href:\s*["'`]([^"'`]+)["'`]/g,
    /path:\s*["'`]([^"'`]+)["'`]/g,
  ];

  for (const pattern of patterns) {
    let match;

    while ((match = pattern.exec(content)) !== null) {
      links.add(match[1]);
    }
  }

  return Array.from(links);
}

function checkLink(link, foundIn) {
  if (isIgnoredLink(link)) return;

  const cleanLink = link.split("?")[0].split("#")[0];

  if (!cleanLink.startsWith("/")) return;

  const looksLikeFile = path.extname(cleanLink) !== "";

  if (looksLikeFile) {
    if (!publicFileExists(cleanLink)) {
      issues.push({
        type: "Missing public file",
        value: cleanLink,
        foundIn,
      });
    }

    return;
  }

  if (!validRoutes.has(cleanLink)) {
    issues.push({
      type: "Broken internal route",
      value: cleanLink,
      foundIn,
    });
  }
}

function main() {
  addRoutesFromDataFiles();

  const filesToCheck = getAllFiles(srcDir, [".ts", ".tsx"]);

  for (const filePath of filesToCheck) {
    const content = readFileSafe(filePath);
    const links = extractLinksFromContent(content);
    const relativePath = path.relative(rootDir, filePath);

    links.forEach((link) => checkLink(link, relativePath));
  }

  console.log("\nBroken Link Check");
  console.log("-----------------");
  console.log(`Valid routes found: ${validRoutes.size}`);
  console.log(`Files scanned: ${filesToCheck.length}`);

  if (issues.length === 0) {
    console.log("\n✅ No broken links found.");
    return;
  }

  console.log(`\n❌ Found ${issues.length} issue(s):\n`);

  issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.type}`);
    console.log(`   Link/File: ${issue.value}`);
    console.log(`   Found in: ${issue.foundIn}\n`);
  });

  process.exitCode = 1;
}

main();