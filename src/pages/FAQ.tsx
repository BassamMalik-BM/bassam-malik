import AnimatedPage from "../components/AnimatedPage";
import FAQItem from "../components/FAQItem";
import FAQPageSchema from "../schemas/FAQPageSchema";

const faqs = [
  {
    question: "What is Bassam Malik?",
    answer:
      "Bassam Malik is an educational website created to help beginner traders understand market concepts, risk management, chart analysis, trading psychology, and decision-making. The goal is to provide clear and practical learning resources rather than promote speculation or unrealistic expectations.",
  },
  {
    question: "Is this website suitable for beginners?",
    answer:
      "Yes. The content is designed specifically for beginners. Lessons focus on explaining concepts in simple language and breaking down complex topics into easier steps. Whether you are completely new to trading or looking to strengthen your foundation, the educational resources are intended to support your learning journey.",
  },
  {
    question: "Does this website provide financial advice?",
    answer:
      "No. All content on Bassam Malik is provided for educational purposes only. Nothing on this website should be considered financial advice, investment advice, legal advice, tax advice, or a recommendation to buy or sell any asset.",
  },
  {
    question: "Why is risk management important?",
    answer:
      "Risk management is one of the most important skills in trading. It helps protect capital, reduce emotional decision-making, and improve long-term consistency. Learning how much risk to take before entering a trade is often more important than finding the perfect trade setup.",
  },
  {
    question: "What is trading psychology?",
    answer:
      "Trading psychology refers to the emotions and mental habits that influence trading decisions. Fear, greed, impatience, overconfidence, and frustration can all affect performance. Developing discipline and emotional control can help traders make more rational decisions.",
  },
  {
    question: "Can beginners learn trading successfully?",
    answer:
      "Yes. Most successful traders started as beginners. However, learning takes time, patience, and consistent effort. Beginners should focus on education, risk management, and practice rather than trying to achieve quick results.",
  },
  {
    question: "How long does it take to learn trading?",
    answer:
      "There is no fixed timeline because every learner progresses at a different pace. Some people understand the basics within a few weeks, while developing experience and confidence may take months or even years. Continuous learning is a normal part of the process.",
  },
  {
    question: "What are trading calculators used for?",
    answer:
      "Trading calculators help estimate values such as position size, risk-to-reward ratios, profit scenarios, compound growth, percentage changes, liquidation estimates, staking rewards, and other planning scenarios. They are designed to support learning, planning, and risk awareness before making decisions.",
  },
  {
    question: "Why should I use a trading journal?",
    answer:
      "A trading journal helps track decisions, mistakes, emotions, and lessons learned. Reviewing past trades can help identify patterns, improve discipline, and support continuous improvement over time.",
  },
  {
    question: "Do I need a large amount of money to start learning trading?",
    answer:
      "No. Learning does not require a large account balance. Many beginners start by studying educational material, practicing with small amounts, or using demo environments. Understanding risk and developing skills is often more important than starting with a large amount of capital.",
  },
  {
    question: "What markets can these lessons apply to?",
    answer:
      "Many of the concepts discussed on this website, such as risk management, chart analysis, trading psychology, market structure, and journaling, can be useful across different financial markets. Bassam Malik places a strong focus on cryptocurrency education while also teaching broader trading principles.",
  },
  {
    question: "Can educational content guarantee profits?",
    answer:
      "No. No educational resource, strategy, indicator, calculator, or tool can guarantee profits. Markets are uncertain and involve risk. Education can improve understanding and decision-making, but outcomes will always depend on market conditions and individual decisions.",
  },
  {
    question: "What can I find in the Discover section?",
    answer:
      "The Discover section contains curated directories designed to help beginners compare useful resources such as cryptocurrency exchanges, books, and analysis websites. These areas are kept separate from educational articles so learners can clearly distinguish education from recommendations and resource comparisons.",
  },
  {
    question: "Where does Bassam Malik get its information?",
    answer:
      "Educational content is researched using official documentation, established market-data providers, regulatory sources, financial education websites, exchange documentation, and other reliable sources. You can view the main references used across the website on the Sources page.",
  },
  {
    question: "What is the goal of Bassam Malik?",
    answer:
      "The goal of Bassam Malik is to help beginner traders and cryptocurrency learners understand complex topics with more clarity, manage risk responsibly, build better habits, and make more informed decisions through educational content, calculators, tools, and curated resources.",
  },
];

export default function FAQ() {
  return (
    <>
      <FAQPageSchema faqs={faqs} />

      <AnimatedPage>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
              FAQ
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Clear answers to common questions about crypto and trading
              education, risk management, calculators, learning resources,
              and the purpose of Bassam Malik.
            </p>
          </div>

          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}