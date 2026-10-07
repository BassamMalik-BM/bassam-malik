import { Navigate, useParams } from "react-router-dom";

import { articles } from "../data/articles";

export default function LearnCategory() {
  const { category } = useParams();

  const isValidCategory = articles.some(
    (article) => article.category.slug === category,
  );

  if (!category || !isValidCategory) {
    return <Navigate to="/learn" replace />;
  }

  const params = new URLSearchParams({ category });

  return <Navigate to={`/learn?${params.toString()}`} replace />;
}