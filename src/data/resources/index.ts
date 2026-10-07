import type { CoverLayout, Resource } from "./resourceTypes";

export type {
  CoverLayout,
  Resource,
  ResourceLevel,
} from "./resourceTypes";

export const defaultCoverLayout: CoverLayout = {
  brandTop: "7.6%",
  brandLeft: "18%",
  brandSize: "5.2cqw",

  titleTop: "18.5%",
  titleLeft: "8%",
  titleWidth: "85%",
  titleSize: "6.4cqw",

  descriptionTop: "34%",
  descriptionLeft: "8%",
  descriptionWidth: "65%",
  descriptionSize: "3.4cqw",

  levelTop: "43.5%",
  levelLeft: "8%",
  levelWidth: "27%",
  levelHeight: "6.1%",
  levelSize: "3.4cqw",

  footerTop: "89.8%",
  footerHeight: "6.6%",
  footerSize: "2.7cqw",
};

export const resources: Resource[] = [
  {
    id: "candlestick",
    title: "What Is a Candlestick and What Are Its Types?",
    titleLines: [
      "WHAT IS A CANDLESTICK",
      "AND WHAT ARE ITS",
      "TYPES?",
    ],
    description:
      "A Beginner’s Guide to Reading Crypto Price Charts",
    filename: "what-is-a-candlestick.pdf",
    level: "Beginner",
    cover: "/images/resources/candlestick-beginner.webp",
    layout: {
      titleTop: "18.5%",
      titleSize: "6.4cqw",
      descriptionTop: "39%",
      levelTop: "48.5%",
    },
  },
  {
    id: "trends",
    title: "What Is a Trend and How Do You Read It?",
    titleLines: [
      "WHAT IS A TREND AND",
      "HOW DO YOU READ IT?",
    ],
    description:
      "A Beginner’s Guide to Market Structure in Crypto",
    filename: "what-is-a-trend.pdf",
    level: "Beginner",
    cover: "/images/resources/trends-beginner.webp",
    layout: {
      titleTop: "18.5%",
      titleSize: "6.4cqw",
      descriptionTop: "34%",
      levelTop: "43.5%",
    },
  },
  {
    id: "support-resistance",
    title: "What Is Support and Resistance?",
    titleLines: [
      "WHAT IS SUPPORT AND",
      "RESISTANCE?",
    ],
    description:
      "A Beginner’s Guide to Finding Key Price Levels",
    filename: "what-is-support-and-resistance.pdf",
    level: "Beginner",
    cover: "/images/resources/support-resistance-beginner.webp",
    layout: {
      titleTop: "18.5%",
      titleSize: "6.4cqw",
      descriptionTop: "34%",
      levelTop: "43.5%",
    },
  },
  {
    id: "chart-patterns",
    title: "What Are Chart Patterns?",
    titleLines: [
      "WHAT ARE CHART",
      "PATTERNS?",
    ],
    description:
      "A Beginner’s Guide to Reading Price Shapes in Crypto",
    filename: "what-are-chart-patterns.pdf",
    level: "Beginner",
    cover: "/images/resources/chart-patterns-beginner.webp",
    layout: {
      titleTop: "18.5%",
      titleSize: "6.6cqw",
      descriptionTop: "34%",
      levelTop: "43.5%",
    },
  },
];

export function getResourceByFilename(filename: string | null) {
  return resources.find(
    (resource) => resource.filename === filename,
  );
}

export function getCoverLayout(resource: Resource): CoverLayout {
  return {
    ...defaultCoverLayout,
    ...resource.layout,
  };
}