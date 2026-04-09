import { motion } from "motion/react";

interface ConfidenceBarProps {
  score: number;
  showLabel?: boolean;
  size?: "sm" | "md";
}

function getBarColor(score: number): string {
  if (score >= 75) return "bg-primary";
  if (score >= 55) return "bg-amber-500";
  return "bg-orange-400";
}

function getLikelihoodLabel(score: number): string {
  if (score >= 75) return "Likely";
  if (score >= 55) return "Possible";
  return "Uncommon";
}

export function ConfidenceBar({
  score,
  showLabel = true,
  size = "md",
}: ConfidenceBarProps) {
  const barColor = getBarColor(score);
  const label = getLikelihoodLabel(score);
  const height = size === "sm" ? "h-1.5" : "h-2";
  const width = size === "sm" ? "w-20" : "w-full";

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${width} ${height} bg-muted rounded-full overflow-hidden`}
      >
        <motion.div
          className={`h-full ${barColor} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
          {score}% · {label}
        </span>
      )}
    </div>
  );
}
