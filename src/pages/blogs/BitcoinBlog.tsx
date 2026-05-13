import {
  AlertTriangle,
  Banknote,
  Blocks,
  Calendar,
  CheckCircle,
  Clock,
  Coins,
  Globe,
  KeyRound,
  LockKeyhole,
  Network,
  ShieldCheck,
  Tag,
  Wallet,
} from "lucide-react";

const pillars = [
  {
    icon: Blocks,
    title: "Blockchain",
    text: "A public record of Bitcoin transactions, grouped into blocks and verified by many computers around the world.",
  },
  {
    icon: ShieldCheck,
    title: "Proof of Work",
    text: "Miners use computing power to secure the network and add new blocks, making attacks expensive and difficult.",
  },
  {
    icon: KeyRound,
    title: "Private Keys",
    text: "Bitcoin ownership is controlled through private keys. If you control the key, you control the Bitcoin.",
  },
  {
    icon: Network,
    title: "Peer-to-Peer Network",
    text: "Bitcoin does not rely on one central server. Thousands of nodes help validate the rules of the network.",
  },
];

const history = [
  ["2008", "Satoshi Nakamoto publishes the Bitcoin whitepaper."],
  ["2009", "The Bitcoin network launches with the Genesis Block."],
  ["2010", "The first known real-world Bitcoin purchase happens: two pizzas for 10,000 BTC."],
  ["2017", "Bitcoin becomes widely known during a major bull market."],
  ["2021", "Large companies and institutions begin paying serious attention to Bitcoin."],
  ["2024", "Spot Bitcoin ETFs bring more institutional access to Bitcoin."],
];

const whyMatters = [
  {
    icon: Coins,
    title: "Fixed Supply",
    text: "Bitcoin has a maximum supply of 21 million coins, making its scarcity predictable.",
  },
  {
    icon: Globe,
    title: "Global Access",
    text: "Bitcoin can be sent across borders without relying on traditional banking systems.",
  },
  {
    icon: Wallet,
    title: "Self-Custody",
    text: "With proper wallet security, users can hold Bitcoin without depending fully on an exchange.",
  },
  {
    icon: Banknote,
    title: "Alternative Money System",
    text: "Bitcoin introduced a new way to think about money, ownership, and digital value.",
  },
];

const myths = [
  {
    label: "Myth",
    title: "Bitcoin is only used by criminals",
    text: "Bitcoin transactions are recorded on a public blockchain, making activity more traceable than many people think.",
  },
  {
    label: "Concern",
    title: "Bitcoin uses energy",
    text: "Bitcoin mining does use energy. Supporters argue that this energy helps secure the network, while critics question the tradeoff.",
  },
  {
    label: "Reality",
    title: "Bitcoin is volatile",
    text: "Bitcoin can move sharply up or down. Beginners should understand this before buying.",
  },
];

export default function BitcoinBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Bitcoin Basics
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 8 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        What Is Bitcoin and Why Does It Matter?
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 13, 2026
        </span>
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Bitcoin • Crypto Basics • Education
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Bitcoin is often called digital money, digital gold, or a new financial
        network. But for beginners, the most important idea is simple: Bitcoin
        is a decentralized digital asset that can be owned and transferred
        without depending on one central authority.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · The Simple Idea
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Exactly Is Bitcoin?
          </h2>

          <p>
            Bitcoin is a decentralized digital currency. It exists as software,
            is secured by mathematics, and is maintained by a network of
            computers instead of a single company, bank, or government.
          </p>

          <p className="mt-4">
            Unlike money in a bank account, Bitcoin transactions are recorded on
            a public ledger called the blockchain. This ledger is shared across
            many computers, making it difficult for one party to secretly change
            the rules.
          </p>

          <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
            <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
              “Bitcoin made it possible to own a scarce digital asset that
              cannot simply be copied like a normal file.”
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · How It Works
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            The Main Parts of Bitcoin
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · History
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            A Short History of Bitcoin
          </h2>

          <div className="space-y-4">
            {history.map(([year, text]) => (
              <div
                key={year}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  {year}
                </span>

                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Why It Matters
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Why People Pay Attention to Bitcoin
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {whyMatters.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Myths and Risks
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            A Fair Beginner View
          </h2>

          <div className="space-y-4">
            {myths.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                  {item.label}
                </span>

                <h3 className="mt-4 font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            06 · Before Buying
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Should Beginners Buy Bitcoin?
          </h2>

          <p>
            That depends on your knowledge, risk tolerance, financial situation,
            and time horizon. Bitcoin has created major opportunities, but it
            has also gone through large price drops. Beginners should never buy
            only because of hype.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Understand what Bitcoin is before buying.",
              "Use only money you can afford to lose.",
              "Avoid emotional buying during hype.",
              "Learn the difference between holding on an exchange and self-custody.",
              "Always do your own research.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <CheckCircle
                  size={20}
                  className="mt-1 shrink-0 text-emerald-500"
                />
                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 p-8 text-white">
          <div className="mb-4 flex items-center gap-3 text-emerald-300">
            <LockKeyhole size={24} />
            <p className="m-0 text-sm font-semibold uppercase tracking-wide">
              Final Reminder
            </p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-white">
            Learn First. Buy Carefully.
          </h2>

          <p className="leading-7 text-slate-300">
            Bitcoin matters because it introduced a new kind of digital
            ownership and monetary network. But it is still volatile and risky.
            Use this article for learning only, not as financial advice.
          </p>

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
            <AlertTriangle
              size={20}
              className="mt-1 shrink-0 text-amber-300"
            />
            <p className="m-0 text-sm leading-7 text-amber-100">
              Educational content only. Crypto markets are risky. Always make
              your own responsible decisions.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}