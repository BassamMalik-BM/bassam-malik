export type ArticleCategory = {
  title: string;
  slug: string;
};

export type ArticleFAQ = {
  question: string;
  answer: string;
};

export type ArticleBlock =
  | {
     type: "section";
     id?: string;
     title: string;

     paragraphs?: string[];

     media?: {
       src: string;
       alt: string;
       width?: "full" | "medium" | "small";
             };

     paragraphsAfterMedia?: string[];

     bullets?: string[];
    }
  | {
      type: "media";
      src: string;
      alt: string;
      caption?: string;
      width?: "full" | "medium" | "small";
    };

export type ArticleData = {
  slug: string;
  title: string;
  description: string;

  heroImage: string;

  category: ArticleCategory;
  readingTime: string;
  updatedAt: string;

  blocks: ArticleBlock[];

  faqs?: ArticleFAQ[];
  relatedSlugs?: string[];
};