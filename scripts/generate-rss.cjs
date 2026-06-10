const fs = require("fs");
const path = require("path");

const siteUrl = "https://bassammalik.com";

function readFile(filePath) {
  return fs.readFileSync(path.join(process.cwd(), filePath), "utf8");
}

function escapeXml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function cleanText(value = "") {
  return value.replace(/\s+/g, " ").trim();
}

function extractContentItems(fileContent, type, basePath, dateKey) {
  const objectMatches = fileContent.match(/\{[\s\S]*?\}/g) || [];

  return objectMatches
    .map((object) => {
      const slug = object.match(/slug:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const title = object.match(/title:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const description = object.match(
        /description:\s*['"`]([\s\S]*?)['"`]\s*,/
      )?.[1];
      const category = object.match(/category:\s*['"`]([^'"`]+)['"`]/)?.[1];

      const dateRegex = new RegExp(
        `${dateKey}:\\s*['"\`]([^'"\`]+)['"\`]`
      );
      const date = object.match(dateRegex)?.[1];

      if (!slug || !title || !description || !date) return null;

      return {
        type,
        slug,
        title: cleanText(title),
        description: cleanText(description),
        category: category || "",
        date,
        url: `${siteUrl}${basePath}/${slug}`,
      };
    })
    .filter(Boolean);
}

const blogsFile = readFile("src/data/blogs.ts");
const learnFile = readFile("src/data/learn.ts");

const blogs = extractContentItems(blogsFile, "Blog", "/blogs", "date");
const learn = extractContentItems(
  learnFile,
  "Learn",
  "/learn",
  "datePublished"
);

const items = [...blogs, ...learn].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Bassam Malik</title>
    <link>${siteUrl}</link>
    <description>Trading education, market analysis, risk management, trading psychology, calculators, and learning resources.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.url}</link>
      <guid>${item.url}</guid>
      <description>${escapeXml(item.description)}</description>
      <category>${escapeXml(item.category || item.type)}</category>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(process.cwd(), "public/rss.xml"), rss);

console.log(`✅ RSS feed generated with ${items.length} items`);