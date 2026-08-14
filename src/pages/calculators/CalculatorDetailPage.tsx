import { Navigate, useParams } from "react-router-dom";

import { getCalculatorBySlug } from "../../data/calculators";

import PositionSizeCalculator from "../../calculators/PositionSizeCalculator";
import RiskRewardCalculator from "../../calculators/RiskRewardCalculator";
import ProfitLossCalculator from "../../calculators/ProfitLossCalculator";
import DCACalculator from "../../calculators/DCACalculator";
import CompoundingCalculator from "../../calculators/CompoundingCalculator";
import PercentageCalculator from "../../calculators/PercentageCalculator";
import LiquidationCalculator from "../../calculators/LiquidationCalculator";
import StakingCalculator from "../../calculators/StakingCalculator";
import MiningCalculator from "../../calculators/MiningCalculator";

const calculatorComponents = {
  "position-size": PositionSizeCalculator,
  "risk-reward": RiskRewardCalculator,
  "profit-loss": ProfitLossCalculator,
  dca: DCACalculator,
  compounding: CompoundingCalculator,
  percentage: PercentageCalculator,
  liquidation: LiquidationCalculator,
  staking: StakingCalculator,
  mining: MiningCalculator,
};

export default function CalculatorDetailPage() {
  const { slug } = useParams();

  const calculator = getCalculatorBySlug(slug);

  if (!calculator || !slug) {
    return <Navigate to="/calculators" replace />;
  }

  const CalculatorComponent =
    calculatorComponents[
      slug as keyof typeof calculatorComponents
    ];

  if (!CalculatorComponent) {
    return <Navigate to="/calculators" replace />;
  }

  return <CalculatorComponent />;
}