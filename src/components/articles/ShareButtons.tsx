import { Share2, ArrowUp } from "lucide-react";

export default function ShareButtons() {
  const shareArticle = async () => {
    const shareData = {
      title: document.title,
      text: document.title,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Article link copied to clipboard.");
      }
    } catch {
      // User cancelled
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="rounded-3xl border border-slate-200/70 bg-white/40 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-navy-900/40">
      <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
        Share
      </h3>

      <div className="mt-5 space-y-2">
        <button
          onClick={shareArticle}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
        >
          <Share2 size={17} />
          Share article
        </button>

        <button
          onClick={backToTop}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
        >
          <ArrowUp size={17} />
          Back to top
        </button>
      </div>
    </section>
  );
}