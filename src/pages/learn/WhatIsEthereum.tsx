import {
  AlertTriangle,
  Boxes,
  Calendar,
  CheckCircle,
  Clock,
  Code2,
  Coins,
  FileText,
  Globe2,
  HelpCircle,
  Layers,
  ShieldCheck,
  Tag,
  Wallet,
  Zap,
} from "lucide-react";

const ethereumBasics = [
  {
    icon: Code2,
    title: "Programmable blockchain",
    text: "Ethereum allows developers to build applications that run on blockchain technology.",
  },
  {
    icon: Coins,
    title: "ETH is the native asset",
    text: "ETH is used to pay network fees and interact with Ethereum-based applications.",
  },
  {
    icon: ShieldCheck,
    title: "Decentralized network",
    text: "Ethereum is not controlled by one company. It is maintained by a global network of participants.",
  },
];

const useCases = [
  {
    icon: Wallet,
    title: "DeFi",
    text: "Decentralized finance apps allow users to access crypto-based financial tools without traditional middlemen.",
  },
  {
    icon: Boxes,
    title: "NFTs",
    text: "Ethereum helped popularize digital ownership through non-fungible tokens and collectible assets.",
  },
  {
    icon: Layers,
    title: "Layer 2 networks",
    text: "Layer 2 networks help Ethereum become faster and cheaper while still connecting back to Ethereum security.",
  },
  {
    icon: Globe2,
    title: "Web3 applications",
    text: "Ethereum supports apps that aim to give users more control over digital assets and online activity.",
  },
];

const comparisonRows = [
  ["Bitcoin", "Ethereum"],
  ["Mainly known as digital money", "Known as a programmable blockchain platform"],
  ["Focuses on scarcity and value storage", "Focuses on apps, smart contracts, and digital infrastructure"],
  ["Limited programmability", "Designed for programmable applications"],
  ["BTC is the native asset", "ETH is the native asset"],
];

const risks = [
  "Ethereum can be difficult for beginners to understand at first.",
  "Network fees can become expensive during busy periods.",
  "Smart contracts can contain bugs or security risks.",
  "Crypto assets, including ETH, can be highly volatile.",
  "Scams can target beginners using fake Ethereum apps or tokens.",
];

const glossary = [
  {
    term: "ETH",
    meaning: "The native crypto asset of Ethereum.",
  },
  {
    term: "Gas",
    meaning: "The fee paid to process transactions or use apps on Ethereum.",
  },
  {
    term: "Smart Contract",
    meaning: "Code that runs automatically when certain conditions are met.",
  },
  {
    term: "dApp",
    meaning: "A decentralized application built on a blockchain.",
  },
  {
    term: "Layer 2",
    meaning: "A network built to make Ethereum transactions faster and cheaper.",
  },
  {
    term: "Wallet",
    meaning: "A tool used to store crypto assets and connect to blockchain apps.",
  },
];

const checklist = [
  "I understand that Ethereum is more than just the ETH price.",
  "I know that smart contracts are programs running on the blockchain.",
  "I understand that using Ethereum apps can involve fees and risk.",
  "I know that ETH can move sharply in price.",
  "I will research carefully before using any Ethereum-based app.",
  "I will avoid fake tokens, fake websites, and pressure-based decisions.",
];

const faqs = [
  {
    question: "Is Ethereum the same as Bitcoin?",
    answer:
      "No. Bitcoin is mainly known as digital money and a store of value. Ethereum is a programmable blockchain that supports smart contracts and decentralized applications.",
  },
  {
    question: "What is ETH used for?",
    answer:
      "ETH is used to pay transaction fees, interact with Ethereum apps, and participate in the Ethereum ecosystem.",
  },
  {
    question: "What is a smart contract?",
    answer:
      "A smart contract is code stored on the blockchain that runs automatically when its conditions are met.",
  },
  {
    question: "Is Ethereum risky for beginners?",
    answer:
      "Ethereum can be useful to learn, but it still carries risks such as price volatility, scams, app risks, and transaction fees.",
  },
];

export default function WhatIsEthereum() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Blockchain Basics
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 12 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        What Is Ethereum and Why Does It Matter?
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 22, 2026
        </span>
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Ethereum • Smart Contracts • Blockchain
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Ethereum is one of the most important blockchain networks in crypto. It
        is best known for smart contracts, decentralized applications, and ETH,
        the native asset used inside the Ethereum ecosystem.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · The Simple Idea
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Is Ethereum?
          </h2>

          <p>
            Ethereum is a decentralized blockchain platform that allows people
            to send value, build applications, and run programs called smart
            contracts. While Bitcoin introduced many beginners to digital money,
            Ethereum expanded the idea by making blockchains programmable.
          </p>

          <p className="mt-4">
            A simple way to think about Ethereum is this: Bitcoin is often
            explained as digital money, while Ethereum is more like digital
            infrastructure. Developers can build apps on Ethereum, and users can
            interact with those apps using crypto wallets.
          </p>

          <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
            <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
              “Ethereum is not only about holding ETH. It is also about what can
              be built on top of the network.”
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Core Concepts
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            The Basic Parts of Ethereum
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {ethereumBasics.map((item) => {
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
            03 · ETH Explained
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Is ETH?
          </h2>

          <p>
            ETH is the native crypto asset of the Ethereum network. It is used
            to pay transaction fees, interact with applications, and support
            activity across the Ethereum ecosystem.
          </p>

          <p className="mt-4">
            When someone sends ETH, uses a decentralized app, swaps tokens, or
            interacts with a smart contract, they usually need to pay a network
            fee. This fee is often called gas.
          </p>

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-400/20 dark:bg-amber-500/10">
            <AlertTriangle
              size={20}
              className="mt-1 shrink-0 text-amber-600 dark:text-amber-300"
            />
            <p className="m-0 text-sm leading-7 text-amber-900 dark:text-amber-100">
              Beginner reminder: ETH price can move sharply. Understanding the
              technology does not remove market risk.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Smart Contracts
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Are Smart Contracts?
          </h2>

          <p>
            Smart contracts are programs stored on the blockchain. They can run
            automatically when certain conditions are met. This is one of the
            main reasons Ethereum became so important.
          </p>

          <p className="mt-4">
            A beginner-friendly example is a vending machine. You put money in,
            choose an item, and the machine follows its rules automatically. A
            smart contract works in a similar way, but the rules are written in
            code and run on the blockchain.
          </p>

          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-500/20 dark:bg-emerald-500/10">
            <div className="mb-3 flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
              <Code2 size={22} />
              <p className="m-0 text-sm font-semibold uppercase tracking-wide">
                Beginner Tip
              </p>
            </div>

            <p className="m-0 text-sm leading-7 text-emerald-900 dark:text-emerald-100">
              Smart contracts can be useful, but they are still code. If the
              code has bugs or the app is unsafe, users can lose money.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Bitcoin vs Ethereum
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            How Ethereum Is Different From Bitcoin
          </h2>

          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.join("-")}
                      className={
                        index === 0
                          ? "bg-slate-950 text-white"
                          : "border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"
                      }
                    >
                      <td className="w-1/2 px-5 py-4 font-semibold">
                        {row[0]}
                      </td>
                      <td className="w-1/2 px-5 py-4 font-semibold">
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
            <div className="mb-3 flex items-center gap-3 text-blue-700 dark:text-blue-300">
              <FileText size={22} />
              <p className="m-0 text-sm font-semibold uppercase tracking-wide">
                Quick Summary
              </p>
            </div>

            <p className="m-0 text-sm leading-7 text-blue-900 dark:text-blue-100">
              Bitcoin and Ethereum are not the same thing. Bitcoin focuses more
              on digital money and scarcity. Ethereum focuses more on
              programmable applications and blockchain infrastructure.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            06 · What Ethereum Enables
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            What Can Be Built on Ethereum?
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {useCases.map((item) => {
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
            07 · Network Upgrade
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Was “The Merge”?
          </h2>

          <p>
            The Merge was a major Ethereum upgrade completed in 2022. It changed
            Ethereum from an older validation system to proof of stake. For
            beginners, the main idea is that Ethereum changed how the network is
            secured and how new blocks are confirmed.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <Zap className="mb-4 text-blue-600 dark:text-blue-300" size={26} />
              <h3 className="font-bold text-slate-950 dark:text-white">
                Before
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Ethereum used proof of work, where mining played the main role
                in network validation.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <ShieldCheck
                className="mb-4 text-emerald-600 dark:text-emerald-300"
                size={26}
              />
              <h3 className="font-bold text-slate-950 dark:text-white">
                After
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Ethereum now uses proof of stake, where validators help secure
                the network.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            08 · Risks
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Risks Beginners Should Understand
          </h2>

          <div className="space-y-3">
            {risks.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <AlertTriangle
                  size={20}
                  className="mt-1 shrink-0 text-amber-500"
                />
                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            09 · Glossary
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Ethereum Terms Beginners Should Know
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {glossary.map((item) => (
              <div
                key={item.term}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="font-bold text-slate-950 dark:text-white">
                  {item.term}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            10 · Checklist
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Ethereum Learning Checklist
          </h2>

          <div className="space-y-3">
            {checklist.map((item) => (
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

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            11 · FAQs
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Beginner FAQs About Ethereum
          </h2>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="font-bold text-slate-950 dark:text-white">
                  {item.question}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 p-8 text-white">
          <div className="mb-4 flex items-center gap-3 text-emerald-300">
            <ShieldCheck size={24} />
            <p className="m-0 text-sm font-semibold uppercase tracking-wide">
              Final Reminder
            </p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-white">
            Ethereum Is Infrastructure, Not Just a Price Chart
          </h2>

          <p className="leading-7 text-slate-300">
            Ethereum matters because it introduced programmable blockchain
            technology to a wider audience. It supports smart contracts,
            decentralized apps, ETH transactions, and many parts of the crypto
            ecosystem. For beginners, the goal is to understand how it works
            before making any decisions around it.
          </p>

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
            <AlertTriangle
              size={20}
              className="mt-1 shrink-0 text-amber-300"
            />
            <p className="m-0 text-sm leading-7 text-amber-100">
              Educational content only. Not financial advice. Always do your own
              research and make responsible decisions.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}