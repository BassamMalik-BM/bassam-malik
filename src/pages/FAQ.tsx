import AnimatedPage from '../components/AnimatedPage';
import FAQItem from '../components/FAQItem';
import SectionHeader from '../components/SectionHeader';

const faqs = [
  { question: 'What is crypto spot trading?', answer: 'Crypto spot trading means buying and selling actual crypto assets directly in the market. The goal is to understand the asset, plan the decision, manage risk, and avoid products such as leverage or futures.' },
  { question: 'Is crypto trading risky?', answer: 'Yes. Crypto assets can be highly volatile, and prices can move quickly. Beginners should learn first, avoid emotional decisions, and never use money they cannot afford to lose.' },
  { question: 'Does this website provide financial advice?', answer: 'No. Bassam Malik provides educational content only. Nothing on this website should be treated as financial, investment, legal, or tax advice.' },
  { question: 'Is this suitable for beginners?', answer: 'Yes. The lessons are written in a beginner-friendly way and focus on basic market concepts, responsible planning, and clear explanations.' },
  { question: 'Why is risk management important?', answer: 'Risk management helps protect capital and reduce emotional decision-making. It encourages planning before buying, reviewing before selling, and avoiding oversized positions.' },
  { question: 'Do you teach futures or leverage trading?', answer: 'No. This website focuses only on spot trading education and uses buy and sell language, not futures or leverage concepts.' },
];

export default function FAQ() {
  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page max-w-4xl">
          <SectionHeader centered eyebrow="FAQ" title="Clear answers for beginner learners" description="Simple answers about spot trading, risk, education, and what this website does not promote." />
          <div className="grid gap-4">
            {faqs.map((faq) => <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />)}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
