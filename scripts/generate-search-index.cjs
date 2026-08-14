const fs = require("fs");
const path = require("path");

/* =========================================================
   HELPERS
========================================================= */

function fullPath(filePath) {
  return path.join(process.cwd(), filePath);
}

function readFile(filePath) {
  return fs.readFileSync(fullPath(filePath), "utf8");
}

function fileExists(filePath) {
  return fs.existsSync(fullPath(filePath));
}

function cleanText(value = "") {
  return value.replace(/\s+/g, " ").trim();
}

/* =========================================================
   RECURSIVELY FIND TYPESCRIPT FILES
========================================================= */

function getAllTsFiles(directory) {
  const directoryPath = fullPath(directory);

  if (!fs.existsSync(directoryPath)) {
    return [];
  }

  const entries = fs.readdirSync(directoryPath, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      const nestedDirectory = path.join(directory, entry.name);

      files.push(...getAllTsFiles(nestedDirectory));

      continue;
    }

    if (
      entry.isFile() &&
      entry.name.endsWith(".ts") &&
      entry.name !== "index.ts"
    ) {
      files.push(entryPath);
    }
  }

  return files;
}

/* =========================================================
   BASIC FIELD EXTRACTION
========================================================= */

function extractStringField(content, key) {
  const regex = new RegExp(
    `${key}:\\s*["'\`]([\\s\\S]*?)["'\`]\\s*,`
  );

  return content.match(regex)?.[1] || "";
}

function extractSlug(content) {
  return (
    content.match(
      /slug:\s*["'`]([^"'`]+)["'`]/
    )?.[1] || ""
  );
}

/* =========================================================
   ARTICLES
========================================================= */

function extractArticle(fileContent) {
  const slug = extractSlug(fileContent);

  const title = extractStringField(
    fileContent,
    "title"
  );

  const description = extractStringField(
    fileContent,
    "description"
  );

  const categoryBlock = fileContent.match(
    /category:\s*\{([\s\S]*?)\}/
  )?.[1];

  const categorySlug =
    categoryBlock?.match(
      /slug:\s*["'`]([^"'`]+)["'`]/
    )?.[1] || "";

  const categoryTitle =
    categoryBlock?.match(
      /title:\s*["'`]([^"'`]+)["'`]/
    )?.[1] || "";

  const readingTime =
    extractStringField(
      fileContent,
      "readingTime"
    );

  /*
    Your article data may use either:
    heroImage
    or image
  */

  const heroImage =
    extractStringField(
      fileContent,
      "heroImage"
    );

  const image =
    heroImage ||
    extractStringField(
      fileContent,
      "image"
    );

  if (
    !slug ||
    !title ||
    !description ||
    !categorySlug
  ) {
    return null;
  }

  return {
    type: "Article",

    title: cleanText(title),

    description: cleanText(description),

    category: cleanText(categoryTitle),

    readingTime: cleanText(readingTime),

    image: image || "",

    url: `/learn/${categorySlug}/${slug}`,

    keywords: cleanText(
      `${title}
       ${description}
       ${categoryTitle}
       ${categorySlug.replaceAll("-", " ")}
       ${slug.replaceAll("-", " ")}`
    ).toLowerCase(),
  };
}

const articleFiles = getAllTsFiles(
  "src/data/articles"
);

const articles = articleFiles
  .map((filePath) => {
    const content = fs.readFileSync(
      filePath,
      "utf8"
    );

    return extractArticle(content);
  })
  .filter(Boolean);

/* =========================================================
   TOOLS + CALCULATORS
========================================================= */

function extractDataObjects(
  fileContent,
  type,
  baseRoute
) {
  /*
    Looks for objects containing:
      slug
      title
      description
      category
      bestFor
  */

  const objectRegex =
    /\{\s*slug:\s*["'`]([^"'`]+)["'`][\s\S]*?title:\s*["'`]([^"'`]+)["'`][\s\S]*?description:\s*["'`]([\s\S]*?)["'`]\s*,[\s\S]*?category:\s*["'`]([^"'`]+)["'`][\s\S]*?bestFor:\s*["'`]([\s\S]*?)["'`][\s\S]*?\}/g;

  const items = [];

  let match;

  while (
    (match = objectRegex.exec(fileContent)) !==
    null
  ) {
    const [
      ,
      slug,
      title,
      description,
      category,
      bestFor,
    ] = match;

    items.push({
      type,

      title: cleanText(title),

      description: cleanText(description),

      category: cleanText(category),

      readingTime: "",

      image: "",

      url: `${baseRoute}/${slug}`,

      keywords: cleanText(
        `${title}
         ${description}
         ${category}
         ${bestFor}
         ${slug.replaceAll("-", " ")}`
      ).toLowerCase(),
    });
  }

  return items;
}

/* =========================================================
   TOOLS
========================================================= */

const tools = fileExists(
  "src/data/tools/index.ts"
)
  ? extractDataObjects(
      readFile("src/data/tools/index.ts"),
      "Tool",
      "/tools"
    )
  : [];

/* =========================================================
   CALCULATORS
========================================================= */

const calculators = fileExists(
  "src/data/calculators/index.ts"
)
  ? extractDataObjects(
      readFile(
        "src/data/calculators/index.ts"
      ),
      "Calculator",
      "/calculators"
    )
  : [];

/* =========================================================
   DISCOVER
========================================================= */

function extractDiscoverItems(
  directory,
  type,
  baseRoute
) {
  const files = getAllTsFiles(directory);

  return files
    .map((filePath) => {
      const content = fs.readFileSync(
        filePath,
        "utf8"
      );

      const slug = extractSlug(content);

      const title =
        extractStringField(
          content,
          "title"
        ) ||
        extractStringField(
          content,
          "name"
        );

      const description =
        extractStringField(
          content,
          "shortDescription"
        ) ||
        extractStringField(
          content,
          "description"
        );

      if (!slug || !title) {
        return null;
      }

      return {
        type,

        title: cleanText(title),

        description: cleanText(
          description
        ),

        category: "Discover",

        readingTime: "",

        image: "",

        url: `${baseRoute}/${slug}`,

        keywords: cleanText(
          `${title}
           ${description}
           ${slug.replaceAll("-", " ")}
           discover`
        ).toLowerCase(),
      };
    })
    .filter(Boolean);
}

const exchanges = extractDiscoverItems(
  "src/data/discover/exchanges",
  "Exchange",
  "/discover/exchanges"
);

const books = extractDiscoverItems(
  "src/data/discover/books",
  "Book",
  "/discover/books"
);

const analysisWebsites =
  extractDiscoverItems(
    "src/data/discover/analysis-websites",
    "Analysis Website",
    "/discover/analysis-websites"
  );

/* =========================================================
   SEARCH INDEX
========================================================= */

const searchIndex = [
  ...articles,
  ...tools,
  ...calculators,
  ...exchanges,
  ...books,
  ...analysisWebsites,
];

/*
  Remove duplicates by URL.
*/

const uniqueSearchIndex = Array.from(
  new Map(
    searchIndex.map((item) => [
      item.url,
      item,
    ])
  ).values()
);

/* =========================================================
   WRITE FILE
========================================================= */

const outputPath = fullPath(
  "public/search-index.json"
);

fs.writeFileSync(
  outputPath,
  JSON.stringify(
    uniqueSearchIndex,
    null,
    2
  )
);

/* =========================================================
   LOG
========================================================= */

console.log(
  `✅ Search index generated with ${uniqueSearchIndex.length} items`
);

console.log(
  `📄 Articles: ${articles.length}`
);

console.log(
  `🛠 Tools: ${tools.length}`
);

console.log(
  `🧮 Calculators: ${calculators.length}`
);

console.log(
  `🏦 Exchanges: ${exchanges.length}`
);

console.log(
  `📚 Books: ${books.length}`
);

console.log(
  `📊 Analysis websites: ${analysisWebsites.length}`
);