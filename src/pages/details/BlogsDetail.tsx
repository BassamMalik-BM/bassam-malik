import { useState } from "react";
import { ArrowRight, ArrowUp, Check, Clock, Send } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import AnimatedPage from "../../components/AnimatedPage";
import BlogCard from "../../components/BlogCard";
import Breadcrumbs from "../../components/Breadcrumbs";
import SEO from "../../components/SEO";

import { blogPosts } from "../../data/blogs";
import ArticleSchema from "../../schemas/ArticleSchema";

// BLOG IMPORTS
import BestCryptoBooks from "../blogs/BestCryptoBooks";
import BestCryptoMarketAnalysisWebsites from "../blogs/BestCryptoMarketAnalysisWebsites";
import BeginnerCryptoRoadmap from "../blogs/BeginnerCryptoRoadmap";
import IsCryptoTooLateIn2026 from "../blogs/IsCryptoTooLateIn2026";
import IsCryptoSafeForBeginners from "../blogs/IsCryptoSafeForBeginners";
import HowMuchMoneyDoYouNeedToStartCrypto from "../blogs/HowMuchMoneyDoYouNeedToStartCrypto";
import BitcoinVsEthereum from "../blogs/BitcoinVsEthereum";
import SpotTradingVSHoldingCrypto from "../blogs/SpotTradingVSHoldingCrypto";
import HotWalletVsColdWallet from "../blogs/HotWalletVsColdWallet";
import CanBeginnersMakeMoneyInCrypto from "../blogs/CanBeginnersMakeMoneyInCrypto";
import BestCryptoExchanges from "../blogs/BestCryptoExchanges";
import HowLongDoesItTakeToLearnCrypto from "../blogs/HowLongDoesItTakeToLearnCrypto";
import WhyMostBeginnersQuitCrypto from "../blogs/WhyMostBeginnersQuitCrypto";
import WhyCryptoFeelsConfusingAtFirst from "../blogs/WhyCryptoFeelsConfusingAtFirst";
import CryptoMyths from "../blogs/CryptoMyths";

export default function BlogsDetail() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return <Navigate to="/blogs" replace />;

  const sidebarPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 8);

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .slice(0, 3);

  const shareBlog = async () => {
    const shareData = {
      title: post.title,
      text: post.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // User closed share popup.
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatedPage>
      <ArticleSchema post={post} />

      <SEO
        title={post.title}
        description={post.description}
        path={`/blogs/${post.slug}`}
        image={post.image}
        type="article"
      />

      <section className="section-padding">
        <div className="container-page">
          <Breadcrumbs />

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* BLOG CONTENT */}
            <div>
              {post.slug === "best-crypto-books-for-beginners" ? (
                <BestCryptoBooks />
              ) : post.slug ===
                "best-free-websites-for-crypto-market-analysis" ? (
                <BestCryptoMarketAnalysisWebsites />
              ) : post.slug === "beginner-crypto-roadmap-2026" ? (
                <BeginnerCryptoRoadmap />
              ) : post.slug === "is-crypto-too-late-in-2026" ? (
                <IsCryptoTooLateIn2026 />
              ) : post.slug === "is-crypto-safe-for-beginners" ? (
                <IsCryptoSafeForBeginners />
              ) : post.slug ===
                "how-much-money-do-you-need-to-start-crypto" ? (
                <HowMuchMoneyDoYouNeedToStartCrypto />
              ) : post.slug === "spot-trading-vs-holding-crypto" ? (
                <SpotTradingVSHoldingCrypto />
              ) : post.slug === "bitcoin-vs-ethereum" ? (
                <BitcoinVsEthereum />
              ) : post.slug === "hot-wallet-vs-cold-wallet" ? (
                <HotWalletVsColdWallet />
              ) : post.slug === "can-beginners-make-money-in-crypto" ? (
                <CanBeginnersMakeMoneyInCrypto />
              ) : post.slug === "best-crypto-exchanges-for-beginners" ? (
                <BestCryptoExchanges />
              ) : post.slug === "how-long-does-it-take-to-learn-crypto" ? (
                <HowLongDoesItTakeToLearnCrypto />
              ) : post.slug === "why-most-beginners-quit-crypto" ? (
                <WhyMostBeginnersQuitCrypto />
              ) : post.slug === "why-crypto-feels-confusing-at-first" ? (
                <WhyCryptoFeelsConfusingAtFirst />  
              ) : post.slug === "crypto-myths-beginners-should-stop-believing" ? (
                <CryptoMyths />
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
                </article>
              )}
            </div>

            {/* MORE BLOGS SIDEBAR */}
            <aside>
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-navy-900">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  More Blogs
                </h3>

                <div className="mt-5 divide-y divide-slate-200 dark:divide-white/10">
                  {sidebarPosts.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/blogs/${item.slug}`}
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

          {/* BLOG ACTIONS */}
          <div className="mt-10 flex flex-wrap items-center justify-start gap-3">
            <button
              type="button"
              onClick={shareBlog}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              {copied ? <Check size={17} /> : <Send size={17} />}
              {copied ? "Link copied" : "Share blog"}
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-white/10 dark:bg-navy-900 dark:text-slate-300 dark:hover:bg-navy-800"
            >
              <ArrowUp size={17} />
              Back to top
            </button>

            <Link
              to="/sources"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-white/10 dark:bg-navy-900 dark:text-slate-300 dark:hover:bg-navy-800"
            >
              Where we get our information?
            </Link>
          </div>

          {/* AUTHOR BOX */}
          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-navy-900">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Author
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
              Bassam Malik
            </h3>

            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              Learn | Trade | Grow
            </p>

            <p className="mt-4 max-w-3xl leading-8 text-slate-700 dark:text-slate-300">
              Bassam Malik is focused on beginner-friendly crypto education,
              helping new learners understand Bitcoin, market psychology, risk
              awareness, and responsible decision-making without hype.
            </p>
          </div>

          {/* RELATED BLOGS BOTTOM */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Related Blogs
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {relatedPosts.map((item) => (
                  <BlogCard key={item.slug} post={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </AnimatedPage>
  );
}