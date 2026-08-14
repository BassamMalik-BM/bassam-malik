import type { ArticleData } from "../data/articles/articleTypes";

const SITE_URL = "https://bassammalik.com";
const AUTHOR_NAME = "Bassam Malik";
const SITE_NAME = "Bassam Malik";

type ArticleSchemaProps = {
  article: ArticleData;
};

export default function ArticleSchema({
  article,
}: ArticleSchemaProps) {
  const articleUrl = `${SITE_URL}/learn/${article.category.slug}/${article.slug}`;

  const imageUrl = article.image
    ? article.image.startsWith("http")
      ? article.image
      : `${SITE_URL}${article.image}`
    : `${SITE_URL}/images/default-og.jpg`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: article.title,
    description: article.description,

    image: imageUrl,

    datePublished: article.updatedAt,
    dateModified: article.updatedAt,

    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}