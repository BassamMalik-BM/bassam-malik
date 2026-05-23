import { AlertTriangle, CalendarDays, ClipboardCheck, NotebookPen } from 'lucide-react';
import type { Tool } from '../types';

export const tools: Tool[] = [
  {
    title: 'Risk Management Checklist',
    description:
      'Use an interactive checklist before, during, and after making a trading decision.',
    type: 'Interactive Tool',
    cta: 'Open Checklist',
    href: '/tools/risk-management-checklist',
    icon: ClipboardCheck,
  },
  {
    title: 'Trading Journal Template',
    description:
      'Record your trading decisions, emotions, outcomes, and lessons in an interactive journal.',
    type: 'Interactive Tool',
    cta: 'Open Journal',
    href: '/tools/trading-journal-template',
    icon: NotebookPen,
  },
  {
  title: 'Trading Mistake Analyzer',
  description:
    'Analyze common beginner mistakes and get practical suggestions to improve decision-making.',
  type: 'Interactive Tool',
  cta: 'Analyze Mistakes',
  href: '/tools/trading-mistake-analyzer',
  icon: AlertTriangle,
  },
  {
  title: 'DCA Planner',
  description:
    'Plan a simple dollar-cost averaging schedule for spot crypto learning without emotional buying.',
  type: 'Interactive Tool',
  cta: 'Open Planner',
  href: '/tools/dca-planner',
  icon: CalendarDays,
  },
];