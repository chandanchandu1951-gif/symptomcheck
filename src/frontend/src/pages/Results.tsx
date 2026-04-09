import { ConfidenceBar } from "@/components/ConfidenceBar";
import { TriageBadge } from "@/components/TriageBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { analyzeSymptoms } from "@/lib/backendClient";
import { useAssessment } from "@/store/assessmentStore";
import type { Condition } from "@/types";
import { getTriageSeverity } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  Phone,
  RefreshCw,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const ringClasses: Record<string, string> = {
  low: "border-l-4 border-l-emerald-400",
  medium: "border-l-4 border-l-amber-400",
  high: "border-l-4 border-l-orange-400",
  critical: "border-l-4 border-l-red-500",
};

function ConditionCard({
  condition,
  rank,
}: { condition: Condition; rank: number }) {
  const severity = getTriageSeverity(condition.triageLevel);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: rank * 0.1 }}
      className={`bg-card border border-border rounded-xl p-5 shadow-card ${ringClasses[severity]}`}
      data-ocid={`condition-card-${condition.id}`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-xs font-bold text-muted-foreground mt-0.5">
            {rank}
          </div>
          <div className="min-w-0">
            <h3 className="font-display font-semibold text-foreground leading-tight">
              {condition.name}
            </h3>
            <div className="mt-1.5">
              <ConfidenceBar score={condition.confidenceScore} size="sm" />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <TriageBadge level={condition.triageLevel} />
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {condition.description}
      </p>

      <div className="bg-muted/50 rounded-lg px-3 py-2.5">
        <p className="text-xs font-semibold text-foreground mb-0.5">
          When to see a doctor
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {condition.whenToSeeDoctor}
        </p>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const navigate = useNavigate();
  const { state, setResults, resetAssessment } = useAssessment();

  useEffect(() => {
    if (state.selectedSymptoms.length === 0) {
      navigate({ to: "/" });
      return;
    }
    if (state.results.length === 0) {
      const computed = analyzeSymptoms(state.selectedSymptoms, state.answers);
      setResults(computed);
    }
  }, [
    state.selectedSymptoms,
    state.results,
    state.answers,
    setResults,
    navigate,
  ]);

  const handleStartOver = () => {
    resetAssessment();
    navigate({ to: "/" });
  };

  if (state.results.length === 0) return null;

  const hasHighSeverity = state.results.some((c) => {
    const s = getTriageSeverity(c.triageLevel);
    return s === "high" || s === "critical";
  });
  const hasErCondition = state.results.some((c) => "er" in c.triageLevel);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-10">
      {/* Top disclaimer banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 flex items-start gap-2.5"
        data-ocid="results-disclaimer-banner"
      >
        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>This is not a medical diagnosis.</strong> Please consult a
          qualified healthcare provider to discuss your symptoms and receive
          proper medical evaluation.
        </p>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          <h1 className="font-display text-2xl font-bold text-foreground">
            Your Assessment Results
          </h1>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Based on your reported symptoms:
        </p>
        <div
          className="flex flex-wrap gap-1.5"
          data-ocid="results-symptoms-summary"
        >
          {state.selectedSymptoms.map((s) => (
            <Badge
              key={s.id.toString()}
              variant="secondary"
              className="bg-primary/8 text-primary border-primary/20 text-xs"
            >
              {s.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* ER / Urgent alert */}
      {hasHighSeverity && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className={`border rounded-xl p-4 mb-6 flex items-start gap-3 ${
            hasErCondition
              ? "bg-red-50 border-red-200"
              : "bg-orange-50 border-orange-200"
          }`}
          data-ocid="er-warning"
        >
          <Phone
            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
              hasErCondition ? "text-red-600" : "text-orange-600"
            }`}
          />
          <div>
            <p
              className={`font-semibold text-sm ${
                hasErCondition ? "text-red-700" : "text-orange-700"
              }`}
            >
              {hasErCondition
                ? "Possible emergency — seek immediate care now"
                : "Urgent attention recommended"}
            </p>
            <p
              className={`text-xs mt-0.5 leading-relaxed ${
                hasErCondition ? "text-red-600" : "text-orange-600"
              }`}
            >
              {hasErCondition
                ? "One or more conditions may require emergency attention. Please call emergency services or go to your nearest ER immediately."
                : "One or more conditions suggest you should seek medical attention promptly. Please visit an urgent care clinic or contact your healthcare provider."}
            </p>
          </div>
        </motion.div>
      )}

      {/* Conditions */}
      <div className="mb-4">
        <h2 className="font-display font-semibold text-foreground">
          Probable Conditions
        </h2>
        <p className="text-sm text-muted-foreground">
          Ranked by likelihood with triage recommendations
        </p>
      </div>

      <div className="space-y-3 mb-8" data-ocid="results-list">
        {state.results.map((condition, i) => (
          <ConditionCard
            key={condition.id.toString()}
            condition={condition}
            rank={i + 1}
          />
        ))}
      </div>

      {/* Bottom disclaimer */}
      <div className="bg-muted/40 border border-border rounded-xl p-4 mb-6 text-xs text-muted-foreground leading-relaxed">
        <strong className="text-foreground">Important:</strong> These results
        are informational only and do not constitute medical advice. Please
        consult a qualified healthcare professional before making any health
        decisions. SymptomCheck is not a substitute for professional medical
        diagnosis or treatment.
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          className="gap-2 flex-1"
          onClick={handleStartOver}
          data-ocid="btn-start-over"
        >
          <RefreshCw className="w-4 h-4" />
          Start New Assessment
        </Button>
        <Link to="/" className="flex-1">
          <Button className="gap-2 w-full" data-ocid="btn-go-home">
            Back to Home
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
