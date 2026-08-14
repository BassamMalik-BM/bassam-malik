import type { ArticleData } from "../articleTypes";

export const howCryptoWalletsWork: ArticleData = {
  slug: "how-crypto-wallets-work",
  title: "How Crypto Wallets Work",
  description:
    "How crypto wallets work explained in plain English. Learn what public and private keys are, how transactions happen, and why crypto is not stored in a wallet.",
  heroImage: "/images/articles/wallets/how-crypto-wallet-works/hero.png",
    category: {
    title: "Wallets",
    slug: "wallets",
  },
  readingTime: "8 min read",
  updatedAt: "July 2026",
  relatedSlugs: [
    "hot-wallet-vs-cold-wallet",
    "custodial-vs-non-custodial-wallets",
    "what-is-a-seed-phrase",
  ],
  blocks: [
    {
      type: "section",
      id: "quick-summary",
      title: "Quick Summary",
      paragraphs: [],
      bullets: [
        "A crypto wallet works by generating and managing digital keys, not by physically storing cryptocurrency.",
        "Cryptocurrency always remains on the blockchain — the wallet holds the keys that provide access to it.",
        "A public key can be shared safely and is used to receive funds; a private key must stay secret and authorizes transactions.",
        "Sending crypto involves entering an address, signing the transaction, broadcasting it, network verification, and a balance update.",
        "Losing a device does not mean losing your crypto, as long as your wallet's recovery information is properly backed up.",
      ],
    },
    {
      type: "section",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "Many beginners picture a crypto wallet the same way they picture a physical wallet, a container that actually holds their coins inside it. This mental image feels natural, but it does not match how crypto wallets actually work, and clearing up this misunderstanding early makes the entire cryptocurrency ecosystem much easier to follow.",
        "It is a bit like assuming a house key contains your house. The key does not hold anything physically; it simply proves you have the right to access what is actually stored elsewhere. Crypto wallets work in a strikingly similar way, and once that clicks, a lot of the confusion around wallets tends to disappear.",
        "Once you understand what a wallet is actually doing behind the scenes, ideas like sending, receiving, and securing cryptocurrency start to make a lot more sense. This article walks through that process clearly, building on what you already know from the introductory article on crypto wallets.",
      ],
    },
    {
      type: "section",
      id: "quick-reminder-what-is-a-crypto-wallet",
      title: "A Quick Reminder: What Is a Crypto Wallet?",
      paragraphs: [
        "As a quick refresher, a crypto wallet is the tool people use to access and manage cryptocurrency that exists on the blockchain. It does not function like a physical container. Instead, it works with a different kind of information entirely, which is exactly what the rest of this article explains.",
      ],
    },
    {
      type: "section",
      id: "does-a-wallet-actually-store-crypto",
      title: "Does a Crypto Wallet Actually Store Cryptocurrency?",
      paragraphs: [
        "This is one of the most important ideas to understand clearly, since it changes how everything else about wallets makes sense.",
        "Cryptocurrency always remains on the blockchain. It never physically moves into your wallet app or device. What your wallet actually stores are digital keys, pieces of information that prove ownership and allow you to manage that cryptocurrency on the blockchain.",
        "Beginner Tip: Think of your crypto wallet as a secure digital keychain rather than a digital container for coins.",
        "A useful comparison is a safety deposit box at a bank. The box itself sits inside the bank's vault at all times. What you actually carry around is a key, which proves you have the right to open and use that box. Your wallet works the same way. The cryptocurrency stays on the blockchain, and your wallet simply holds the keys that give you access to it.",
      ],
    },
    {
  type: "section",
  id: "how-crypto-wallets-work",
  title: "How Crypto Wallets Work",

  paragraphs: [
    "At a high level, using a crypto wallet involves a fairly consistent sequence of steps.",
  ],

  media: {
    src: "/images/articles/wallets/how-crypto-wallet-works/how-crypto-wallets-work.png",
    alt: "Diagram showing a wallet holding public and private keys that connect to cryptocurrency stored on the blockchain",
    width: "full",
  },

  paragraphsAfterMedia: [
    "This overall flow stays fairly consistent across most wallets, even though the specific interface and features can vary depending on the type of wallet you use.",
  ],

  bullets: [
    "Creating a wallet: Setting up a new wallet, which generates a set of digital keys unique to you",
    "Generating digital keys: The wallet creates a public key and a private key, both explained further below",
    "Connecting to the blockchain: The wallet communicates with the blockchain to check balances and confirm transactions",
    "Viewing balances: The wallet displays how much cryptocurrency is associated with your keys, based on information pulled directly from the blockchain",
    "Sending cryptocurrency: The wallet uses your private key to authorize a transfer of value to another address",
    "Receiving cryptocurrency: The wallet generates an address that others can use to send cryptocurrency to you",
  ],
},
    {
      type: "section",
      id: "public-keys-and-private-keys",
      title: "Public Keys and Private Keys",
      paragraphs: [
        "Two pieces of information sit at the center of how every crypto wallet works.",
        "Definition: A crypto wallet works by generating and managing digital keys that allow you to access, send, receive, and manage cryptocurrency stored on the blockchain.",
        "A public key can be shared safely with others. It is used to generate the address people send cryptocurrency to, similar to sharing an account number so someone can deposit funds. A private key, on the other hand, is meant to stay completely secret. It proves ownership and is what actually authorizes a transaction to take place.",
        "Important: Your private key gives control over your cryptocurrency. It should never be shared with anyone.",
        "This article intentionally avoids explaining the mathematics and cryptography behind how these keys are generated, since the goal here is understanding their role and purpose, not the technical process behind them.",
      ],
    },
    {
      type: "section",
      id: "what-happens-when-you-send-cryptocurrency",
      title: "What Happens When You Send Cryptocurrency?",
      paragraphs: [
        "Sending cryptocurrency follows a fairly predictable sequence of steps, even though it happens quickly from a user's perspective.",
        "None of this requires you to understand the technical details behind signatures or network verification. Your wallet handles these steps automatically once you approve a transaction.",
      ],
      bullets: [
        "Entering the recipient's address: You provide the address associated with the person or wallet you are sending cryptocurrency to",
        "Signing the transaction: Your wallet uses your private key to create a digital signature, proving that you authorized the transaction",
        "Broadcasting it to the blockchain: The signed transaction is sent out to the network for processing",
        "Network verification: Computers on the network confirm that the transaction is valid and that you actually have the funds you are sending",
        "Balance updates: Once confirmed, the blockchain's record updates to reflect that the funds now belong to the recipient's address",
      ],
    },
    {
      type: "section",
      id: "what-happens-when-you-receive-cryptocurrency",
      title: "What Happens When You Receive Cryptocurrency?",
      paragraphs: [
        "Receiving cryptocurrency involves a similar process, just from the other side of the transaction.",
        "When someone sends cryptocurrency to your wallet address, they are really sending it to a specific location on the blockchain associated with your public key. Once the network verifies and confirms that transaction, the blockchain's shared record updates to show that the cryptocurrency now belongs to your address. Your wallet then reflects this by displaying the updated balance, even though nothing has physically moved into the wallet app itself.",
      ],
    },
    {
      type: "section",
      id: "why-wallet-security-matters",
      title: "Why Wallet Security Matters",
      paragraphs: [
        "Since your private key is what actually controls your cryptocurrency, protecting it is essential.",
        "If someone else gains access to your private key, they gain the same ability to authorize transactions that you have, regardless of who technically \"owns\" the wallet app or device. This is part of why crypto transactions place so much emphasis on personal responsibility. Unlike a bank, there is generally no company able to reverse a transaction or restore access if your private key is compromised.",
        "This dynamic is exactly why the earlier keychain comparison matters so much in practice. Just as you would not hand a stranger the key to your safety deposit box, sharing or exposing your private key hands over the same level of control someone would need to move your funds without your involvement.",
        "This article intentionally keeps this explanation at a high level. Specific practices for protecting your private key and recovery information are covered in the dedicated article \"Keeping Crypto Safe.\"",
      ],
    },
    {
      type: "section",
      id: "common-wallet-misconceptions",
      title: "Common Wallet Misconceptions",
      paragraphs: [
        "A handful of misunderstandings about how wallets work come up repeatedly among beginners.",
        "Common Mistake: Many beginners believe deleting a wallet app deletes their cryptocurrency. In reality, the cryptocurrency remains on the blockchain, and access depends on the wallet's recovery information.",
      ],
      bullets: [
        "Cryptocurrency is not stored inside the wallet. It remains on the blockchain at all times, while the wallet stores the keys that provide access to it",
        "Wallets do not hold coins like a bank account holds cash. A bank account reflects an actual balance held by the bank, while a wallet simply provides access to a balance recorded on the blockchain",
        "Knowing someone's wallet address does not allow you to spend their crypto. An address is derived from a public key, which only allows others to send funds to it, not withdraw funds from it",
        "Wallets are not limited to a single blockchain. Many wallets support multiple different blockchains and cryptocurrencies, depending on how they are built",
        "Losing your phone does not automatically mean losing your crypto. As long as you have properly backed up your wallet's recovery information, access can typically be restored on a new device",
      ],
    },
    {
      type: "section",
      id: "what-should-you-learn-next",
      title: "What Should You Learn Next?",
      paragraphs: [
        "This article was designed to explain how crypto wallets work at a conceptual level. From here, a natural next step is one of the following:",
      ],
      bullets: [
        "Hot Wallet vs Cold Wallet — compares wallets connected to the internet with those kept offline",
        "Custodial vs Non-Custodial Wallets — explores the difference between managing your own keys and relying on a third party",
        "Hardware Wallets Explained — takes a closer look at physical devices designed for secure storage",
        "What Is a Seed Phrase? — explains the backup phrase used to recover wallet access",
        "What Is a Crypto Address? — explains how addresses are generated and used",
        "Keeping Crypto Safe — covers practical steps for protecting your wallet and your funds",
      ],
    },
    {
      type: "section",
      id: "conclusion",
      title: "Conclusion",
      paragraphs: [
        "Crypto wallets work by generating and managing digital keys, not by physically storing cryptocurrency. The cryptocurrency itself always remains on the blockchain, while your wallet holds the public and private keys that let you view balances, send funds, and receive transactions.",
        "Understanding this distinction clearly changes how you think about the rest of the crypto ecosystem, from why wallet security matters so much to why losing a device does not necessarily mean losing your funds. Building this foundation now will make the more specific wallet topics ahead far easier to understand.",
      ],
    },

  ],
  faqs: [
    {
      question: "Does a crypto wallet need an internet connection to work?",
      answer:
        "Many wallets require an internet connection to check balances and broadcast transactions, though some wallet types are designed to stay offline for added security.",
    },
    {
      question: "Can I use the same wallet to hold different types of cryptocurrency?",
      answer:
        "Many wallets support multiple cryptocurrencies, though this depends on the specific wallet and which blockchains it is built to support.",
    },
    {
      question: "What actually changes on the blockchain when I send cryptocurrency?",
      answer:
        "The blockchain's shared record updates to reflect that the funds are now associated with the recipient's address instead of yours.",
    },
    {
      question: "Is a wallet address the same as a private key?",
      answer:
        "No. A wallet address is derived from your public key and can be shared safely, while your private key must remain completely secret.",
    },
    {
      question: "Can two different wallets access the same cryptocurrency?",
      answer:
        "Yes, if both wallets are set up using the same private key or recovery information, since access depends on the keys rather than the specific wallet app.",
    },
    {
      question: "Why does a transaction need to be verified by the network?",
      answer:
        "Verification confirms that a transaction is valid and that the sender actually has the funds being sent, which helps maintain the accuracy of the blockchain's shared record.",
    },
    {
      question: "Does my wallet balance update instantly?",
      answer:
        "Balances typically update once a transaction has been confirmed by the network, which can take anywhere from seconds to several minutes depending on the blockchain.",
    },
    {
      question: "Is it possible to recover a wallet without the original device?",
      answer:
        "Yes, provided you have properly backed up the wallet's recovery information, which allows access to be restored on a different device.",
    },
  ],

};