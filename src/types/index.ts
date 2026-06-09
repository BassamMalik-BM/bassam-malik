import type { LucideIcon } from 'lucide-react';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  image: string;
  date: string;
};


export type LearnPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  readingTime: string;
  datePublished: string;
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
  slug: string;
  icon: LucideIcon;
};

export type CalculatorItem = {
  title: string;
  description: string;
  path: string;
  slug: string;
  icon: LucideIcon;
};