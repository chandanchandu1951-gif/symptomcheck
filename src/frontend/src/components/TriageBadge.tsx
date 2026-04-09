import type { TriageLevel } from "@/types";
import { getTriageLabel, getTriageSeverity } from "@/types";
import { AlertTriangle, Heart, Phone, Stethoscope } from "lucide-react";

interface TriageBadgeProps {
  level: TriageLevel;
  size?: "sm" | "md";
}

const configs = {
  low: {
    classes:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800/40",
    Icon: Heart,
  },
  medium: {
    classes:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800/40",
    Icon: Stethoscope,
  },
  high: {
    classes:
      "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-400 dark:border-orange-800/40",
    Icon: AlertTriangle,
  },
  critical: {
    classes:
      "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-800/40",
    Icon: Phone,
  },
};

export function TriageBadge({ level, size = "md" }: TriageBadgeProps) {
  const severity = getTriageSeverity(level);
  const label = getTriageLabel(level);
  const { classes, Icon } = configs[severity];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border font-semibold ${classes} ${
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs"
      }`}
    >
      <Icon className={size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3"} />
      {label}
    </span>
  );
}
