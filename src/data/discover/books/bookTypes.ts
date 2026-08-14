export type BookDifficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Beginner to Intermediate"
  | "Intermediate to Advanced"
  | "Beginner to Advanced";

export interface BookScore {
  overall: number;
  beginnerFriendly: number;
  readability: number;
  depth: number;

  value?: number;
  practicalValue?: number;
}

export interface BookPurchaseLink {
  name: string;
  url: string;
}

export interface BookData {
  slug: string;

  title: string;
  author: string;

  coverImage: string;
  heroImage?: string;

  tagline: string;
  shortDescription: string;
  description: string;

  score: BookScore;

  category?: string;

  difficulty?: BookDifficulty;
  level?: BookDifficulty;

  bestFor: string[];

  topics?: string[];
  keyTopics?: string[];

  pros: string[];
  cons: string[];

  keyTakeaways?: string[];
  whoShouldRead?: string[];
  whoShouldSkip?: string[];

  purchaseUrl?: string;
  whereToBuy?: BookPurchaseLink[];

  officialWebsite?: string;

  publishedYear?: number;

  pageCount?: number;
  pages?: number;

  affiliateDisclosure?: string;
  featured?: boolean;

  updatedAt: string;
}