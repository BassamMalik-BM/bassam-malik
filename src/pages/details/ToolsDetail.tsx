import { ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import Breadcrumbs from "../../components/Breadcrumbs";
import { tools } from "../../data/tools";

import RiskManagementChecklist from "../tools/RiskManagementChecklist";
import TradingJournalTemplate from "../tools/TradingJournalTemplate";
import TradingMistakeAnalyzer from "../tools/TradingMistakeAnalyzer";
import DCAPlanner from "../tools/DCAPlanner";
import TradeSetupAnalyzer from "../tools/TradeSetupAnalyzer";

export default function ToolsDetail() {
  const { slug } = useParams();

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) return <Navigate to="/tools" replace />;

  const relatedTools = tools
    .filter((item) => item.slug !== tool.slug)
    .slice(0, 5);

  return (
    <AnimatedPage>
      <section className="section-padding">
        <div className="container-page">
          <Breadcrumbs />

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              {tool.slug === "risk-management-checklist" ? (
                <RiskManagementChecklist />
              ) : tool.slug === "trading-journal-template" ? (
                <TradingJournalTemplate />
              ) : tool.slug === "trading-mistake-analyzer" ? (
                <TradingMistakeAnalyzer />
              ) : tool.slug === "dca-planner" ? (
                <DCAPlanner />
              ) : tool.slug === "trade-setup-analyzer" ? (
                <TradeSetupAnalyzer /> 
              ) : (
                <Navigate to="/tools" replace />
              )}
            </div>

            <aside>
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-navy-900">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  Related Tools
                </h3>

                <div className="mt-5 divide-y divide-slate-200 dark:divide-white/10">
                  {relatedTools.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/tools/${item.slug}`}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="text-sm font-semibold leading-6 text-slate-700 transition group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-300">
                        {item.title}
                      </span>

                      <ArrowRight
                        size={16}
                        className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}