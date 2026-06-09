const fs = require("fs");
const path = require("path");

const siteUrl = "https://bassammalik.com";

function readFile(filePath) {
  return fs.readFileSync(path.join(process.cwd(), filePath), "utf8");
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function extractBlogObjects(fileContent) {
  const objectMatches = fileContent.match(/\{[\s\S]*?\}/g) || [];

  return objectMatches
    .map((object) => {
      const slug = object.match(/slug:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const title = object.match(/title:\s*['"`]([^'"`]+)['"`]/)?.[1];
      const description = object.match(/description:\s*['"`]([\s\S]*?)['"`]\s*,/)?.[1];
      const date = object.match(/date:\s*['"`]([^'"`]+)['"`]/)?.[1];

      if (!slug || !title || !description || !date) return null;

      return {
        slug,
        title,
        description: description.replace(/\s+/g, " ").trim(),
        date,
      };
    })
    .filter(Boolean);
}

const blogsFile = readFile("src/data/blogs.ts");
const blogs = extractBlogObjects(blogsFile);

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Bassam Malik</title>
    <link>${siteUrl}</link>
    <description>Trading education, market analysis, risk management, trading psychology, calculators, and learning resources.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${blogs
  .map((blog) => {
    const url = `${siteUrl}/blogs/${blog.slug}`;

    return `    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description>${escapeXml(blog.description)}</description>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
    </item>`;
  })
  .join("\n")}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(process.cwd(), "public/rss.xml"), rss);

console.log(`✅ RSS feed generated with ${blogs.length} posts`);