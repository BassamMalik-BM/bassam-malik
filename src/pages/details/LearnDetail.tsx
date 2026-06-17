import { ArrowRight, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import { learnPosts } from "../../data/learn";
import Breadcrumbs from "../../components/Breadcrumbs";
import LearnArticleSchema from "../../schemas/LearnArticleSchema";
import SEO from "../../components/SEO";

import CryptoSpotTrading from "../learn/CryptoSpotTrading";
import RiskManagement from "../learn/RiskManagement";
import TradingJournal from "../learn/TradingJournal";
import SupportResistance from "../learn/SupportResistance";
import BeginnerMistakes from "../learn/BeginnerMistakes";
import CryptoCharts from "../learn/CryptoCharts";
import Bitcoin from "../learn/Bitcoin";
import MarketCap from "../learn/MarketCap";
import CryptoVolatility from "../learn/CryptoVolatility";
import CryptoWallets from "../learn/CryptoWallets";
import EmotionalTrading from "../learn/EmotionalTrading";
import FearAndGreed from "../learn/FearAndGreed";
import PatienceTrading from "../learn/PatienceTrading";
import AffordToLose from "../learn/AffordToLose";
import WhatIsEthereum from "../learn/WhatIsEthereum";

export default function LearnDetail() {
  const { categorySlug, slug } = useParams();

  const post = learnPosts.find((item) => item.slug === slug);

  if (!post) return <Navigate to="/learn" replace />;

  if (categorySlug && categorySlug !== post.categorySlug) {
    return (
      <Navigate
        to={`/learn/category/${post.categorySlug}/${post.slug}`}
        replace
      />
    );
  }

  const relatedPosts = learnPosts
    .filter(
      (item) =>
        item.slug !== post.slug && item.categorySlug === post.categorySlug
    )
    .slice(0, 5);

  const fallbackPosts = learnPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 5);

  const learnMorePosts = relatedPosts.length > 0 ? relatedPosts : fallbackPosts;

  return (
    <AnimatedPage>
      <LearnArticleSchema post={post} />

      <SEO
        title={post.title}
        description={post.description}
        path={`/learn/category/${post.categorySlug}/${post.slug}`}
        type="article"
      />

      <section className="section-padding">
        <div className="container-page">
          <Breadcrumbs />

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              {post.slug === "what-is-crypto-spot-trading" ? (
                <CryptoSpotTrading />
              ) : post.slug === "why-risk-management-matters" ? (
                <RiskManagement />
              ) : post.slug === "how-to-build-a-trading-journal" ? (
                <TradingJournal />
              ) : post.slug === "support-and-resistance-levels" ? (
                <SupportResistance />
              ) : post.slug === "common-mistakes-beginners-make-in-crypto" ? (
                <BeginnerMistakes />
              ) : post.slug === "how-to-read-crypto-charts" ? (
                <CryptoCharts />
              ) : post.slug === "what-is-bitcoin-and-why-does-it-matter" ? (
                <Bitcoin />
              ) : post.slug === "what-is-market-capitalization-in-crypto" ? (
                <MarketCap />
              ) : post.slug === "what-is-crypto-volatility" ? (
                <CryptoVolatility />
              ) : post.slug === "how-crypto-wallets-work" ? (
                <CryptoWallets />
              ) : post.slug === "why-emotional-trading-is-dangerous" ? (
                <EmotionalTrading />
              ) : post.slug ===
                "how-to-control-fear-and-greed-in-crypto-trading" ? (
                <FearAndGreed />
              ) : post.slug ===
                "the-importance-of-patience-in-crypto-trading" ? (
                <PatienceTrading />
              ) : post.slug ===
                "never-invest-more-than-you-can-afford-to-lose" ? (
                <AffordToLose />
              ) : post.slug === "what-is-ethereum-and-why-does-it-matter" ? (
                <WhatIsEthereum />
              ) : (
                <article className="premium-card p-8 sm:p-10">
                  <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      {post.category}
                    </span>

                    <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <Clock size={16} /> {post.readingTime}
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                    {post.title}
                  </h1>

                  <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                    {post.description}
                  </p>

                  <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-200">
                    Educational reminder: crypto markets are volatile. Use this
                    content for learning only and make your own responsible
                    decisions.
                  </div>
                </article>
              )}
            </div>

            <aside>
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-navy-900">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  Learn More
                </h3>

                <div className="mt-5 divide-y divide-slate-200 dark:divide-white/10">
                  {learnMorePosts.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/learn/category/${item.categorySlug}/${item.slug}`}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="text-sm font-semibold leading-6 text-slate-700 transition group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-300">
                        {item.title}
                      </span>

                      <ArrowRight
                        size={16}
                        className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}