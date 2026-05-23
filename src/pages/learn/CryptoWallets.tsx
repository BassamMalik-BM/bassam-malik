import {
  AlertTriangle,
  CheckCircle,
  Clock,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Tag,
  Wallet,
} from "lucide-react";

const walletTypes = [
  {
    title: "Software Wallet",
    text: "An app on your phone or computer. Easy to use, but connected to the internet, so security matters.",
    icon: Smartphone,
  },
  {
    title: "Hardware Wallet",
    text: "A physical device that keeps private keys offline. Useful for stronger security and long-term storage.",
    icon: LockKeyhole,
  },
  {
    title: "Custodial Wallet",
    text: "An exchange wallet where the platform controls the keys. Convenient, but not true self-custody.",
    icon: Wallet,
  },
];

const safetyTips = [
  "Never share your seed phrase with anyone.",
  "Do not save your seed phrase in screenshots, email, or cloud notes.",
  "Always download wallets from official sources.",
  "Check wallet addresses carefully before sending.",
  "Test with a small transaction first.",
  "Use stronger security for larger holdings.",
];

export default function CryptoWalletsBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Crypto Basics
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 9 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        How Crypto Wallets Work
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Wallets • Security • Self-Custody
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        A crypto wallet does not actually store your coins. Your crypto exists
        on the blockchain. The wallet stores the keys that allow you to access
        and move those funds.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · Big Misconception
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Wallets Do Not Store Crypto
          </h2>

          <p>
            Many beginners think crypto is stored inside a wallet app, but that
            is not exactly true. Your coins stay recorded on the blockchain.
            Your wallet simply gives you access to them.
          </p>

          <p className="mt-4">
            Think of the blockchain like a public record, and your wallet like a
            keychain. The keychain does not hold the money — it holds the keys
            that prove you can control it.
          </p>
        </section>

        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
          <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
            “Your wallet is not a container. It is your access system.”
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Public and Private Keys
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            The Two Keys You Need to Understand
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-500/20 dark:bg-emerald-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-600 dark:bg-black/10 dark:text-emerald-300">
                <KeyRound size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Public Address
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                This is like your receiving address. You can share it with
                someone who wants to send you crypto.
              </p>
            </div>

            <div className="rounded-3xl border border-red-200 bg-red-50 p-6 dark:border-red-500/20 dark:bg-red-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-red-600 dark:bg-black/10 dark:text-red-300">
                <LockKeyhole size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Private Key
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                This proves ownership. Never share it. Anyone with your private
                key can control your funds.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · Seed Phrase
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Your Seed Phrase Is the Master Backup
          </h2>

          <p>
            Most wallets give you a seed phrase, usually 12 or 24 words. This
            phrase can recover your wallet if your phone, laptop, or hardware
            wallet is lost.
          </p>

          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-500/20 dark:bg-amber-500/10">
            <div className="mb-3 flex items-center gap-3 text-amber-700 dark:text-amber-300">
              <AlertTriangle size={24} />
              <p className="m-0 text-sm font-semibold uppercase tracking-wide">
                Important Rule
              </p>
            </div>

            <p className="m-0 text-slate-700 dark:text-slate-300">
              Your seed phrase is extremely sensitive. Never screenshot it,
              never store it online, and never give it to anyone.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Transaction Basics
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Happens When You Send Crypto?
          </h2>

          <div className="space-y-4">
            {[
              "You enter the receiving address and amount.",
              "Your wallet creates a transaction request.",
              "Your private key signs the transaction.",
              "The signed transaction is sent to the blockchain network.",
              "Validators or miners confirm it.",
              "The blockchain updates ownership records.",
            ].map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Wallet Types
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Common Types of Crypto Wallets
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {walletTypes.map((wallet) => {
              const Icon = wallet.icon;

              return (
                <div
                  key={wallet.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-bold text-slate-950 dark:text-white">
                    {wallet.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {wallet.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            06 · Hot vs Cold
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Hot Wallets vs Cold Wallets
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-500/20 dark:bg-amber-500/10">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Hot Wallet
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Connected to the internet. Easier for daily use, but exposed to
                more online risks.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-500/20 dark:bg-emerald-500/10">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Cold Wallet
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Stored offline. Less convenient, but generally stronger for
                long-term storage and larger holdings.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            07 · Safety
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Wallet Safety Tips for Beginners
          </h2>

          <div className="space-y-3">
            {safetyTips.map((tip) => (
              <div
                key={tip}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <CheckCircle
                  size={20}
                  className="mt-1 shrink-0 text-emerald-500"
                />
                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 p-8 text-white">
          <div className="mb-4 flex items-center gap-3 text-emerald-300">
            <ShieldCheck size={24} />
            <p className="m-0 text-sm font-semibold uppercase tracking-wide">
              Final Takeaway
            </p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-white">
            Your Keys, Your Responsibility
          </h2>

          <p className="leading-7 text-slate-300">
            A crypto wallet is your access point to the blockchain. If you
            understand public addresses, private keys, seed phrases, and wallet
            security, you are already ahead of many beginners.
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
            <p className="m-0 text-sm leading-7 text-slate-300">
              Not your keys, not your coins. Your keys, your responsibility.
              Learn slowly, stay careful, and never rush wallet security.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}