import { useState } from "react";
import { ChevronDown, Clock, ExternalLink } from "lucide-react";
import FAQSchema from "../../schemas/FAQSchema";

const books = [
  {
    title: "The Bitcoin Standard",
    author: "Saifedean Ammous",
    image: "/images/best-crypto-books/bitcoin-standard.png",
    link: "https://amzn.to/4tXJC3T",
    difficulty: "Intermediate",
    body: [
      "This book is one of the most widely read works in the Bitcoin space. Ammous walks through the history of money, what makes a currency sound or unsound, and why he believes Bitcoin represents a significant development in monetary history.",
      "You will come away with a much deeper understanding of what money actually is and why many people take Bitcoin seriously as an alternative financial system.",
      "Ammous is a Bitcoin advocate, and the writing reflects that clearly. Read it for the education it provides while keeping in mind that not every economic argument in the book is universally accepted.",
    ],
  },
  {
    title: "Broken Money",
    author: "Lyn Alden",
    image: "/images/best-crypto-books/broken-money.png",
    link: "https://amzn.to/4drOzx7",
    difficulty: "Intermediate",
    body: [
      "Lyn Alden is known for explaining complex financial topics in plain, accessible language. In Broken Money, she traces the history of currency from ancient times to the modern digital era.",
      "The book helps readers understand the structural weaknesses of current monetary systems and where Bitcoin fits into that picture.",
      "This is a longer book and rewards patient reading. It is not a quick guide, but beginners who take their time will find it highly educational.",
    ],
  },
  {
    title: "Cryptoassets",
    author: "Chris Burniske and Jack Tatar",
    image: "/images/best-crypto-books/cryptoassets.png",
    link: "https://amzn.to/4f5WGAM",
    difficulty: "Beginner to Intermediate",
    body: [
      "This book was one of the first serious attempts to explain the broader crypto asset landscape to general readers.",
      "Burniske and Tatar walk through what cryptoassets are, how they differ from one another, and how an investor might think about evaluating them without turning the book into hype.",
      "Some examples may feel dated because the crypto space changes quickly, but the frameworks remain useful for beginners.",
    ],
  },
  {
    title: "Inventing Bitcoin",
    author: "Yan Pritzker",
    image: "/images/best-crypto-books/inventing-bitcoin.png",
    link: "https://amzn.to/4drjdXs",
    difficulty: "Beginner-friendly",
    body: [
      "This is a short book, and that is part of what makes it so effective. Pritzker explains the technical design of Bitcoin in a way that ordinary people can follow.",
      "It covers cryptographic keys, the blockchain, mining, and why Bitcoin is designed the way it is.",
      "If you have ever felt confused about how Bitcoin actually works, this is one of the most approachable places to start.",
    ],
  },
  {
    title: "Layered Money",
    author: "Nik Bhatia",
    image: "/images/best-crypto-books/layered-money.png",
    link: "https://amzn.to/4fFQbEN",
    difficulty: "Intermediate",
    body: [
      "Bhatia uses the concept of layered systems to explain how money works, from gold at the base, through central bank reserves, to commercial bank deposits and payment networks.",
      "He then applies this framework to Bitcoin and the Lightning Network.",
      "This book is best after you already have a basic grasp of Bitcoin because it adds a deeper monetary context.",
    ],
  },
  {
    title: "Mastering Bitcoin, 2nd Edition",
    author: "Andreas M. Antonopoulos",
    image: "/images/best-crypto-books/mastering-bitcoin.png",
    link: "https://amzn.to/3PGuV7h",
    difficulty: "Advanced",
    body: [
      "Andreas M. Antonopoulos is one of the most respected educators in the Bitcoin space. Mastering Bitcoin, 2nd Edition covers Bitcoin architecture, blockchain transactions, wallets, and the broader technical infrastructure in considerable depth.",
      "Even if you do not follow every technical section, the introductory and conceptual chapters provide real standalone value.",
      "This is not a book for complete beginners in the traditional sense. Think of it as a book you grow into rather than one you finish in a weekend.",
    ],
  },
  {
    title: "Digital Gold",
    author: "Nathaniel Popper",
    image: "/images/best-crypto-books/digital-gold.png",
    link: "https://amzn.to/4usPIdD",
    difficulty: "Beginner-friendly",
    body: [
      "Digital Gold is a work of narrative journalism. Popper tells the story of Bitcoin’s origins and the people who built and believed in it during its early, uncertain years.",
      "It reads like a compelling story rather than a textbook, making it one of the most approachable introductions to the Bitcoin world.",
      "This book will not teach you how Bitcoin works technically, but it gives valuable cultural and historical context.",
    ],
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "/images/best-crypto-books/psychology-of-money.png",
    link: "https://amzn.to/49OMvNi",
    difficulty: "Beginner-friendly",
    body: [
      "This is not a crypto book specifically, but it may be one of the most important books for anyone new to investing.",
      "Housel writes about how people actually behave with money, including overconfidence, risk tolerance, luck, patience, fear, and greed.",
      "Many beginners struggle not because they lack information, but because they act emotionally. This book helps build a calmer financial mindset.",
    ],
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "/images/best-crypto-books/rich-dad-poor-dad.png",
    link: "https://amzn.to/49jHgVO",
    difficulty: "Beginner-friendly",
    body: [
      "This book has introduced millions of people to basic ideas about assets, liabilities, financial independence, and financial education.",
      "While it does not cover crypto directly, the shift in mindset it encourages is useful for anyone who wants to think more carefully about money.",
      "Read it as a mindset introduction rather than a detailed financial guide.",
    ],
  },
  {
    title: "The Little Book of Common Sense Investing",
    author: "John C. Bogle",
    image: "/images/best-crypto-books/common-sense-investing.png",
    link: "https://amzn.to/3PXcD1S",
    difficulty: "Beginner-friendly",
    body: [
      "Bogle was the founder of Vanguard and one of the most respected voices in investing history.",
      "This book focuses on simplicity, patience, managing expectations, and avoiding unnecessary speculation.",
      "Although it is not about crypto, its lessons are valuable for anyone entering a volatile market for the first time.",
    ],
  },
];

const faqs = [
  {
    question: "What is the best crypto book for complete beginners?",
    answer:
      "The Psychology of Money followed by Inventing Bitcoin is a strong starting point. The first helps you build a sensible mindset about money and risk, while the second explains Bitcoin in clear, accessible language.",
  },
  {
    question: "Should I read Bitcoin books before crypto investing books?",
    answer:
      "Yes. Bitcoin is the original cryptocurrency and the foundation of the digital asset space. Understanding it first gives beginners a stronger base before exploring broader crypto topics.",
  },
  {
    question: "Are crypto books better than YouTube for learning?",
    answer:
      "Books are better for deep fundamentals, while YouTube and online content can help with visual explanations and current updates. The best approach is to use both carefully.",
  },
  {
    question: "Can books help me manage risk?",
    answer:
      "Yes. Good books help you understand emotions, patience, uncertainty, and why risk management matters before making financial decisions.",
  },
  {
    question: "Do I need technical knowledge to read crypto books?",
    answer:
      "Not for most beginner books. Inventing Bitcoin, Digital Gold, The Psychology of Money, and Rich Dad Poor Dad are accessible without technical background.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-5 last:border-0 dark:border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-bold text-slate-950 dark:text-white">
          {question}
        </span>

        <ChevronDown
          size={20}
          className={`shrink-0 text-blue-600 transition dark:text-blue-400 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function BestCryptoBooks() {
  return (
    <>
    <FAQSchema faqs={faqs} />
    <article className="premium-card mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
      <header>
        <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            Beginner Guides
          </span>

          <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock size={16} /> 12 min read
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Best Crypto Books for Beginners
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Discover the best crypto books for beginners. Build real understanding
          of Bitcoin, money, and investing mindset before making any decisions.
          No hype, just learning.
        </p>
      </header>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Books Still Matter in the Age of Social Media
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            If you have spent any time online trying to learn about
            cryptocurrency, you already know how overwhelming it can feel. The
            noise is constant, and for a beginner, it is genuinely hard to know
            where to start.
          </p>

          <p>
            This is exactly why books still matter. Books slow things down. They
            force a writer to explain ideas clearly, in full, with context and
            reasoning. They are not written to get quick likes or push you into a
            fast decision.
          </p>

          <p>
            A good book on Bitcoin, money, or investing helps you understand the
            why behind things, not just the what.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          The Best Crypto Books for Beginners
        </h2>

        <div className="mt-8 divide-y divide-slate-200 dark:divide-white/10">
          {books.map((book, index) => (
            <div key={book.title} className="py-10 first:pt-0 last:pb-0">
              <div className="grid gap-8 lg:grid-cols-[190px_minmax(0,1fr)] lg:items-start">
                <div className="flex justify-center lg:justify-start">
                  <img
                    src={book.image}
                    alt={`${book.title} book cover`}
                    className="max-h-72 w-auto object-contain drop-shadow-xl"
                    loading="lazy"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      #{index + 1}
                    </span>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                      {book.difficulty}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">
                    {book.title}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Author: {book.author}
                  </p>

                  <div className="mt-4 space-y-4 leading-8 text-slate-700 dark:text-slate-300">
                    {book.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    View on Amazon <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEST READING ORDER */}
<section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
    Best Reading Order for Beginners
  </h2>

  <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
    <p>
      If you are completely new to crypto and investing, the order in
      which you read these books matters. Here is a simple recommended
      sequence to help you build knowledge gradually without feeling
      overwhelmed.
    </p>
  </div>

  <div className="mt-8 space-y-8">
    {/* Step 1 */}
    <div className="rounded-3xl border border-slate-200 p-6 dark:border-white/10">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
        Step 1 — Start with mindset and money basics
      </h3>

      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        Begin with{" "}
        <span className="font-semibold">
          The Psychology of Money
        </span>{" "}
        by Morgan Housel and{" "}
        <span className="font-semibold">
          Rich Dad Poor Dad
        </span>{" "}
        by Robert Kiyosaki. These books will help you develop the
        right mental framework before you encounter crypto-specific
        content.
      </p>

      <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
        You will be less likely to make emotional decisions if you
        understand how money, patience, and psychology interact.
      </p>
    </div>

    {/* Step 2 */}
    <div className="rounded-3xl border border-slate-200 p-6 dark:border-white/10">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
        Step 2 — Understand the story and history
      </h3>

      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        Read <span className="font-semibold">Digital Gold</span> by
        Nathaniel Popper. This book gives you the human story behind
        Bitcoin without requiring technical knowledge.
      </p>

      <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
        You will understand why Bitcoin emerged and who helped shape
        its early growth.
      </p>
    </div>

    {/* Step 3 */}
    <div className="rounded-3xl border border-slate-200 p-6 dark:border-white/10">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
        Step 3 — Learn how Bitcoin works
      </h3>

      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        Read <span className="font-semibold">Inventing Bitcoin</span>{" "}
        by Yan Pritzker. At this point, you are ready to understand
        Bitcoin mechanics in a clear and beginner-friendly way.
      </p>

      <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
        This short book answers many of the questions beginners often
        have after first hearing about Bitcoin.
      </p>
    </div>

    {/* Step 4 */}
    <div className="rounded-3xl border border-slate-200 p-6 dark:border-white/10">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
        Step 4 — Go deeper into money and economics
      </h3>

      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        Read <span className="font-semibold">Layered Money</span> by
        Nik Bhatia and then{" "}
        <span className="font-semibold">
          The Bitcoin Standard
        </span>{" "}
        by Saifedean Ammous.
      </p>

      <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
        These books help you understand monetary history and why many
        people consider Bitcoin an important development.
      </p>
    </div>

    {/* Step 5 */}
    <div className="rounded-3xl border border-slate-200 p-6 dark:border-white/10">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
        Step 5 — Broaden your understanding of crypto
      </h3>

      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        Read <span className="font-semibold">Broken Money</span> by
        Lyn Alden and{" "}
        <span className="font-semibold">Cryptoassets</span> by Chris
        Burniske and Jack Tatar.
      </p>

      <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
        These books help you understand the broader digital asset
        ecosystem beyond Bitcoin alone.
      </p>
    </div>

    {/* Step 6 */}
    <div className="rounded-3xl border border-slate-200 p-6 dark:border-white/10">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
        Step 6 — Add investing discipline
      </h3>

      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        Finish with{" "}
        <span className="font-semibold">
          The Little Book of Common Sense Investing
        </span>{" "}
        by John C. Bogle.
      </p>

      <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
        By this stage, you will have real knowledge to act on, and this
        book will help you think carefully about patience, discipline,
        and responsible decision-making.
      </p>
    </div>

    {/* Optional */}
    <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
        Optional deeper dive
      </h3>

      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        If you become curious about the technical side of Bitcoin,
        <span className="font-semibold">
          {" "}Mastering Bitcoin (2nd Edition)
        </span>{" "}
        by Andreas M. Antonopoulos is waiting for you when you are ready.
      </p>
    </div>
  </div>
</section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="mt-6">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Conclusion: Learn First, Decide Later
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            The crypto space will still be there next week, next month, and next
            year. The most common mistake beginners make is not a lack of
            opportunity. It is a lack of understanding.
          </p>

          <p>
            Start with one book. Read it slowly. Then read another. Compare what
            different authors say and keep building your understanding.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-200">
          Educational content only. Not financial advice. Always do your own
          research and make responsible decisions.
        </div>
      </section>
    </article>
    </>
  );
}