import { useState } from "react";
import { ChevronDown, Clock, KeyRound, ShieldCheck, Smartphone, Wallet } from "lucide-react";

const comparisonRows = [
  {
    feature: "Internet connection",
    hotWallet: "Connected to the internet",
    coldWallet: "Kept offline by design",
  },
  {
    feature: "Convenience",
    hotWallet: "High, quick access",
    coldWallet: "Lower, requires extra steps",
  },
  {
    feature: "Security",
    hotWallet: "More exposed to online threats",
    coldWallet: "More resistant to remote attacks",
  },
  {
    feature: "Cost",
    hotWallet: "Usually free",
    coldWallet: "Hardware wallets usually cost money",
  },
  {
    feature: "Setup difficulty",
    hotWallet: "Generally simple",
    coldWallet: "Requires careful setup and backup planning",
  },
  {
    feature: "Best use case",
    hotWallet: "Smaller amounts, learning, active use",
    coldWallet: "Larger amounts, longer-term storage",
  },
  {
    feature: "Key control",
    hotWallet: "Varies by wallet or exchange",
    coldWallet: "Usually self-managed",
  },
  {
    feature: "Recovery phrase importance",
    hotWallet: "Critical",
    coldWallet: "Critical",
  },
];

const quickSummaryRows = [
  {
    category: "Convenience",
    hotWallet: "High",
    coldWallet: "Lower, requires additional steps",
  },
  {
    category: "Security",
    hotWallet: "Moderate, exposed to online risks",
    coldWallet: "Higher, offline storage",
  },
  {
    category: "Cost",
    hotWallet: "Usually free",
    coldWallet: "Hardware device may require purchase",
  },
  {
    category: "Learning curve",
    hotWallet: "More beginner-friendly",
    coldWallet: "Requires more setup knowledge",
  },
  {
    category: "Accessibility",
    hotWallet: "Immediate",
    coldWallet: "Less immediate",
  },
  {
    category: "Long-term storage",
    hotWallet: "Less suitable for large amounts",
    coldWallet: "Better suited for long-term storage",
  },
  {
    category: "Physical risk",
    hotWallet: "Lower physical device risk",
    coldWallet: "Device or paper backup can be lost",
  },
];

const mistakes = [
  {
    title: "Sharing recovery phrases",
    description:
      "No legitimate wallet provider, exchange, customer support team, or helpful stranger should ever ask for your recovery phrase. If someone asks for it, treat it as a scam.",
  },
  {
    title: "Storing recovery phrases online",
    description:
      "Saving your seed phrase in notes apps, cloud storage, screenshots, email drafts, or photo galleries can expose it to remote access risks.",
  },
  {
    title: "Falling for phishing scams",
    description:
      "Fake wallet websites, fake support messages, and urgent security alerts are common ways beginners lose access to their funds.",
  },
  {
    title: "Ignoring security updates",
    description:
      "Wallet software updates often include important security improvements. Ignoring them can leave your device or wallet exposed.",
  },
  {
    title: "Assuming wallets are risk-free",
    description:
      "Hot wallets face online risks. Cold wallets face physical and backup risks. No storage method removes responsibility from the user.",
  },
  {
    title: "Learning wallet security too late",
    description:
      "The best time to learn about wallet safety is before storing anything meaningful, not after a mistake has already happened.",
  },
];

const faqs = [
  {
    question: "What is the difference between a hot wallet and a cold wallet?",
    answer:
      "A hot wallet is connected to the internet, which makes it convenient and easy to access but more exposed to online security threats. A cold wallet stores private keys offline, making it more resistant to remote attacks but less convenient for quick transactions.",
  },
  {
    question: "Is a cold wallet safer than a hot wallet?",
    answer:
      "Cold wallets are generally safer against remote online threats because private keys are stored offline. However, they are not risk-free. If the device is lost, damaged, or the recovery phrase is not backed up safely, access can still be lost permanently.",
  },
  {
    question: "Do beginners need a cold wallet?",
    answer:
      "Not always. A beginner who is only learning with very small amounts may start with a carefully managed hot wallet. As the amount becomes more meaningful, learning about cold storage becomes more important.",
  },
  {
    question: "Can I use both a hot wallet and a cold wallet?",
    answer:
      "Yes. Many people use a hot wallet for smaller amounts and active use, while keeping larger or longer-term holdings in cold storage. The two wallet types can serve different purposes.",
  },
  {
    question: "What happens if I lose my recovery phrase?",
    answer:
      "If you lose your recovery phrase and also lose access to the wallet device or app, your cryptocurrency may be permanently unrecoverable. There is usually no bank, support team, or password reset option that can restore access.",
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

export default function HotWalletVsColdWallet() {
  return (
    <article className="premium-card mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
      <header>
        <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            Crypto Wallets
          </span>

          <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock size={16} /> 15 min read
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Hot Wallet vs Cold Wallet: Which Crypto Wallet Is Better for Beginners?
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Hot wallet vs cold wallet — what is the difference? This
          beginner-friendly guide explains both crypto storage options, their
          risks, and how to keep your crypto safer.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/hot-wallet-vs-cold-wallet/hero.png"
            alt="Hot wallet vs cold wallet comparison"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </header>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Where Do You Actually Keep Crypto?
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            When someone first learns about cryptocurrency, one of the earliest
            and most practical questions they face is simple: once you have
            crypto, where does it actually go?
          </p>

          <p>
            Unlike cash, which sits in a physical wallet, or money in a bank
            account that is managed by an institution, cryptocurrency works in a
            different way. There is no physical vault holding your Bitcoin and no
            bank branch protecting your private access.
          </p>

          <p>
            What exists instead is a system of digital keys that prove ownership.
            The way you manage those keys determines how secure your
            cryptocurrency actually is.
          </p>

          <p>
            This is where wallets come in, and specifically where the difference
            between hot wallets and cold wallets becomes one of the most
            important things a beginner can understand.
          </p>

          <p>
            These two terms describe two different approaches to storing
            cryptocurrency. Each has different trade-offs between convenience,
            accessibility, and security. Understanding those trade-offs before
            storing any meaningful amount of crypto is one of the most protective
            things a beginner can do.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <Wallet className="text-blue-600 dark:text-blue-300" size={26} />
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            What Is a Crypto Wallet?
          </h2>
        </div>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Before comparing hot and cold wallets, it is important to understand
            what a crypto wallet actually does. This is one of the most commonly
            misunderstood ideas in beginner crypto education.
          </p>

          <p>
            A crypto wallet does not store your cryptocurrency in the same way a
            physical wallet stores cash. Your cryptocurrency exists on the
            blockchain, which is the public distributed ledger that records
            transactions.
          </p>

          <p>
            What a crypto wallet stores is your access. More specifically, it
            stores or manages the cryptographic keys that prove you own certain
            assets on that blockchain.
          </p>

          <p>
            Every crypto wallet involves two related pieces of information. The
            first is a public key, which works somewhat like an account number.
            You can share it so others can send cryptocurrency to you.
          </p>

          <p>
            The second is a private key. This is much more sensitive. Your
            private key proves ownership and allows access to the cryptocurrency
            connected to that wallet. Anyone who has your private key can control
            the funds linked to it.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-400/20 dark:bg-blue-500/10">
          <div className="flex items-start gap-3">
            <KeyRound
              size={22}
              className="mt-1 shrink-0 text-blue-600 dark:text-blue-300"
            />

            <p className="leading-7 text-slate-700 dark:text-slate-300">
              Most wallets use a seed phrase, also called a recovery phrase. This
              is usually a sequence of 12 or 24 words. It is the master key to
              your wallet. If you lose it, access can be lost permanently. If
              someone else gets it, they can take control of the wallet.
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            In traditional banking, institutions provide safety nets such as
            fraud protection, password recovery, account support, and regulatory
            oversight. In crypto, those protections are much more limited.
          </p>

          <p>
            This means responsibility falls directly on the user. That is why
            wallet security should not be treated as an advanced topic. It is
            basic knowledge for anyone learning about cryptocurrency.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <Smartphone className="text-blue-600 dark:text-blue-300" size={26} />
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            What Is a Hot Wallet?
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/hot-wallet-vs-cold-wallet/crypto-wallet-app.png"
            alt="Crypto wallet app interface"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            A hot wallet is any cryptocurrency wallet that is connected to the
            internet. The word hot refers to that active internet connection.
            This connection is what makes hot wallets convenient, but it is also
            what exposes them to online threats.
          </p>

          <p>
            Hot wallets are usually software applications. They may be installed
            on your phone, your computer, or used through a browser extension.
            Exchange accounts can also function like hot wallets when the
            platform manages the keys for you.
          </p>

          <p>
            Examples include wallet apps, browser wallets, and exchange-held
            wallets. Each type has different details, especially around who
            controls the private keys, but they share the same core feature: they
            are connected to the internet.
          </p>

          <p>
            The primary appeal of a hot wallet is accessibility. You can access
            funds quickly, send or receive crypto more easily, and interact with
            platforms without extra hardware steps.
          </p>

          <p>
            For beginners who are learning with small amounts, hot wallets can be
            practical. They allow someone to understand how addresses,
            transactions, confirmations, and wallet apps work without immediately
            dealing with more advanced storage setups.
          </p>

          <p>
            However, convenience does not mean safety. Because hot wallets are
            online, they are more exposed to phishing, malware, fake websites,
            compromised devices, exchange issues, and other internet-based
            risks.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="font-bold text-slate-950 dark:text-white">
              Hot Wallet Advantages
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700 dark:text-slate-300">
              <li>Easy to access</li>
              <li>Usually beginner-friendly</li>
              <li>Often free to use</li>
              <li>Good for small learning amounts</li>
              <li>Useful for regular transactions</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="font-bold text-slate-950 dark:text-white">
              Hot Wallet Risks
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700 dark:text-slate-300">
              <li>More exposed to online threats</li>
              <li>Can be targeted by phishing scams</li>
              <li>Device security matters a lot</li>
              <li>Exchange wallets involve third-party risk</li>
              <li>Not ideal for large long-term storage</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-blue-600 dark:text-blue-300" size={26} />
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            What Is a Cold Wallet?
          </h2>
        </div>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            A cold wallet is any cryptocurrency storage method that is kept
            offline. The word cold refers to being disconnected from the
            internet, which is the source of its main security advantage.
          </p>

          <p>
            Because a cold wallet is not constantly connected to the internet,
            it cannot be accessed remotely in the same way an online wallet can.
            This makes cold storage much more resistant to remote hacking,
            malware, and platform-related online threats.
          </p>

          <p>
            The most common form of cold wallet is a hardware wallet. A hardware
            wallet is a small physical device that stores private keys offline.
            When a transaction is needed, the device is connected temporarily,
            the transaction is approved on the device, and then it can be
            disconnected again.
          </p>

          <p>
            The key point is that private keys are designed to remain protected
            inside the device. They are not supposed to be exposed directly to
            the internet during normal use.
          </p>

          <p>
            Another form of cold storage is a paper wallet, where keys are
            printed and stored physically. This is less common today because it
            introduces risks around physical damage, loss, and setup mistakes.
          </p>

          <p>
            Cold wallets are most commonly used for larger amounts of
            cryptocurrency that are not needed for frequent transactions. If
            someone intends to store crypto for a longer period and does not need
            regular access, cold storage may offer stronger protection.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="font-bold text-slate-950 dark:text-white">
              Cold Wallet Advantages
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700 dark:text-slate-300">
              <li>Private keys stay offline</li>
              <li>Stronger protection from remote threats</li>
              <li>Useful for long-term storage</li>
              <li>Less reliance on exchanges</li>
              <li>Full control when used properly</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="font-bold text-slate-950 dark:text-white">
              Cold Wallet Risks
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700 dark:text-slate-300">
              <li>Less convenient for quick transactions</li>
              <li>Hardware devices usually cost money</li>
              <li>Recovery phrase backup is critical</li>
              <li>Physical loss or damage is possible</li>
              <li>Setup requires more care</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Key Differences Between Hot Wallets and Cold Wallets
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          The difference is not simply that one wallet type is good and the other
          is bad. The real question is which tool matches the purpose, amount,
          access needs, and security habits of the person using it.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Feature
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Hot Wallet
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Cold Wallet
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-slate-200 last:border-0 dark:border-white/10"
                >
                  <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.hotWallet}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.coldWallet}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          This comparison shows that the choice is really about trade-offs. Hot
          wallets offer speed and convenience. Cold wallets offer stronger
          offline protection. Both require careful handling.
        </p>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Custodial vs Non-Custodial Wallets
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Another important wallet concept is the difference between custodial
            and non-custodial wallets. This matters because it determines who
            controls the private keys.
          </p>

          <p>
            A custodial wallet means a third party, often an exchange, controls
            the private keys on your behalf. This can feel easier for beginners
            because password resets and account access may be more familiar.
          </p>

          <p>
            The downside is that you are depending on that platform. If the
            exchange is hacked, freezes accounts, faces technical problems, or
            becomes insolvent, your access may be affected in ways that are
            outside your control.
          </p>

          <p>
            A non-custodial wallet means you control your own private keys or
            recovery phrase. This gives you more direct control, but it also
            means more personal responsibility. If you lose the recovery phrase,
            there may be no way to recover access.
          </p>

          <p>
            Beginners should not rush through this distinction. It is one of the
            most important differences in crypto storage because it determines
            whether you are trusting a platform or managing access yourself.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Common Beginner Wallet Mistakes
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          Understanding what not to do is just as important as understanding how
          wallets work. These are some of the most common mistakes beginners
          make when handling crypto wallets.
        </p>

        <div className="mt-6 grid gap-4">
          {mistakes.map((mistake) => (
            <div
              key={mistake.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <h3 className="font-bold text-slate-950 dark:text-white">
                {mistake.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {mistake.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Can Beginners Use Both?
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Many people who engage with crypto use both hot and cold wallets.
            This is because different wallets can serve different purposes.
          </p>

          <p>
            A hot wallet may be used for smaller amounts, regular access, and
            learning how transactions work. A cold wallet may be used for larger
            amounts that are not needed for frequent activity.
          </p>

          <p>
            This approach is not about making crypto storage complicated. It is
            about separating convenience from security. The funds that need quick
            access can be handled differently from the funds that need stronger
            protection.
          </p>

          <p>
            However, using both does not replace education. A beginner who uses a
            hot wallet carefully may be safer than someone who uses a cold wallet
            carelessly. The wallet type matters, but the user’s habits matter
            more.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Hot Wallet vs Cold Wallet: Quick Summary
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Category
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Hot Wallet
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Cold Wallet
                </th>
              </tr>
            </thead>

            <tbody>
              {quickSummaryRows.map((row) => (
                <tr
                  key={row.category}
                  className="border-b border-slate-200 last:border-0 dark:border-white/10"
                >
                  <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                    {row.category}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.hotWallet}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.coldWallet}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
          Conclusion: Security Starts With Understanding
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            The choice between a hot wallet and a cold wallet is one of the most
            practical decisions a beginner makes when learning about
            cryptocurrency storage.
          </p>

          <p>
            Hot wallets offer convenience and quick access, but they come with
            greater exposure to online threats. Cold wallets offer stronger
            protection against remote attacks, but they require more careful
            setup, physical security, and recovery phrase management.
          </p>

          <p>
            Neither option is perfect. The best storage method depends on how
            much you are storing, how often you need access, and how seriously
            you are willing to take security habits.
          </p>

          <p>
            What matters most is understanding the responsibility involved.
            Protect your recovery phrase. Be careful with links and wallet
            requests. Keep software updated. Verify websites before entering
            sensitive information. These habits are the foundation of safer
            crypto storage.
          </p>

          <p>
            Take time to understand this properly before storing anything
            meaningful. That effort is genuinely worthwhile.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-200">
          Educational content only. Not financial advice. Always do your own
          research and make responsible decisions.
        </div>
      </section>
    </article>
  );
}