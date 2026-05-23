import {
  Calculator,
  TrendingUp,
  Shield,
  BarChart3,
  Repeat,
  Percent,
  Plus,
} from 'lucide-react';

import type { CalculatorItem } from '../types';

export const calculators: CalculatorItem[] = [
  {
    title: 'Calculator',
    description:
      'Use a simple calculator for quick trading-related calculations.',
    path: '/calculators/calculator',
    icon: Calculator,
  },  
  {
    title: 'Trade Size Calculator',
    description:
      'Estimate trade size based on account balance, risk percentage, entry price, and stop level.',
    path: '/calculators/trade-size',
    icon: Shield,
  },
  {
    title: 'Risk / Reward Calculator',
    description:
      'Compare possible risk and reward before making a trading decision.',
    path: '/calculators/risk-reward',
    icon: BarChart3,
  },
  {
    title: 'Profit Calculator',
    description:
      'Estimate profit or loss after buying and selling crypto.',
    path: '/calculators/profit',
    icon: TrendingUp,
  },
  {
    title: 'Compound Growth Calculator',
    description:
      'Understand how steady growth may affect a portfolio over time.',
    path: '/calculators/compound-growth',
    icon: Percent,
  },
  {
    title: 'Break-Even Calculator',
    description:
      'See how much growth is needed to recover from a loss.',
    path: '/calculators/break-even',
    icon: Plus,
  },

];