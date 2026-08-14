import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import AnimatedTradingChart from "./AnimatedTradingChart";

export default function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-20">
      {/* =====================================================
          ANIMATED CANDLESTICK BACKGROUND
      ===================================================== */}
      <AnimatedTradingChart />

      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[4%]
            top-[8%]
            h-72
            w-72
            rounded-full
            bg-blue-500/10
            blur-3xl
            dark:bg-blue-500/10
          "
        />

        {/* Emerald glow */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -25, 0],
                  y: [0, 25, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[0%]
            right-[3%]
            h-80
            w-80
            rounded-full
            bg-emerald-500/10
            blur-3xl
            dark:bg-emerald-500/10
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="container-page relative z-10">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.28em]
              text-blue-600
              dark:text-blue-400
            "
          >
            Crypto education for beginners
          </motion.p>

          {/* =====================================================
              HEADING
          ===================================================== */}
          <motion.h1
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.05,
            }}
            className="
              mt-5
              max-w-5xl
              pb-3
              text-5xl
              font-bold
              leading-[1.1]
              tracking-tight
              text-slate-950
              sm:text-6xl
              lg:text-7xl
              dark:text-white
            "
          >
            Understand crypto before

            <span
              className="
                block
                pb-3
                leading-[1.12]
                bg-gradient-to-r
                from-blue-600
                to-emerald-500
                bg-clip-text
                text-transparent
              "
            >
              risking your money.
            </span>
          </motion.h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
            className="
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-300
            "
          >
            Learn cryptocurrency, trading, risk management, security, and
            market fundamentals through clear, structured education built for
            beginners.
          </motion.p>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.18,
            }}
            className="
              mt-8
              flex
              flex-col
              items-start
              gap-3
              sm:flex-row
            "
          >
            {/* Primary CTA */}
            <Link
              to="/learn"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-blue-500/20
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-blue-700
                dark:hover:bg-blue-500
              "
            >
              Start Learning

              <ArrowRight size={17} />
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/discover"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-white/70
                px-6
                py-3.5
                text-sm
                font-bold
                text-slate-700
                backdrop-blur-sm
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-blue-300
                hover:text-blue-600

                dark:border-white/10
                dark:bg-white/[0.03]
                dark:text-slate-300
                dark:hover:border-blue-500/30
                dark:hover:text-blue-400
              "
            >
              Explore Resources

              <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* =====================================================
              TRUST STRIP
          ===================================================== */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.28,
            }}
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-x-7
              gap-y-3
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            <TrustItem
              icon={BookOpen}
              text="Beginner focused"
            />

            <TrustItem
              icon={SearchCheck}
              text="Research based"
            />

            <TrustItem
              icon={ShieldCheck}
              text="Risk aware"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   TRUST ITEM
===================================================== */

function TrustItem({
  icon: Icon,
  text,
}: {
  icon: typeof BookOpen;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        size={16}
        strokeWidth={1.8}
        className="text-blue-600 dark:text-blue-400"
      />

      <span>{text}</span>
    </div>
  );
}