import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ShieldCheck,
  NotebookPen,
  LineChart,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import LearnCard from '../components/LearnCard';
import BlogCard from '../components/BlogCard';
import SectionHeader from '../components/SectionHeader';
import { learnPosts } from '../data/learn';
import { blogPosts } from '../data/blogs';

const features = [
  {
    title: 'Spot Trading',
    description:
      'Learn how buying and selling crypto assets works without futures, leverage, or complex products.',
    icon: BarChart3,
  },
  {
    title: 'Risk Management',
    description:
      'Build habits that help protect capital and reduce emotional decisions in volatile markets.',
    icon: ShieldCheck,
  },
  {
    title: 'Trading Journal',
    description:
      'Track your decisions, emotions, lessons, buy plans, and sell plans with structure.',
    icon: NotebookPen,
  },
  {
    title: 'Support & Resistance',
    description:
      'Understand key price zones and use them to plan more responsible market decisions.',
    icon: LineChart,
  },
];

export default function Home() {
  return (
    <AnimatedPage>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-navy-950 sm:py-28">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_35%)]" />

        <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
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
                Explore Resources
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="relative flex min-h-[500px] items-center justify-center overflow-visible"
          >
            <div className="absolute top-16 right-20 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" />
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
                style={{ top: '5%', left: '37%' }}
                animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.img
                src="/images/home-page/ethereum.png"
                alt="Ethereum"
                className="absolute z-30 w-[10%] select-none"
                style={{ top: '8%', left: '20%' }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.img
                src="/images/home-page/dogecoin.png"
                alt="Dogecoin"
                className="absolute z-30 w-[10%] select-none"
                style={{ top: '8%', right: '20%' }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.img
                src="/images/home-page/litecoin.png"
                alt="Litecoin"
                className="absolute z-30 w-[10%] select-none"
                style={{ bottom: '34%', left: '20%' }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.img
                src="/images/home-page/xrp.png"
                alt="XRP"
                className="absolute z-30 w-[10%] select-none"
                style={{ bottom: '34%', right: '20%' }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE TOPICS */}
      <section className="section-padding bg-white dark:bg-navy-900">
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

      {/* LATEST BLOGS */}
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Latest blogs"
              title="Fresh crypto insights for smarter learning"
              description="Explore beginner-friendly blog posts about crypto books, market analysis tools, psychology, risk awareness, and safer decision-making."
            />

            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
            >
              View all blogs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST FIRST */}
      <section className="section-padding overflow-hidden bg-slate-50 dark:bg-navy-950">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
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

      {/* LEARN SECTION */}
      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-page">
          <SectionHeader
            centered
            eyebrow="Learn crypto"
            title="Start learning with beginner-friendly lessons"
            description="Read practical guides about spot trading, chart basics, risk management, and journaling."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {learnPosts.slice(0, 3).map((post) => (
              <LearnCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES CTA */}
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
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
    </AnimatedPage>
  );
}