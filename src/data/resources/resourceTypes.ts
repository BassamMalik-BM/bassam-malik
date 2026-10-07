export type ResourceLevel = "Beginner" | "Intermediate" | "Advanced";

export type CoverLayout = {
  brandTop: string;
  brandLeft: string;
  brandSize: string;

  titleTop: string;
  titleLeft: string;
  titleWidth: string;
  titleSize: string;

  descriptionTop: string;
  descriptionLeft: string;
  descriptionWidth: string;
  descriptionSize: string;

  levelTop: string;
  levelLeft: string;
  levelWidth: string;
  levelHeight: string;
  levelSize: string;

  footerTop: string;
  footerHeight: string;
  footerSize: string;
};

export type Resource = {
  id: string;
  title: string;
  titleLines: string[];
  description: string;
  filename: string;
  level: ResourceLevel;
  cover: string;
  coverLight?: string;
  layout?: Partial<CoverLayout>;
};