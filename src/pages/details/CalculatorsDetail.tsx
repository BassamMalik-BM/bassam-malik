import { Navigate, useParams } from 'react-router-dom';

import Calculator from '../calculators/Calculator';
import TradeSizeCalculator from '../calculators/TradeSizeCalculator';
import RiskRewardCalculator from '../calculators/RiskRewardCalculator';
import ProfitCalculator from '../calculators/ProfitCalculator';
import CompoundGrowthCalculator from '../calculators/CompoundGrowthCalculator';
import BreakEvenCalculator from '../calculators/BreakEvenCalculator';

export default function CalculatorsDetail() {
  const { slug } = useParams();

  if (slug === 'calculator') return <Calculator />;
  if (slug === 'trade-size') return <TradeSizeCalculator />;
  if (slug === 'risk-reward') return <RiskRewardCalculator />;
  if (slug === 'profit') return <ProfitCalculator />;
  if (slug === 'compound-growth') return <CompoundGrowthCalculator />;
  if (slug === 'break-even') return <BreakEvenCalculator />;

  return <Navigate to="/calculators" replace />;
}