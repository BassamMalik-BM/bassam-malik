import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { getResourceByFilename } from "../data/resources";

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

export default function Breadcrumbs() {
  const location = useLocation();

  if (location.pathname === "/") return null;

  const segments = location.pathname
    .split("/")
    .filter((segment) => segment && segment !== "category");

  const breadcrumbs = [
    { label: "Home", path: "/" },
    ...segments.map((segment, index) => ({
      label: formatLabel(segment),
      path: `/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];

  if (location.pathname.replace(/\/$/, "") === "/resources") {
    const params = new URLSearchParams(location.search);
    const resource = getResourceByFilename(params.get("pdf"));

    if (resource) {
      breadcrumbs.push({
        label: resource.title,
        path: `${location.pathname}${location.search}`,
      });
    }
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400"
    >
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div
            key={`${item.path}-${index}`}
            className="flex items-center gap-2"
          >
            {isLast ? (
              <span
                aria-current="page"
                className="text-slate-900 dark:text-white"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            )}

            {!isLast && (
              <ChevronRight size={15} aria-hidden="true" />
            )}
          </div>
        );
      })}
    </nav>
  );
}