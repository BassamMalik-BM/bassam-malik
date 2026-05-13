import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-950 dark:text-white">{question}</span>
        <ChevronDown className={`shrink-0 text-blue-600 transition ${open ? 'rotate-180' : ''}`} size={20} />
      </button>
      {open && <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{answer}</p>}
    </div>
  );
}
