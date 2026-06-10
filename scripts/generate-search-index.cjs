const fs = require("fs");
const path = require("path");

function readFile(filePath) {
  return fs.readFileSync(path.join(process.cwd(), filePath), "utf8");
}

function cleanText(value = "") {
  return value.replace(/\s+/g, " ").trim();
}

function extractObjects(fileContent, type, basePath) {
  const objectMatches = fileContent.match(/\{[\s\S]*?\}/g) || [];

  return objectMatches
    .map((object) => {
      const slug = object.match(/slug:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const title = object.match(/title:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const description = object.match(/description:\s*['"`]([\s\S]*?)['"`]\s*,/)?.[1];
      const category = object.match(/category:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const readingTime = object.match(/readingTime:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const image = object.match(/image:\s*['"`]([^'"`]+)['"`]/)?.[1];

      if (!slug || !title || !description) return null;

      return {
        type,
        title: cleanText(title),
        description: cleanText(description),
        category: category || "",
        readingTime: readingTime || "",
        image: image || "",
        url: `${basePath}/${slug}`,
        keywords: cleanText(
          `${title} ${description} ${category || ""} ${slug.replaceAll("-", " ")}`
        ).toLowerCase(),
      };
    })
    .filter(Boolean);
}

function extractSimpleItems(fileContent, type) {
  const objectMatches = fileContent.match(/\{[\s\S]*?\}/g) || [];

  return objectMatches
    .map((object) => {
      const title = object.match(/title:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const description = object.match(/description:\s*['"`]([\s\S]*?)['"`]\s*,/)?.[1];
      const href =
        object.match(/href:\s*['"`]([^'"`]+)['"`]/)?.[1] ||
        object.match(/path:\s*['"`]([^'"`]+)['"`]/)?.[1];

      if (!title || !description || !href) return null;

      return {
        type,
        title: cleanText(title),
        description: cleanText(description),
        category: "",
        readingTime: "",
        image: "",
        url: href,
        keywords: cleanText(`${title} ${description}`).toLowerCase(),
      };
    })
    .filter(Boolean);
}

const blogs = extractObjects(readFile("src/data/blogs.ts"), "Blog", "/blogs");
const learn = extractObjects(readFile("src/data/learn.ts"), "Learn", "/learn");
const resources = extractSimpleItems(readFile("src/data/resources.ts"), "Resource");
const tools = extractSimpleItems(readFile("src/data/tools.ts"), "Tool");
const calculators = extractSimpleItems(
  readFile("src/data/calculators.ts"),
  "Calculator"
);

const searchIndex = [...blogs, ...learn, ...resources, ...tools, ...calculators];

fs.writeFileSync(
  path.join(process.cwd(), "public/search-index.json"),
  JSON.stringify(searchIndex, null, 2)
);

console.log(`✅ Search index generated with ${searchIndex.length} items`);