export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  content: string[];
};

export type Resource = {
  title: string;
  description: string;
  type: string;
  cta: string;
  href: string;
};
