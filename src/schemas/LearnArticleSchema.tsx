import type { LearnPost } from "../types";

type Props = {
  post: LearnPost;
};

export default function LearnArticleSchema({ post }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: post.title,
    description: post.description,

    datePublished: post.datePublished,
    dateModified: post.datePublished,

    author: {
      "@type": "Person",
      name: "Bassam Malik",
      url: "https://bassammalik.com",
    },

    publisher: {
      "@type": "Organization",
      name: "Bassam Malik",
      url: "https://bassammalik.com",
      logo: {
        "@type": "ImageObject",
        url: "https://bassammalik.com/favicon.ico",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bassammalik.com/learn/${post.slug}`,
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