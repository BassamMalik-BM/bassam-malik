import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="section-padding">
      <div className="container-page">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            Privacy Policy
          </p>

          <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Last updated: 2026
          </p>

          <div className="premium-card mt-8 space-y-7 leading-7 text-slate-600 dark:text-slate-300">
            <Section title="1. Introduction">
              Bassam Malik Education respects your privacy. This Privacy Policy
              explains how information may be collected, used, and protected when
              you use this website.
            </Section>

            <Section title="2. Information we may collect">
              We may collect information you voluntarily provide through the contact
              form, such as your name, email address, subject, and message.
            </Section>

            <Section title="3. How information is used">
              Information may be used to respond to messages, improve website
              content, maintain website functionality, and provide a better user
              experience.
            </Section>

            <Section title="4. Cookies and analytics">
              This website may use basic cookies or analytics tools in the future to
              understand website performance and visitor behavior. You can control
              cookies through your browser settings.
            </Section>

            <Section title="5. Third-party links">
              This website may contain links to external platforms such as social
              media pages or crypto-related platforms. We are not responsible for the
              privacy practices of third-party websites.
            </Section>

            <Section title="6. Data security">
              Reasonable steps are taken to protect information, but no website can
              guarantee complete security over the internet.
            </Section>

            <Section title="7. Contact">
              If you have questions about this Privacy Policy, you may contact us
              through the Contact page.
            </Section>
          </div>
        </motion.article>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-2 text-xl font-bold text-slate-950 dark:text-white">
        {title}
      </h2>
      <p>{children}</p>
    </section>
  );
}