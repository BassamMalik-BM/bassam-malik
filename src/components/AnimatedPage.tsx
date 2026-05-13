import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimatedPageProps = {
  children: ReactNode;
};

export default function AnimatedPage({ children }: AnimatedPageProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}
