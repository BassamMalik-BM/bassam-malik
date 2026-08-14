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

function extractArticles(fileContent) {
  const objectMatches = fileContent.match(/\{[\s\S]*?\}/g) || [];

  return objectMatches
    .map((object) => {
      const slug = object.match(/slug:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const title = object.match(/title:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const description = object.match(
        /description:\s*['"`]([\s\S]*?)['"`]\s*,/
      )?.[1];

      const categoryTitle = object.match(
        /category:\s*\{[\s\S]*?title:\s*['"`]([^'"`]+)['"`]/
      )?.[1];

      const categorySlug = object.match(
        /category:\s*\{[\s\S]*?slug:\s*['"`]([^'"`]+)['"`]/
      )?.[1];

      const updatedAt =
        object.match(/updatedAt:\s*['"`]([^'"`]+)['"`]/)?.[1] ||
        new Date().toISOString();

      if (!slug || !title || !description || !categorySlug) return null;

      return {
        type: "Article",
        slug,
        title: cleanText(title),
        description: cleanText(description),
        category: categoryTitle || "Learn",
        date: updatedAt,
        url: `${siteUrl}/learn/${categorySlug}/${slug}`,
      };
    })
    .filter(Boolean);
}

const articlesFile = readFile("src/data/articles/index.ts");

const items = extractArticles(articlesFile).sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Bassam Malik</title>
    <link>${siteUrl}</link>
    <description>Beginner-friendly cryptocurrency education, Bitcoin, blockchain, wallets, trading, risk management, security, and market learning resources.</description>
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