import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-6xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
        Privacy Policy
      </p>

      <h1 className="text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">
        Privacy Policy
      </h1>

      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Last updated: 2026
      </p>

      <div className="premium-card mt-8 space-y-8 leading-8 text-slate-600 dark:text-slate-300">
        <Section title="1. Introduction">
          Bassam Malik Education respects the privacy of its visitors. This
          Privacy Policy explains the types of information that may be
          collected when you use the website, how that information may be
          used, and the steps taken to handle it responsibly. This policy
          applies to the educational content, tools, calculators, directories,
          contact features, and other services available through the website.
        </Section>

        <Section title="2. Information you voluntarily provide">
          We may collect information that you choose to provide directly to us.
          This can include your name, email address, subject, and message when
          you use the Contact page or another communication feature. You should
          avoid sending sensitive personal, financial, account, wallet,
          password, seed phrase, or private-key information through website
          forms.
        </Section>

        <Section title="3. Automatically collected information">
          Like many websites, Bassam Malik Education may receive limited
          technical information when you visit the site. This may include
          browser type, device type, operating system, general traffic source,
          pages viewed, approximate geographic region, loading performance, and
          other basic usage information. This information is generally used to
          understand website performance and improve the user experience.
        </Section>

        <Section title="4. How information may be used">
          Information may be used to respond to messages, maintain website
          functionality, understand which educational resources are useful,
          improve page performance, detect technical problems, enhance website
          design, and support the overall operation of Bassam Malik Education.
          We do not intend to use personal information for unrelated purposes.
        </Section>

        <Section title="5. Cookies and analytics">
          The website may use cookies, analytics tools, or similar technologies
          to understand general website activity and performance. This may
          include tools such as Vercel Analytics or Speed Insights. Cookies may
          also be used to remember basic preferences where necessary. More
          information about cookie usage is available in the Cookies Policy.
        </Section>

        <Section title="6. Affiliate and external links">
          Some pages may contain affiliate, referral, or external links to
          exchanges, booksellers, analysis websites, social platforms, or other
          third-party services. When you follow one of these links, the
          third-party website may collect information according to its own
          privacy policy. Bassam Malik Education does not control how external
          services collect, store, or use information.
        </Section>

        <Section title="7. Data sharing">
          We do not intend to sell personal information. Information may be
          processed by service providers that help operate the website, such as
          hosting, analytics, security, email, or form-processing providers.
          Information may also be disclosed when reasonably necessary to comply
          with applicable law, protect website security, or respond to a valid
          legal request.
        </Section>

        <Section title="8. Data retention">
          Personal information is retained only for as long as reasonably
          necessary for the purpose for which it was collected, including
          responding to communications, maintaining records, resolving
          technical issues, or meeting applicable legal requirements. The exact
          retention period may vary depending on the type of information and
          service involved.
        </Section>

        <Section title="9. Data security">
          Reasonable technical and organizational measures are used to protect
          information and maintain website security. However, no website,
          internet connection, database, or electronic communication method can
          guarantee complete security. Users should also take reasonable steps
          to protect their own devices and online accounts.
        </Section>

        <Section title="10. Third-party privacy practices">
          Third-party platforms linked from the website operate independently
          and may use cookies, tracking technologies, account information, or
          payment information according to their own policies. You should review
          the privacy policy and terms of any third-party platform before
          creating an account, purchasing a product, or providing personal
          information.
        </Section>

        <Section title="11. Your choices">
          You may control certain privacy preferences through your browser,
          including blocking or deleting cookies. You may also choose not to
          submit personal information through website forms. If you previously
          contacted us and would like to ask about information you provided,
          you may use the Contact page to make a request.
        </Section>

        <Section title="12. Children’s privacy">
          Bassam Malik Education is intended as a general educational website
          and is not designed to knowingly collect personal information from
          young children. If you believe personal information was submitted by
          a child inappropriately, you may contact us so the matter can be
          reviewed.
        </Section>

        <Section title="13. Changes to this policy">
          This Privacy Policy may be updated as the website introduces new
          features, analytics tools, communication methods, or operational
          practices. Any revised version will be published on this page with an
          updated date where appropriate.
        </Section>

        <Section title="14. Contact">
          If you have questions about this Privacy Policy, how information is
          handled, or a privacy-related concern regarding Bassam Malik
          Education, you may contact us through the Contact page.
        </Section>
      </div>
    </motion.article>
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
      <h2 className="text-xl font-bold text-slate-950 dark:text-white">
        {title}
      </h2>

      <p className="mt-2">{children}</p>
    </section>
  );
}