import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import FAQSchema from "../../schemas/FAQSchema";

const keyDifferenceRows = [
  {
    feature: "Primary purpose",
    bitcoin: "Decentralised digital currency and store of value",
    ethereum: "Programmable blockchain platform for smart contracts and applications",
  },
  {
    feature: "Founder",
    bitcoin: "Satoshi Nakamoto, anonymous",
    ethereum: "Vitalik Buterin",
  },
  {
    feature: "Launch year",
    bitcoin: "2009",
    ethereum: "2015",
  },
  {
    feature: "Supply structure",
    bitcoin: "Fixed maximum supply of 21 million coins",
    ethereum: "No fixed maximum supply, different issuance model",
  },
  {
    feature: "Smart contracts",
    bitcoin: "Not a primary feature",
    ethereum: "Central to the platform's design and purpose",
  },
  {
    feature: "Network focus",
    bitcoin: "Secure, simple value transfer",
    ethereum: "Broad programmability and application development",
  },
  {
    feature: "Common use cases",
    bitcoin: "Digital currency and store of value",
    ethereum: "Decentralised applications, digital tokens, and smart contract execution",
  },
  {
    feature: "Consensus mechanism",
    bitcoin: "Proof of work",
    ethereum: "Proof of stake",
  },
];

const summaryRows = [
  {
    category: "Purpose",
    bitcoin: "Digital currency and store of value",
    ethereum: "Programmable blockchain platform",
  },
  {
    category: "Difficulty for beginners",
    bitcoin: "More straightforward concept",
    ethereum: "More complex, broader ecosystem",
  },
  {
    category: "Main focus",
    bitcoin: "Secure value transfer",
    ethereum: "Smart contracts and decentralised applications",
  },
  {
    category: "Ecosystem",
    bitcoin: "Focused and well-defined",
    ethereum: "Broad and continuously expanding",
  },
  {
    category: "Learning curve",
    bitcoin: "Shorter for foundational concepts",
    ethereum: "Longer, requires broader technical understanding",
  },
  {
    category: "Historical track record",
    bitcoin: "Longer, since 2009",
    ethereum: "Shorter, since 2015",
  },
  {
    category: "Supply",
    bitcoin: "Fixed maximum of 21 million",
    ethereum: "No fixed maximum",
  },
];

const learningPoints = [
  "Blockchain basics and distributed ledgers.",
  "Risk management before making financial decisions.",
  "Market volatility and emotional control.",
  "Research skills and source checking.",
  "Understanding projects before engaging with them.",
  "A long-term learning mindset.",
];

const misconceptions = [
  "Bitcoin and Ethereum are the same thing.",
  "Ethereum is simply another version of Bitcoin.",
  "Bigger cryptocurrencies are risk-free.",
  "Understanding a cryptocurrency is unnecessary before making decisions.",
  "Popularity guarantees future success.",
];

const faqs = [
  {
    question: "What is the main difference between Bitcoin and Ethereum?",
    answer:
      "The main difference is purpose. Bitcoin was created as a decentralised digital currency focused on value transfer. Ethereum was created as a programmable blockchain platform that allows developers to build smart contracts and decentralised applications.",
  },
  {
    question: "Is Bitcoin safer than Ethereum?",
    answer:
      "Neither Bitcoin nor Ethereum is safe in an absolute sense. Both are volatile assets and both carry real risk. Bitcoin has a longer track record and a simpler design, but that does not remove the risk involved.",
  },
  {
    question: "Why is Ethereum different from Bitcoin?",
    answer:
      "Ethereum is different because it was built to support programmability. Its smart contract functionality allows applications, digital tokens, and blockchain-based services to be built on top of it, while Bitcoin is mainly focused on secure decentralised value transfer.",
  },
  {
    question: "Can beginners learn about both Bitcoin and Ethereum?",
    answer:
      "Yes. Beginners can learn about both, and understanding both gives a much clearer picture of the crypto landscape. A practical learning path is to start with Bitcoin because its purpose is simpler, then move toward Ethereum once the basic concepts are clear.",
  },
  {
    question: "Which cryptocurrency should beginners learn about first?",
    answer:
      "Bitcoin is usually the most logical starting point for complete beginners because it has the longest history, the clearest purpose, and the most beginner-friendly foundation for understanding blockchain and cryptocurrency.",
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
        type="button"
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

export default function BitcoinVsEthereum() {
  return (
    <>
    <FAQSchema faqs={faqs} />
    <article className="premium-card mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
      <header>
        <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            Beginner Guide
          </span>

          <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock size={16} /> 13 min read
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Bitcoin vs Ethereum: Understanding the Key Differences for Beginners
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Bitcoin vs Ethereum — what is the difference? This beginner-friendly
          guide explains both cryptocurrencies, their purposes, strengths, and
          risks clearly.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/bitcoin-vs-ethereum/hero.png"
            alt="Bitcoin and Ethereum coins on a dark minimal surface"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </header>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Two Names Every Crypto Beginner Hears First
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            If you have spent any time learning about cryptocurrency, two names
            come up before almost anything else: Bitcoin and Ethereum.
          </p>

          <p>
            They are the most widely recognised cryptocurrencies in the world.
            They are discussed together so frequently that many beginners
            naturally assume they are essentially the same thing, or that
            Ethereum is simply a newer or cheaper version of Bitcoin.
          </p>

          <p>
            That assumption is understandable, but it is also one of the most
            common misconceptions in beginner crypto education.
          </p>

          <p>
            Bitcoin and Ethereum are genuinely different from each other in
            meaningful ways. They were created by different people, at different
            times, for different purposes.
          </p>

          <p>
            Understanding what each one actually is, and why they differ, is one
            of the most foundational things a beginner can learn.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          What Is Bitcoin?
        </h2>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/bitcoin-vs-ethereum/bitcoin.png"
            alt="Bitcoin coin on a dark reflective surface"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Bitcoin was introduced in 2009 through a whitepaper published by a
            person or group using the pseudonym Satoshi Nakamoto. The true
            identity of Bitcoin's creator has never been confirmed.
          </p>

          <p>
            Bitcoin was designed with a focused purpose: to create a form of
            digital money that could be sent and received anywhere in the world
            without needing a bank, government, or centralised institution to
            authorise the transaction.
          </p>

          <p>
            Bitcoin transactions are recorded on a public distributed ledger
            called a blockchain. Instead of being controlled by one organisation,
            this ledger is maintained by a global network of computers.
          </p>

          <p>
            One of Bitcoin's most discussed characteristics is its fixed maximum
            supply. Only twenty-one million Bitcoin will ever exist. This limit
            is written into the protocol itself.
          </p>

          <p>
            This fixed supply is part of why Bitcoin is sometimes described as
            digital gold. The comparison comes from the idea of scarcity, limited
            supply, and its role as a store-of-value asset in the crypto space.
          </p>

          <p>
            Bitcoin has also been operating continuously since 2009, making it
            the oldest functioning cryptocurrency. That longer history gives
            beginners a clearer starting point for understanding the broader
            crypto market.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          What Is Ethereum?
        </h2>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/bitcoin-vs-ethereum/ethereum.png"
            alt="Ethereum coin on a dark minimal background"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Ethereum was proposed in 2013 by Vitalik Buterin and officially
            launched in 2015. Buterin understood Bitcoin's importance, but he
            saw an opportunity to build a blockchain that could do more than
            transfer digital money.
          </p>

          <p>
            Where Bitcoin was designed mainly as a digital currency, Ethereum was
            designed as a programmable blockchain platform. This distinction is
            important.
          </p>

          <p>
            Ethereum introduced smart contracts as a central feature. A smart
            contract is a self-executing programme stored on the blockchain that
            runs automatically when certain conditions are met.
          </p>

          <p>
            A simple way to understand this is to think of a vending machine. You
            insert the correct amount, choose your item, and the machine executes
            the transaction automatically without needing a person to approve it.
          </p>

          <p>
            Because Ethereum allows developers to create smart contracts, it also
            allows them to build decentralised applications, often called dApps.
            These applications run on blockchain infrastructure rather than on a
            centralised server controlled by one company.
          </p>

          <p>
            This makes Ethereum more complex than Bitcoin. It is not just a
            single digital asset. It is also a platform that supports a broad
            ecosystem of applications, tokens, and blockchain-based services.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Key Differences Between Bitcoin and Ethereum
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          Bitcoin and Ethereum are often compared, but they were not built to do
          the exact same thing. The table below shows the main differences in a
          simple beginner-friendly way.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Feature
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Bitcoin
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Ethereum
                </th>
              </tr>
            </thead>

            <tbody>
              {keyDifferenceRows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-slate-200 last:border-0 dark:border-white/10"
                >
                  <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.bitcoin}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.ethereum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          This comparison shows that Bitcoin and Ethereum are not simply two
          versions of the same idea. They have different goals, different
          structures, and different roles in the crypto ecosystem.
        </p>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Bitcoin and Ethereum Are Often Compared
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Bitcoin and Ethereum are compared so often because they are the two
            most widely recognised cryptocurrencies. Most beginners hear these
            names before almost any other crypto asset.
          </p>

          <p>
            They also occupy important but different roles. Bitcoin is often used
            as a reference point for market confidence and digital scarcity.
            Ethereum is often used as a reference point for blockchain
            development and application-building.
          </p>

          <p>
            Learning about both gives beginners a stronger foundation. Bitcoin
            helps explain decentralised digital money. Ethereum helps explain how
            blockchain technology can be used for programmable applications.
          </p>

          <p>
            Once a beginner understands both, it becomes easier to evaluate other
            crypto projects with more clarity and less confusion.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Advantages and Challenges of Bitcoin
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Bitcoin's greatest strength as a learning subject is its clarity of
            purpose. It was built to support decentralised peer-to-peer value
            transfer, and that purpose is easier for beginners to understand than
            many other crypto concepts.
          </p>

          <p>
            Its fixed supply creates a clearly defined scarcity model. Its long
            operating history also means there is more educational content, more
            market data, and more public discussion available for Bitcoin than
            for any other cryptocurrency.
          </p>

          <p>
            However, Bitcoin still carries real challenges. Its price is highly
            volatile, and its recognition does not make it risk-free. People can
            still lose money if they engage with it emotionally, without
            research, or without a clear understanding of risk.
          </p>

          <p>
            Bitcoin is also less focused on broad programmability. Compared to
            Ethereum, it does not serve as the main platform for smart contracts
            and decentralised applications.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Advantages and Challenges of Ethereum
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Ethereum's programmability is its biggest distinguishing feature.
            The ability to build smart contracts on Ethereum has helped create a
            large ecosystem of applications, digital tokens, and blockchain-based
            projects.
          </p>

          <p>
            Its active developer community also makes Ethereum one of the most
            important platforms for learning about the broader potential of
            blockchain technology beyond simple value transfer.
          </p>

          <p>
            The challenge is that Ethereum is harder for many beginners to
            understand. Learning Ethereum involves more than learning about a
            cryptocurrency. It also involves smart contracts, dApps, token
            standards, and a constantly changing ecosystem.
          </p>

          <p>
            Ethereum has also experienced periods of congestion and high
            transaction fees during times of heavy network demand. Its ongoing
            development is a strength, but it also means beginners need to keep
            learning as the platform changes over time.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Common Beginner Misconceptions
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          Beginners often hear simplified claims about Bitcoin and Ethereum
          online. Some of those claims create confusion instead of clarity.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
          {misconceptions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Bitcoin and Ethereum are not the same thing. They are both
            cryptocurrencies, but they were created for different reasons and
            serve different roles.
          </p>

          <p>
            Ethereum is also not simply a newer version of Bitcoin. It was built
            as a programmable platform, not just as another digital currency.
          </p>

          <p>
            Another important misconception is that large cryptocurrencies are
            automatically safe. Recognition can make an asset more visible, but
            it does not remove volatility or financial risk.
          </p>

          <p>
            Beginners should also avoid the belief that popularity guarantees
            future success. Markets are uncertain, and responsible learning
            matters more than following what is popular online.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Bitcoin vs Ethereum: Quick Summary Comparison
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Category
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Bitcoin
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Ethereum
                </th>
              </tr>
            </thead>

            <tbody>
              {summaryRows.map((row) => (
                <tr
                  key={row.category}
                  className="border-b border-slate-200 last:border-0 dark:border-white/10"
                >
                  <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                    {row.category}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.bitcoin}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.ethereum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          What Should Beginners Focus on Learning?
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          Understanding Bitcoin and Ethereum is a valuable starting point, but it
          should be part of a broader learning process. Beginners should build
          their knowledge slowly and responsibly.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
          {learningPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Blockchain basics help beginners understand what a distributed ledger
            is, how transactions are verified, and why decentralisation matters.
          </p>

          <p>
            Risk management should come before any financial decision. Knowing
            what you can afford to lose and understanding what could go wrong are
            essential parts of responsible crypto education.
          </p>

          <p>
            Research skills are also important. The crypto space contains a lot
            of noise, promotion, and misinformation. Beginners should learn to
            check sources carefully before accepting claims.
          </p>

          <p>
            A long-term learning mindset matters because crypto changes quickly.
            Ethereum, especially, continues to evolve as its ecosystem develops.
          </p>
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
          Conclusion: Two Different Assets, One Important Foundation
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Bitcoin and Ethereum are both significant parts of the cryptocurrency
            landscape, but they are not the same thing and should not be treated
            as interchangeable.
          </p>

          <p>
            Bitcoin was built to be a decentralised digital currency with a fixed
            supply, focused on secure peer-to-peer value transfer. Ethereum was
            built to be a programmable blockchain platform, focused on enabling
            smart contracts and decentralised applications.
          </p>

          <p>
            Both have genuine strengths. Both face real challenges. And both
            carry risks that do not disappear simply because they are widely
            recognised.
          </p>

          <p>
            For beginners, the most valuable thing this comparison provides is
            clarity. Not pressure to choose one, but a clearer understanding of
            what each one is and why they differ.
          </p>

          <p>
            Start with Bitcoin. Understand what it is and why it was built. Then
            explore Ethereum with that foundation in place. Study both as topics
            worth understanding, and build your knowledge slowly and carefully.
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