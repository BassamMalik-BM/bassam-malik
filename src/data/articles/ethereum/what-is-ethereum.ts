import type { ArticleData } from "../articleTypes";

export const whatIsEthereum: ArticleData = {
  slug: "what-is-ethereum",
  title: "What Is Ethereum?",
  description:
    "What is Ethereum explained in plain English. Learn what Ethereum and Ether actually are, what you can build on it, and why it matters.",
  heroImage: "/images/articles/ethereum/what-is-ethereum/hero.png",
    category: {
    title: "Ethereum",
    slug: "ethereum",
  },
  readingTime: "8 min read",
  updatedAt: "July 2026",
  relatedSlugs: [
    "why-ethereum-is-different",
    "how-ethereum-works",
    "what-are-smart-contracts",
  ],
  blocks: [
    {
      type: "section",
      id: "quick-summary",
      title: "Quick Summary",
      paragraphs: [],
      bullets: [
        "Ethereum is a decentralized blockchain platform that lets developers build and run smart contracts and decentralized applications.",
        "Ether (ETH) is the cryptocurrency that powers the Ethereum network — Ethereum is the platform, ETH is the currency.",
        "Ethereum's main purpose is supporting applications, not just transferring digital value.",
        "It supports smart contracts, dApps, DeFi, NFTs, DAOs, and Web3 applications.",
        "Ethereum's strengths are flexibility and its large developer ecosystem, but it also faces complexity, gas fees, and network congestion.",
      ],
    },
    {
      type: "section",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "Ethereum is one of the most important blockchain platforms in the world, yet many beginners assume it is simply another cryptocurrency, similar to Bitcoin but with a different name. That assumption misses what actually makes Ethereum significant.",
        "The confusion is understandable. Ethereum does have its own cryptocurrency, and it does get traded and discussed alongside Bitcoin constantly. But treating Ethereum as just another coin overlooks the part of it that developers, businesses, and creators actually find most valuable: the platform underneath.",
        "Understanding Ethereum clearly helps make sense of a much larger part of the blockchain ecosystem, since so many other technologies, applications, and ideas are built directly on top of it. This article focuses on giving you that foundational understanding before exploring anything more advanced.",
      ],
    },
    {
      type: "section",
      id: "what-is-ethereum",
      title: "What Is Ethereum?",
      paragraphs: [
        "Ethereum is best understood as a platform, not just a currency.",
        "Definition: Ethereum is a decentralized blockchain platform that allows developers to build and run smart contracts and decentralized applications. Ether (ETH) is the cryptocurrency that powers the network.",
        "In simple terms, Ethereum provides the underlying infrastructure that developers use to build applications directly on a blockchain, similar to how an operating system provides the foundation that apps run on. Like other blockchains, Ethereum is decentralized, meaning no single company or government controls it. Instead, a global network of computers maintains it together.",
      ],
    },
    {
      type: "section",
      id: "what-is-ether-eth",
      title: "What Is Ether (ETH)?",
      paragraphs: [
        "It helps to clearly separate two things that are often confused: Ethereum, the platform, and Ether, the cryptocurrency.",
        "Ethereum refers to the blockchain network itself, the underlying system that developers build on. Ether, often shortened to ETH, is the cryptocurrency native to that network. ETH exists because activity on Ethereum, such as using an application or interacting with a smart contract, requires a form of payment, and ETH is what fulfills that role.",
        "Beginner Tip: Remember that Ethereum is the blockchain platform, while ETH (Ether) is the cryptocurrency that helps the network operate.",
        "The specific mechanics behind how ETH is used to pay for network activity, often referred to as gas fees, are covered in more detail in the dedicated article \"Ethereum Gas Fees Explained.\"",
      ],
    },
    {
      type: "section",
      id: "ethereums-main-purpose",
      title: "Ethereum's Main Purpose",
      paragraphs: [
        "Ethereum was designed to serve as a platform for decentralized applications, rather than functioning only as a way to transfer digital value.",
        "This distinction is central to understanding what makes Ethereum different from a cryptocurrency built purely for payments. Ethereum's core purpose is to let developers build and run applications directly on a blockchain, using tools like smart contracts, which are covered in their own dedicated articles. The full story behind why Ethereum was built this way, and the reasoning behind its design, is explored further in the article \"Why Ethereum Is Different.\"",
      ],
    },
{
  type: "section",
  id: "what-can-you-build-on-ethereum",
  title: "What Can You Build on Ethereum?",

  paragraphs: [
    "Ethereum supports a wide range of applications and technologies, each of which deserves a much deeper explanation elsewhere.",
  ],

  media: {
    src: "/images/articles/ethereum/what-is-ethereum/what-can-you-build-on-ethereum.png",
    alt: "Diagram showing Ethereum as a platform with smart contracts, dApps, DeFi, NFTs, DAOs, and Web3 applications built on top",
    width: "full",
  },

  paragraphsAfterMedia: [
    "Each of these topics has its own dedicated article further along in this learning path, since a full explanation of any one of them goes well beyond what fits into an introduction to Ethereum itself.",
  ],

  bullets: [
    "Smart contracts: Pieces of code stored on the blockchain that automatically carry out an agreement when specific conditions are met",
    "Decentralized applications (dApps): Applications built on Ethereum that run without being controlled by a single company",
    "DeFi: Short for decentralized finance, referring to financial applications, such as lending or trading platforms, built directly on Ethereum",
    "NFTs: Unique digital records often used to represent ownership of digital art, collectibles, or other items",
    "DAOs: Short for decentralized autonomous organizations, groups that make collective decisions using blockchain-based voting",
    "Web3 applications: A broader category of applications built around the idea of a more decentralized internet",
  ],
},
    {
      type: "section",
      id: "why-ethereum-matters",
      title: "Why Ethereum Matters",
      paragraphs: [
        "Ethereum matters because it has become the foundation for a huge portion of blockchain-based innovation, well beyond simple payments.",
        "Developers rely on Ethereum to build new applications without needing to create an entirely new blockchain from scratch. Businesses have explored using Ethereum for everything from supply chain tracking to digital ownership records. Creators have used it to represent and sell unique digital items. Everyday users interact with Ethereum, often without realizing it, whenever they use an application built on top of it.",
        "This wide range of use cases is exactly why Ethereum tends to come up in conversations that go well beyond cryptocurrency trading. Its role as infrastructure, rather than just an asset to buy or sell, is what has made it central to so much of the broader blockchain industry.",
        "Important: Ethereum's biggest strength is not simply its cryptocurrency. It is the blockchain platform that enables developers to build decentralized applications and services.",
      ],
    },
    {
      type: "section",
      id: "advantages-of-ethereum",
      title: "Advantages of Ethereum",
      paragraphs: [
        "Ethereum's design offers a number of genuine strengths that help explain its widespread use.",
      ],
      bullets: [
        "Flexibility: Its platform design allows developers to build a wide variety of applications, not just handle payments",
        "Large ecosystem: Ethereum hosts one of the largest collections of applications and projects in the blockchain space",
        "Open-source development: Ethereum's code is publicly available, allowing anyone to inspect, build on, or contribute to it",
        "Strong developer community: A large, active community of developers continues to build and improve applications on Ethereum",
        "Continuous innovation: Ethereum has continued to evolve over time, adapting to new ideas and challenges within the blockchain space",
      ],
    },
    {
      type: "section",
      id: "limitations-of-ethereum",
      title: "Limitations of Ethereum",
      paragraphs: [
        "Ethereum's flexibility also comes with real challenges worth understanding at a basic level.",
        "Each of these limitations is introduced here only briefly, since they are explored in much greater depth in their own dedicated articles.",
      ],
      bullets: [
        "Complexity for beginners: Ethereum's broader capabilities can make it more difficult to understand initially compared to simpler blockchain networks",
        "Gas fees: Using Ethereum requires paying fees in ETH, which can vary depending on network activity, a topic covered in its own dedicated article",
        "Network congestion: During periods of high demand, Ethereum's network can become slower and more expensive to use",
        "Competition from other blockchain platforms: Several other blockchain networks have emerged offering similar capabilities, creating a competitive landscape",
      ],
    },
    {
      type: "section",
      id: "common-ethereum-misconceptions",
      title: "Common Ethereum Misconceptions",
      paragraphs: [
        "A handful of misunderstandings about Ethereum come up frequently among beginners.",
        "Common Mistake: Many beginners use the terms Ethereum and Ether interchangeably. While closely related, they are not the same thing.",
      ],
      bullets: [
        "Ethereum is not just another cryptocurrency. It is a blockchain platform that supports an entire ecosystem of applications, not simply a currency competing with others",
        "Ethereum and Ether are not the same thing. Ethereum is the platform, while Ether (ETH) is the cryptocurrency that powers it",
        "Ethereum is not only used to send money. While ETH can be sent like a currency, Ethereum's core purpose centers on supporting applications and smart contracts",
        "Ethereum is not only for developers. While building on Ethereum requires technical skill, using applications built on it does not require any coding knowledge",
        "Ethereum does not guarantee profits. No cryptocurrency or platform guarantees financial returns, and Ethereum is no exception",
      ],
    },
    {
      type: "section",
      id: "what-should-you-learn-next",
      title: "What Should You Learn Next?",
      paragraphs: [
        "This article was designed to introduce Ethereum as a concept, not to cover every technical detail or application built on top of it. From here, a natural next step is one of the following:",
      ],
      bullets: [
        "Why Ethereum Is Different — explores the reasoning and history behind Ethereum's design",
        "How Ethereum Works — goes deeper into the technical process behind the network",
        "Ethereum Gas Fees Explained — explains how fees work when using Ethereum",
        "Ethereum Staking Explained — covers how Ethereum's network is maintained and secured",
        "What Are Smart Contracts? — a closer look at the self-executing code that powers many Ethereum applications",
        "What Is Web3? — explores the broader vision of a more decentralized internet",
        "What Is DeFi? — explores decentralized financial applications in more depth",
        "Is Ethereum Better Than Bitcoin? — compares Ethereum with Bitcoin in more detail",
      ],
    },
    {
      type: "section",
      id: "conclusion",
      title: "Conclusion",
      paragraphs: [
        "Ethereum is a decentralized blockchain platform that allows developers to build and run smart contracts and decentralized applications, with Ether (ETH) serving as the cryptocurrency that powers the network. Its purpose goes well beyond simple payments, supporting an entire ecosystem of applications, from DeFi to NFTs to Web3.",
        "Understanding Ethereum as a platform, rather than just another cryptocurrency, is the most important foundation for exploring everything else built on top of it. This distinction will make the more specific topics ahead, from gas fees to smart contracts, far easier to understand in context.",
      ],
    },

  ],
  faqs: [
    {
      question: "Is Ethereum a type of cryptocurrency?",
      answer:
        "Ethereum itself is a blockchain platform. Ether (ETH) is the cryptocurrency associated with it, used to pay for activity on the network.",
    },
    {
      question: "Can I use Ethereum without understanding how to code?",
      answer:
        "Yes. Using applications built on Ethereum does not require any coding knowledge, even though building those applications does.",
    },
    {
      question: "Is Ethereum owned by a single company?",
      answer:
        "No. Ethereum is decentralized, meaning it is maintained by a global network of independent participants rather than a single company.",
    },
    {
      question: "Why is Ethereum associated with so many different applications?",
      answer:
        "Because Ethereum was designed as a flexible platform for building applications, rather than a system focused only on transferring currency.",
    },
    {
      question: "Do I need to own ETH to use every Ethereum application?",
      answer:
        "Many applications built on Ethereum require ETH to pay for network activity, though the exact requirements vary by application.",
    },
    {
      question: "Is Ethereum the same as an app or website?",
      answer:
        "No. Ethereum is the underlying blockchain platform, while specific apps and websites are built on top of it, similar to how apps are built on top of an operating system.",
    },
    {
      question: "How is Ethereum different from a blockchain built only for payments?",
      answer:
        "Ethereum supports smart contracts and applications in addition to payments, giving it broader functionality than a blockchain designed solely for currency.",
    },
    {
      question: "Is Ethereum still actively developed?",
      answer:
        "Yes. Ethereum continues to evolve through ongoing work from its developer community and the Ethereum Foundation.",
    },
  ],

};