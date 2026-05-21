import { ArrowRight, BarChart3, BookOpen, ShieldCheck, NotebookPen, LineChart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import BlogCard from '../components/BlogCard';
import SectionHeader from '../components/SectionHeader';
import { blogPosts } from '../data/blogs';

import tileNetwork from '../assets/images/tile-network.png'
import bitcoin from '../assets/images/bitcoin.png'
import ethereum from '../assets/images/ethereum.png'
import litecoin from '../assets/images/litecoin.png'
import xrp from '../assets/images/xrp.png'
import dogecoin from '../assets/images/dogecoin.png'

const features = [
  { title: 'Spot Trading', description: 'Learn how buying and selling crypto assets works without futures, leverage, or complex products.', icon: BarChart3 },
  { title: 'Risk Management', description: 'Build habits that help protect capital and reduce emotional decisions in volatile markets.', icon: ShieldCheck },
  { title: 'Trading Journal', description: 'Track your decisions, emotions, lessons, buy plans, and sell plans with structure.', icon: NotebookPen },
  { title: 'Support & Resistance', description: 'Understand key price zones and use them to plan more responsible market decisions.', icon: LineChart },
];

const trustPoints = [
  'Beginner-focused explanations with no hype.',
  'Only spot trading language: buy, sell, plan, and review.',
  'Strong focus on risk awareness and personal responsibility.',
];

export default function Home() {
  return (
    <AnimatedPage>
      <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-navy-950 sm:py-28">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_35%)]" />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
              Serious crypto education for beginners
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Learn Crypto Spot Trading the Smart Way
            </motion.h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Bassam Malik helps beginners understand crypto spot trading, risk management, chart basics, trading journals, and responsible market decision-making without hype or guaranteed profit claims.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/blogs" className="button-primary">Start Learning <ArrowRight className="ml-2" size={18} /></Link>
              <Link to="/resources" className="button-secondary">Explore Resources</Link>
            </div>
          </div>

          <motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.55 }}
  className="relative flex min-h-[500px] items-center justify-center overflow-visible"
>
  {/* Glow */}
  <div className="absolute top-16 right-20 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" />
  <div className="absolute bottom-12 right-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-[100px]" />

  <div className="relative w-full max-w-[700px]">
    {/* Tile Network */}
    <img
      src={tileNetwork}
      alt="Crypto Network"
      className="relative z-10 w-full select-none object-contain"
    />

    {/* BTC - big center */}
    <motion.img
      src={bitcoin}
      alt="Bitcoin"
      className="absolute z-30 w-[25%] select-none drop-shadow-[0_0_40px_rgba(16,185,129,0.35)]"
      style={{
        top: '5%',
        left: '37%',
      }}
      animate={{
        y: [0, -14, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Ethereum - top left */}
    <motion.img
      src={ethereum}
      alt="Ethereum"
      className="absolute z-30 w-[10%] select-none"
      style={{
        top: '8%',
        left: '20%',
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3.7,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Dogecoin - top right */}
    <motion.img
      src={dogecoin}
      alt="Dogecoin"
      className="absolute z-30 w-[10%] select-none"
      style={{
        top: '8%',
        right: '20%',
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Litecoin - bottom left */}
    <motion.img
      src={litecoin}
      alt="Litecoin"
      className="absolute z-30 w-[10%] select-none"
      style={{
        bottom: '34%',
        left: '20%',
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* XRP - bottom right */}
    <motion.img
      src={xrp}
      alt="XRP"
      className="absolute z-30 w-[10%] select-none"
      style={{
        bottom: '34%',
        right: '20%',
      }}
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

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-page">
          <SectionHeader eyebrow="Core topics" title="Build a serious foundation before making market decisions" description="Start with simple concepts, then connect them into a responsible spot trading process." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div className="premium-card" key={feature.title}>
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300"><Icon size={22} /></span>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeader eyebrow="Trust first" title="Education without hype, pressure, or unrealistic promises" description="This website is built for beginners who want calm, practical, and responsible crypto education." />
          <div className="grid gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex gap-3 rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.06]">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={22} />
                <p className="font-medium text-slate-700 dark:text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-page">
          <SectionHeader centered eyebrow="Featured blogs" title="Start learning with beginner-friendly lessons" description="Read practical guides about spot trading, chart basics, risk management, and journaling." />
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-emerald-500 p-8 text-center shadow-glow sm:p-12">
            <BookOpen className="mx-auto mb-5 text-white" size={40} />
            <h2 className="text-3xl font-bold text-white">Ready to learn with a safer mindset?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-50">Explore guides, templates, and beginner lessons designed for responsible crypto spot trading education.</p>
            <Link to="/resources" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5">Open Resources</Link>
          </div>
        </div>
      </section>

    </AnimatedPage>
  );
}
