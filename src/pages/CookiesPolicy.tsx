import AnimatedPage from "../components/AnimatedPage";
import Breadcrumbs from "../components/Breadcrumbs";

const sections = [
  {
    title: "1. Introduction",
    content:
      "This Cookies Policy explains how Bassam Malik uses cookies and similar technologies to improve website functionality, understand site performance, and provide a smoother browsing experience.",
  },
  {
    title: "2. What Are Cookies?",
    content:
      "Cookies are small text files stored on your device when you visit a website. They help websites remember basic information, improve usability, and understand how visitors interact with different pages.",
  },
  {
    title: "3. How We Use Cookies",
    content:
      "We may use cookies or similar technologies to support basic website functionality, remember preferences, improve page performance, analyze visitor behavior, and understand which educational resources are most useful.",
  },
  {
    title: "4. Analytics and Performance",
    content:
      "Bassam Malik may use analytics and performance tools, such as Vercel Analytics and Vercel Speed Insights, to understand general website usage, page performance, loading speed, and visitor interaction patterns.",
  },
  {
    title: "5. Third-Party Services",
    content:
      "Some third-party services connected to this website may use cookies or similar technologies. This may include analytics providers, embedded tools, social media platforms, or external services linked from the website.",
  },
  {
    title: "6. Managing Cookies",
    content:
      "You can manage, block, or delete cookies through your browser settings. Disabling some cookies may affect how certain parts of the website function or display.",
  },
  {
    title: "7. Updates to This Policy",
    content:
      "This Cookies Policy may be updated from time to time to reflect changes in website features, analytics tools, legal requirements, or user experience improvements.",
  },
  {
    title: "8. Contact",
    content:
      "If you have questions about this Cookies Policy, you can contact Bassam Malik through the contact page on this website.",
  },
];

export default function CookiesPolicy() {
  return (
    <AnimatedPage>
      <main className="section-padding bg-slate-50 text-slate-900 dark:bg-navy-950 dark:text-white">
        <div className="container-page">
          <Breadcrumbs />

          <article className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
              Website Policy
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Cookies Policy
            </h1>

            <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              This page explains how cookies and similar technologies may be used
              on Bassam Malik to improve functionality, performance, analytics,
              and the overall browsing experience.
            </p>

            <div className="premium-card mt-10 p-8 sm:p-10">
              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Bassam Malik is an educational website. Cookies and analytics
                tools are used to understand performance, improve content, and
                support a better user experience.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {sections.map((section) => (
                <section key={section.title} className="premium-card p-8">
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                    {section.title}
                  </h2>

                  <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-200">
              Last updated: June 2026. This policy is for general informational
              purposes and may be updated as the website grows.
            </div>
          </article>
        </div>
      </main>
    </AnimatedPage>
  );
}