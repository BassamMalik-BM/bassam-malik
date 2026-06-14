import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ShieldCheck,
  NotebookPen,
  LineChart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import type { BlogPost } from "../types";

import AnimatedPage from "../components/AnimatedPage";
import LearnCard from "../components/LearnCard";
import BlogCard from "../components/BlogCard";
import SectionHeader from "../components/SectionHeader";

import { learnPosts } from "../data/learn";
import { blogPosts } from "../data/blogs";

const features = [
  {
    title: "Spot Trading",
    description:
      "Learn how buying and selling crypto assets works without futures, leverage, or complex products.",
    icon: BarChart3,
  },
  {
    title: "Risk Management",
    description:
      "Build habits that help protect capital and reduce emotional decisions in volatile markets.",
    icon: ShieldCheck,
  },
  {
    title: "Trading Journal",
    description:
      "Track your decisions, emotions, lessons, buy plans, and sell plans with structure.",
    icon: NotebookPen,
  },
  {
    title: "Support & Resistance",
    description:
      "Understand key price zones and use them to plan more responsible market decisions.",
    icon: LineChart,
  },
];

function RotatingLearnCard({ posts }: { posts: typeof learnPosts }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [posts.length, paused]);

  const post = posts[activeIndex];

  return (
    <div
      className="relative h-[390px]"
      style={{ perspective: "1400px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 rounded-[2rem] bg-blue-600/10 blur-3xl dark:bg-blue-500/10" />

      <AnimatePresence initial={false}>
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, rotateY: 65, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, rotateY: -65, x: -60, scale: 0.96 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center",
            backfaceVisibility: "hidden",
          }}
          className="absolute inset-0 flex h-[390px] flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl dark:border-white/10 dark:bg-navy-900"
        >
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
              {post.category}
            </span>

            <span className="text-slate-500 dark:text-slate-400">
              {post.readingTime}
            </span>
          </div>

          <h3 className="line-clamp-2 text-3xl font-bold leading-tight text-slate-950 dark:text-white">
            {post.title}
          </h3>

          <p className="mt-5 line-clamp-3 leading-8 text-slate-600 dark:text-slate-300">
            {post.description}
          </p>

          <div className="mt-auto">
            <Link
              to={`/learn/categories/${post.categorySlug}/${post.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Start lesson <ArrowRight size={17} />
            </Link>

            <div className="mt-8 flex gap-2">
              {posts.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-8 bg-blue-600"
                      : "w-2.5 bg-slate-300 dark:bg-slate-700"
                  }`}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function BlogCarousel({ posts }: { posts: BlogPost[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [posts.length, paused]);

  const getPosition = (index: number) => {
    const diff = (index - activeIndex + posts.length) % posts.length;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === posts.length - 1) return "left";
    return "hidden";
  };

  return (
    <div
      className="relative mt-8 overflow-visible py-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto h-[380px] max-w-7xl overflow-visible">
        {posts.map((post, index) => {
          const position = getPosition(index);

          const transform =
            position === "center"
              ? "translateX(-50%) scale(1)"
              : position === "left"
              ? "translateX(-108%) scale(0.88)"
              : position === "right"
              ? "translateX(8%) scale(0.88)"
              : "translateX(-50%) scale(0.75)";

          return (
            <Link
              key={post.slug}
              to={`/blogs/${post.slug}`}
              style={{ transform }}
              className={`absolute left-1/2 top-0 block w-[82%] max-w-3xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-[620px] ${
                position === "center"
                  ? "z-30 opacity-100"
                  : position === "left" || position === "right"
                  ? "z-20 opacity-45 blur-[0.5px]"
                  : "pointer-events-none z-10 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-navy-900">
                <div className="relative h-[340px] w-full overflow-hidden rounded-[2rem]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition duration-700"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide">
                      <span>{post.category}</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h3 className="line-clamp-2 text-2xl font-bold leading-tight md:text-3xl">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-3 items-center">
        <div />

        <div className="flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prevSlide}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-md transition hover:scale-105 dark:bg-navy-900 dark:text-blue-300"
            aria-label="Previous blog"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex items-center gap-2">
            {posts.map((post, index) => (
              <button
                key={post.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full border border-blue-500 transition-all ${
                  activeIndex === index
                    ? "w-8 bg-blue-600"
                    : "w-3 bg-transparent"
                }`}
                aria-label={`Show ${post.title}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-md transition hover:scale-105 dark:bg-navy-900 dark:text-blue-300"
            aria-label="Next blog"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="flex justify-end">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
          >
            View all blogs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <AnimatedPage>
      <div className="relative overflow-hidden">
        {/* HERO */}
        <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
          <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300"
              >
                Crypto trading for beginners
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
              >
                Learn Crypto Trading the Smart Way
              </motion.h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Bassam Malik helps beginners understand crypto trading, risk
                management, chart basics, trading journals, and responsible market
                decision-making without hype or guaranteed profit claims.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/learn" className="button-primary">
                  Start Learning <ArrowRight className="ml-2" size={18} />
                </Link>

                <Link to="/resources" className="button-secondary">
                  Explore Free Resources
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="relative flex min-h-[420px] items-center justify-center overflow-visible"
            >
              <div className="absolute right-20 top-16 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" />
              <div className="absolute bottom-12 right-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-[100px]" />

              <div className="relative w-full max-w-[700px]">
                <img
                  src="/images/home-page/tile-network.png"
                  alt="Crypto Network"
                  className="relative z-10 w-full select-none object-contain"
                />

                <motion.img
                  src="/images/home-page/bitcoin.png"
                  alt="Bitcoin"
                  className="absolute z-30 w-[25%] select-none drop-shadow-[0_0_40px_rgba(16,185,129,0.35)]"
                  style={{ top: "5%", left: "37%" }}
                  animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  src="/images/home-page/ethereum.png"
                  alt="Ethereum"
                  className="absolute z-30 w-[10%] select-none"
                  style={{ top: "4%", left: "20%" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  src="/images/home-page/dogecoin.png"
                  alt="Dogecoin"
                  className="absolute z-30 w-[10%] select-none"
                  style={{ top: "4%", right: "20%" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  src="/images/home-page/litecoin.png"
                  alt="Litecoin"
                  className="absolute z-30 w-[10%] select-none"
                  style={{ bottom: "34%", left: "20%" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  src="/images/home-page/xrp.png"
                  alt="XRP"
                  className="absolute z-30 w-[10%] select-none"
                  style={{ bottom: "34%", right: "20%" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CORE TOPICS */}
        <section className="py-14 sm:py-16 lg:py-18">
          <div className="container-page">
            <SectionHeader
              eyebrow="Core topics"
              title="Build a serious foundation before making market decisions"
              description="Start with simple concepts, then connect them into a responsible spot trading process."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div className="premium-card" key={feature.title}>
                    <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                      <Icon size={22} />
                    </span>

                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LEARN SECTION */}
        <section className="py-14 sm:py-16 lg:py-18">
          <div className="container-page">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <SectionHeader
                  eyebrow="Learn crypto"
                  title="Build your crypto knowledge step by step"
                  description="Explore beginner-friendly lessons about risk management, chart basics, trading psychology, wallets, market concepts, and safer decision-making."
                />

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/learn"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                  >
                    Explore Learn <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/learn/categories"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-navy-900 dark:text-slate-300"
                  >
                    View Categories
                  </Link>
                </div>
              </div>

              <RotatingLearnCard posts={learnPosts.slice(0, 5)} />
            </div>
          </div>
        </section>

        {/* FEATURED BLOGS */}
        <section className="py-14 sm:py-16 lg:py-18">
          <div className="container-page">
            <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                eyebrow="Featured blogs"
                title="Crypto guides for beginner learning"
                description="Explore selected beginner-friendly guides about crypto books, market analysis tools, exchanges, and safer decision-making."
              />

              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
              >
                View all blogs <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts
                .filter((post) => post.featured)
                .slice(0, 3)
                .map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
            </div>
          </div>
        </section>

        {/* TRUST FIRST */}
        <section className="overflow-hidden py-14 sm:py-16 lg:py-18">
          <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 flex items-center justify-center lg:order-1">
              <div className="absolute h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
              <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-emerald-500/15 blur-[90px]" />

              <img
                src="/images/home-page/crypto-coins.png"
                alt="Crypto Education"
                className="relative z-10 w-full max-w-[400px] select-none object-contain"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <SectionHeader
                eyebrow="Trust first"
                title="Education without hype, pressure, or unrealistic promises"
                description="This website is built for beginners who want calm, practical, and responsible crypto education."
              />
            </motion.div>
          </div>
        </section>

        {/* LATEST BLOG CAROUSEL */}
        <section className="py-14 sm:py-16 lg:py-18">
          <div className="container-page">
            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                Latest Blogs
              </p>

              <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
                Latest blogs for smarter crypto learning
              </h2>
            </div>

            <BlogCarousel
              posts={[...blogPosts]
                .sort(
                  (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .slice(0, 5)}
            />
          </div>
        </section>

        {/* RESOURCES CTA */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="container-page">
            <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-emerald-500 p-8 text-center shadow-glow sm:p-12">
              <BookOpen className="mx-auto mb-5 text-white" size={40} />

              <h2 className="text-3xl font-bold text-white">
                Ready to learn with a safer mindset?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-blue-50">
                Explore guides, templates, and beginner lessons designed for
                responsible crypto spot trading education.
              </p>

              <Link
                to="/resources"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5"
              >
                Open Resources
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}