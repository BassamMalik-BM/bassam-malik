import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.bassammalik.com";

const labelMap: Record<string, string> = {
  learn: "Learn",
  blogs: "Blogs",
  resources: "Resources",
  tools: "Tools",
  calculators: "Calculators",
  ebooks: "Ebooks",
  faq: "FAQ",
  contact: "Contact",
  about: "About",
  "risk-disclaimer": "Risk Disclaimer",
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms & Conditions",
  "cookies-policy": "Cookies Policy",
  categories: "Categories",
  category: "Categories",
};

function formatLabel(segment: string) {
  return (
    labelMap[segment] ||
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export default function BreadcrumbSchema() {
  const location = useLocation();

  if (location.pathname === "/") return null;

  const segments = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { label: "Home", path: "/" },
    ...segments
      .filter((segment) => segment !== "category")
      .map((segment, index, filteredSegments) => ({
        label: formatLabel(segment),
        path: `/${filteredSegments.slice(0, index + 1).join("/")}`,
      })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}