import { FaLinkedinIn } from "react-icons/fa6";

export default function ArticleAuthor() {
  return (
    <section className="mt-16 border-t border-slate-200 pt-8 dark:border-white/10">
      <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-emerald-50 px-10 py-8 dark:from-blue-500/5 dark:via-sky-500/5 dark:to-emerald-500/5">
        <div className="flex gap-8">
          {/* Vertical Accent Line */}
          <div className="mt-1 h-55 w-px bg-gradient-to-b from-blue-500 via-slate-300 to-emerald-500 dark:from-blue-400 dark:via-white/20 dark:to-emerald-400" />

          {/* Content */}
          <div className="max-w-4xl flex-1">
            {/* Header */}
            <div className="flex items-center gap-5">
              {/* Image Placeholder */}
              <div className="h-14 w-14 shrink-0 rounded-full bg-white shadow-sm ring-1 ring-slate-200 dark:bg-navy-900 dark:ring-white/10">
                {/* Add your image later */}
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="mb 1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  Written by
                </p>

                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Bassam Malik
                  </h2>

                  <a
                    href="https://www.linkedin.com/in/bassam-malik-bm"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Bassam Malik's LinkedIn profile"
                    className="group mr-8 -mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                  >
                    <FaLinkedinIn
                      size={20}
                      className="text-[#0A66C2] transition duration-300 group-hover:scale-110"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-1 text-base leading-8 text-slate-600 dark:text-slate-300">
              Bassam Malik is the founder of BassamMalik.com, where he creates
              beginner-friendly educational content about cryptocurrency,
              blockchain, and crypto trading. After spending more than four
              years learning and participating in the crypto market, he launched
              the platform to help newcomers build a solid understanding of the
              space through clear, research-backed articles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}