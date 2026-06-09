import type { BlogPost } from "../types";

const SITE_URL = "https://bassammalik.com";
const AUTHOR_NAME = "Bassam Malik";
const SITE_NAME = "Bassam Malik";

type ArticleSchemaProps = {
  post: BlogPost;
};

export default function ArticleSchema({ post }: ArticleSchemaProps) {
  const articleUrl = `${SITE_URL}/blogs/${post.slug}`;
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${SITE_URL}${post.image}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}