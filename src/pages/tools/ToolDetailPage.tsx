import { Navigate, useParams } from "react-router-dom";

import { getToolBySlug } from "../../data/tools";

import TradingJournal from "../../tools/TradingJournal";
import PortfolioManager from "../../tools/PortfolioManager";
import Watchlist from "../../tools/Watchlist";
import TradingChecklist from "../../tools/TradingChecklist";
import RiskManagementChecklist from "../../tools/RiskManagementChecklist";
import SecurityChecklist from "../../tools/SecurityChecklist";
import InvestmentPlanner from "../../tools/InvestmentPlanner";
import TradePlanBuilder from "../../tools/TradePlanBuilder";

const toolComponents = {
  "trading-journal": TradingJournal,
  "portfolio-manager": PortfolioManager,
  watchlist: Watchlist,
  "trading-checklist": TradingChecklist,
  "risk-management-checklist": RiskManagementChecklist,
  "security-checklist": SecurityChecklist,
  "investment-planner": InvestmentPlanner,
  "trade-plan-builder": TradePlanBuilder,
};

export default function ToolDetailPage() {
  const { slug } = useParams();

  const tool = getToolBySlug(slug);

  if (!tool || !slug) {
    return <Navigate to="/tools" replace />;
  }

  const ToolComponent =
    toolComponents[slug as keyof typeof toolComponents];

  if (!ToolComponent) {
    return <Navigate to="/tools" replace />;
  }

  return <ToolComponent />;
}