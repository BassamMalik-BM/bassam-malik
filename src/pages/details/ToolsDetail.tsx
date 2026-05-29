import { Navigate, useParams } from 'react-router-dom';

import RiskManagementChecklist from '../tools/RiskManagementChecklist';
import TradingJournalTemplate from '../tools/TradingJournalTemplate';
import TradingMistakeAnalyzer from '../tools/TradingMistakeAnalyzer';
import DCAPlanner from '../tools/DCAPlanner';

export default function ToolsDetail() {
  const { slug } = useParams();

  if (slug === 'risk-management-checklist') return <RiskManagementChecklist />;
  if (slug === 'trading-journal-template') return <TradingJournalTemplate />;
  if (slug === 'trading-mistake-analyzer') return <TradingMistakeAnalyzer />;
  if (slug === 'dca-planner') return <DCAPlanner />;

  return <Navigate to="/tools" replace />;
}