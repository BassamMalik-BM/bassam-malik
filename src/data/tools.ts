import {
  AlertTriangle,
  CalendarDays,
  ClipboardCheck,
  NotebookPen,
  ShieldCheck,
} from 'lucide-react';

import type { Tool } from '../types';

export const tools: Tool[] = [
  {
    title: 'Risk Management Checklist',
    slug: 'risk-management-checklist',
    description:
      'Use an interactive checklist before, during, and after making a trading decision.',
    type: 'Interactive Tool',
    cta: 'Open Checklist',
    href: '/tools/risk-management-checklist',
    icon: ClipboardCheck,
  },

  {
    title: 'Trading Journal Template',
    slug: 'trading-journal-template',
    description:
      'Record your trading decisions, emotions, outcomes, and lessons in an interactive journal.',
    type: 'Interactive Tool',
    cta: 'Open Journal',
    href: '/tools/trading-journal-template',
    icon: NotebookPen,
  },

  {
    title: 'Trading Mistake Analyzer',
    slug: 'trading-mistake-analyzer',
    description:
      'Analyze common beginner mistakes and get practical suggestions to improve decision-making.',
    type: 'Interactive Tool',
    cta: 'Analyze Mistakes',
    href: '/tools/trading-mistake-analyzer',
    icon: AlertTriangle,
  },

  {
    title: 'DCA Planner',
    slug: 'dca-planner',
    description:
      'Plan a simple dollar-cost averaging schedule for crypto learning without emotional buying.',
    type: 'Interactive Tool',
    cta: 'Open Planner',
    href: '/tools/dca-planner',
    icon: CalendarDays,
  },
  {
  title: 'Trade Setup Analyzer',
  slug: 'trade-setup-analyzer',
  description:
    'Analyze your entry, stop loss, and take profit to calculate risk, reward, position size, and setup quality before trading.',
  type: 'Interactive Tool',
  cta: 'Analyze Setup',
  href: '/tools/trade-setup-analyzer',
  icon: ShieldCheck,
 },
];