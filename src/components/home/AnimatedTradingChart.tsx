import { motion } from "framer-motion";

const candles = [
  { x: 0, open: 88, close: 64, high: 52, low: 102 },
  { x: 34, open: 66, close: 78, high: 55, low: 92 },
  { x: 68, open: 76, close: 48, high: 38, low: 88 },
  { x: 102, open: 50, close: 61, high: 42, low: 74 },
  { x: 136, open: 60, close: 44, high: 35, low: 72 },
  { x: 170, open: 46, close: 52, high: 38, low: 63 },
  { x: 204, open: 53, close: 41, high: 31, low: 65 },
  { x: 238, open: 42, close: 80, high: 34, low: 92 },
  { x: 272, open: 78, close: 96, high: 69, low: 108 },
  { x: 306, open: 94, close: 70, high: 62, low: 104 },
  { x: 340, open: 72, close: 56, high: 46, low: 84 },
  { x: 374, open: 58, close: 67, high: 48, low: 78 },
  { x: 408, open: 66, close: 49, high: 40, low: 76 },
  { x: 442, open: 50, close: 35, high: 25, low: 62 },
  { x: 476, open: 36, close: 44, high: 28, low: 55 },
  { x: 510, open: 43, close: 30, high: 20, low: 54 },
];

function CandleSet({ offset = 0 }: { offset?: number }) {
  return (
    <g transform={`translate(${offset} 0)`}>
      {candles.map((candle, index) => {
        const bullish = candle.close < candle.open;

        const bodyY = Math.min(
          candle.open,
          candle.close
        );

        const bodyHeight = Math.max(
          Math.abs(candle.open - candle.close),
          5
        );

        return (
          <g key={`${offset}-${index}`}>
            <line
              x1={candle.x}
              x2={candle.x}
              y1={candle.high}
              y2={candle.low}
              stroke={
                bullish ? "#10B981" : "#EF4444"
              }
              strokeWidth="1.7"
              opacity="0.75"
            />

            <rect
              x={candle.x - 7}
              y={bodyY}
              width="14"
              height={bodyHeight}
              rx="2"
              fill={
                bullish ? "#10B981" : "#EF4444"
              }
              opacity="0.9"
            />
          </g>
        );
      })}
    </g>
  );
}

export default function AnimatedTradingChart() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.16] dark:opacity-[0.25]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, transparent 18%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.65) 48%, black 68%, black 100%)",

          maskImage:
            "linear-gradient(to right, transparent 0%, transparent 18%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.65) 48%, black 68%, black 100%)",
        }}
      >
        <svg
          viewBox="0 0 700 160"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <motion.g
            animate={{
              x: [0, -544],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <CandleSet offset={0} />
            <CandleSet offset={544} />
            <CandleSet offset={1088} />
          </motion.g>
        </svg>
      </div>
    </div>
  );
}