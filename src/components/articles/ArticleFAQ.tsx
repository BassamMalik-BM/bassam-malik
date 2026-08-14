import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { ArticleFAQ as ArticleFAQType } from "../../data/articles/articleTypes";

type ArticleFAQProps = {
  faqs: ArticleFAQType[];
};

export default function ArticleFAQ({ faqs }: ArticleFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 divide-y divide-slate-200 dark:divide-white/10">
        {faqs.map((faq, index) => {
          const open = openIndex === index;

          return (
            <div key={index} className="py-6">
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(open ? null : index)
                }
                className="flex w-full items-center justify-between gap-6 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open
                    ? "grid-rows-[1fr] pt-4"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}