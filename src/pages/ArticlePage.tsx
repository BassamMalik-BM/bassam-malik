import { Navigate, useParams } from "react-router-dom";

import AnimatedPage from "../components/AnimatedPage";
import ArticleLayout from "../layouts/ArticleLayout";

import ArticleAuthor from "../components/articles/ArticleAuthor";
import ArticleHeader from "../components/articles/ArticleHeader";
import ArticleRenderer from "../components/articles/ArticleRenderer";
import ArticleFAQ from "../components/articles/ArticleFAQ";
import ArticleDisclaimer from "../components/articles/ArticleDisclaimer";
import TableOfContents from "../components/articles/TableOfContents";
import ContinueLearning from "../components/articles/ContinueLearning";
import ShareButtons from "../components/articles/ShareButtons";

import ArticleSchema from "../schemas/ArticleSchema";
import FAQSchema from "../schemas/FAQSchema";

import { getArticleBySlug, articles } from "../data/articles";

export default function ArticlePage() {
  const { slug } = useParams();

  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/learn" replace />;
  }

  const outlineItems = article.blocks
    .filter((block) => block.type === "section")
    .map((block) => ({
      id: block.id || "",
      title: block.title,
    }))
    .filter((item) => item.id);

  const continueLearningItems = (article.relatedSlugs ?? [])
    .map((relatedSlug) =>
      articles.find((item) => item.slug === relatedSlug),
    )
    .filter(Boolean)
    .map((item) => ({
      title: item!.title,
      slug: item!.slug,
      readingTime: item!.readingTime,
    }));

  return (
    <>
      <ArticleSchema article={article} />

      {article.faqs?.length ? (
        <FAQSchema faqs={article.faqs} />
      ) : null}

      <AnimatedPage>
        <ArticleLayout
          hero={<ArticleHeader article={article} />}
          rightSidebar={
            <div className="space-y-10">
              <TableOfContents items={outlineItems} />

              <ContinueLearning lessons={continueLearningItems} />

              <ShareButtons />
            </div>
          }
        >
          <ArticleRenderer article={article} />

          <ArticleFAQ faqs={article.faqs ?? []} />

          <ArticleAuthor />

          <ArticleDisclaimer />
        </ArticleLayout>
      </AnimatedPage>
    </>
  );
}