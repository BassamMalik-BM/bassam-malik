import type { ReactNode } from "react";

type ArticleLayoutProps = {
  hero: ReactNode;
  rightSidebar?: ReactNode;
  children: ReactNode;
};

export default function ArticleLayout({
  hero,
  rightSidebar,
  children,
}: ArticleLayoutProps) {
  return (
    <section className="pb-20">
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_360px]">
        {/* ARTICLE CARD */}
        <main className="min-w-0">
          <article className="premium-card mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
            {hero}
            {children}
          </article>
        </main>

        {/* RIGHT SIDEBAR */}
        {rightSidebar && (
          <aside className="hidden xl:block">
            <div className="sticky top-28 space-y-6">{rightSidebar}</div>
          </aside>
        )}
      </div>
    </section>
  );
}