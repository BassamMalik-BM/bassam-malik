import AnalysisWebsiteCard from "../../components/discover/analysis-websites/AnalysisWebsiteCard";
import { analysisWebsites } from "../../data/discover/analysis-websites";

export default function DiscoverAnalysisWebsites() {
  return (
    <div className="space-y-12">
      {/* Page header */}
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Discover
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          Crypto Analysis Websites
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Explore charting, market-data, research, and analysis platforms based
          on usability, features, data quality, and beginner-friendliness.
        </p>
      </header>

      {/* Website list */}
      <section>
        <div className="space-y-6">
          {analysisWebsites.map((website) => (
            <AnalysisWebsiteCard
              key={website.slug}
              website={website}
            />
          ))}
        </div>
      </section>
    </div>
  );
}