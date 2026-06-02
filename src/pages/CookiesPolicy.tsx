import { Cookie, ShieldCheck } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";

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
      "Bassam Malik may use analytics and performance tools, such as Vercel Analytics and Vercel Speed Insights, to understand general website usage, page performance, loading speed, and visitor interaction patterns. These tools help improve the website experience.",
  },
  {
    title: "5. Third-Party Services",
    content:
      "Some third-party services connected to this website may use cookies or similar technologies. This may include analytics providers, embedded tools, social media platforms, or external services linked from the website.",
  },
  {
    title: "6. Managing Cookies",
    content:
      "You can manage, block, or delete cookies through your browser settings. Please note that disabling some cookies may affect how certain parts of the website function or display.",
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
        <section className="container-page">
          <article className="premium-card mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                <Cookie size={28} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
                  Website Policy
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Cookies Policy
                </h1>
              </div>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              This page explains how cookies and similar technologies may be used
              on Bassam Malik to improve functionality, performance, analytics,
              and the overall browsing experience.
            </p>

            <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-400/20 dark:bg-blue-500/10">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={22}
                  className="mt-1 shrink-0 text-blue-600 dark:text-blue-300"
                />

                <p className="leading-7 text-slate-700 dark:text-slate-300">
                  Bassam Malik is an educational website. Cookies and analytics
                  tools are used to understand performance, improve content, and
                  support a better user experience.
                </p>
              </div>
            </div>

            <div className="mt-10 divide-y divide-slate-200 dark:divide-white/10">
              {sections.map((section) => (
                <section key={section.title} className="py-7 first:pt-0">
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
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
        </section>
      </main>
    </AnimatedPage>
  );
}