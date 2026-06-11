import { ArrowRight, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import { blogPosts } from "../../data/blogs";
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleSchema from "../../schemas/ArticleSchema";
import SEO from "../../components/SEO";

// BLOG IMPORTS
import BestCryptoBooks from "../blogs/BestCryptoBooks";
import BestCryptoMarketAnalysisWebsites from "../blogs/BestCryptoMarketAnalysisWebsites";
import BeginnerCryptoRoadmap from "../blogs/BeginnerCryptoRoadmap";
import IsCryptoTooLateIn2026 from "../blogs/IsCryptoTooLateIn2026";
import IsCryptoSafeForBeginners from "../blogs/IsCryptoSafeForBeginners";
import HowMuchMoneyDoYouNeedToStartCrypto from "../blogs/HowMuchMoneyDoYouNeedToStartCrypto";
import BitcoinVsEthereum from '../blogs/BitcoinVsEthereum';
import SpotTradingVSHoldingCrypto from "../blogs/SpotTradingVSHoldingCrypto";
import HotWalletVsColdWallet from "../blogs/HotWalletVsColdWallet";
import CanBeginnersMakeMoneyInCrypto from "../blogs/CanBeginnersMakeMoneyInCrypto";
import BestCryptoExchanges from "../blogs/BestCryptoExchanges";
import HowLongDoesItTakeToLearnCrypto from "../blogs/HowLongDoesItTakeToLearnCrypto";
import WhyMostBeginnersQuitCrypto from "../blogs/WhyMostBeginnersQuitCrypto";

export default function BlogsDetail() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return <Navigate to="/blogs" replace />;

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 5);

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
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          <Breadcrumbs />

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* BLOG CONTENT */}
            <div>
              {post.slug === "best-crypto-books-for-beginners" ? (
               <BestCryptoBooks />
           ) : post.slug === "best-free-websites-for-crypto-market-analysis" ? (
               <BestCryptoMarketAnalysisWebsites />
           ) : post.slug === "beginner-crypto-roadmap-2026" ? (
               <BeginnerCryptoRoadmap />
           ) : post.slug === "is-crypto-too-late-in-2026" ? (
               <IsCryptoTooLateIn2026 /> 
           ) : post.slug === "is-crypto-safe-for-beginners" ? (
               <IsCryptoSafeForBeginners /> 
           ) : post.slug === "how-much-money-do-you-need-to-start-crypto" ? (
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

            {/* RELATED BLOGS */}
            <aside>
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  Related Blogs
                </h3>

                <div className="mt-5 divide-y divide-slate-200 dark:divide-white/10">
                  {relatedPosts.map((item) => (
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
        </div>
      </section>
    </AnimatedPage>
  );
}