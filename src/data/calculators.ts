import {
  Calculator,
  TrendingUp,
  Shield,
  BarChart3,
  Percent,
  Plus,
} from 'lucide-react';

import type { CalculatorItem } from '../types';

export const calculators: CalculatorItem[] = [
  {
    title: 'Calculator',
    slug: 'calculator',
    description:
      'Use a simple calculator for quick trading-related calculations.',
    path: '/calculators/calculator',
    icon: Calculator,
  },

  {
    title: 'Trade Size Calculator',
    slug: 'trade-size',
    description:
      'Estimate trade size based on account balance, risk percentage, entry price, and stop level.',
    path: '/calculators/trade-size',
    icon: Shield,
  },

  {
    title: 'Risk / Reward Calculator',
    slug: 'risk-reward',
    description:
      'Compare possible risk and reward before making a trading decision.',
    path: '/calculators/risk-reward',
    icon: BarChart3,
  },

  {
    title: 'Profit Calculator',
    slug: 'profit',
    description:
      'Estimate profit or loss after buying and selling crypto.',
    path: '/calculators/profit',
    icon: TrendingUp,
  },

  {
    title: 'Compound Growth Calculator',
    slug: 'compound-growth',
    description:
      'Understand how steady growth may affect a portfolio over time.',
    path: '/calculators/compound-growth',
    icon: Percent,
  },

  {
    title: 'Break-Even Calculator',
    slug: 'break-even',
    description:
      'See how much growth is needed to recover from a loss.',
    path: '/calculators/break-even',
    icon: Plus,
  },
];