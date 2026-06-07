export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  image: string;
  content: string[];
};


export type LearnPost = {
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

export type Tool = {
  title: string;
  description: string;
  type: string;
  cta: string;
  href: string;
  icon: any;
};

export type CalculatorItem = {
  title: string;
  description: string;
  path: string;
  icon: any;
};