import { c as createLucideIcon, j as jsxRuntimeExports, H as Heart, u as useNavigate, b as useAssessment, r as reactExports, L as Link } from "./index-B41jLCFQ.js";
import { m as motion, B as Button, C as ChevronRight } from "./proxy-C5uP9_Ji.js";
import { a as getTriageSeverity, b as getTriageLabel } from "./index-ncL38psA.js";
import { P as Phone, T as TriangleAlert, S as Stethoscope } from "./triangle-alert-BWw-AbwS.js";
import { a as analyzeSymptoms, B as Badge } from "./badge-BgwKzHjo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
function getBarColor(score) {
  if (score >= 75) return "bg-primary";
  if (score >= 55) return "bg-amber-500";
  return "bg-orange-400";
}
function getLikelihoodLabel(score) {
  if (score >= 75) return "Likely";
  if (score >= 55) return "Possible";
  return "Uncommon";
}
function ConfidenceBar({
  score,
  showLabel = true,
  size = "md"
}) {
  const barColor = getBarColor(score);
  const label = getLikelihoodLabel(score);
  const height = size === "sm" ? "h-1.5" : "h-2";
  const width = size === "sm" ? "w-20" : "w-full";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `${width} ${height} bg-muted rounded-full overflow-hidden`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: `h-full ${barColor} rounded-full`,
            initial: { width: 0 },
            animate: { width: `${score}%` },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
          }
        )
      }
    ),
    showLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-medium whitespace-nowrap", children: [
      score,
      "% · ",
      label
    ] })
  ] });
}
const configs = {
  low: {
    classes: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800/40",
    Icon: Heart
  },
  medium: {
    classes: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800/40",
    Icon: Stethoscope
  },
  high: {
    classes: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-400 dark:border-orange-800/40",
    Icon: TriangleAlert
  },
  critical: {
    classes: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-800/40",
    Icon: Phone
  }
};
function TriageBadge({ level, size = "md" }) {
  const severity = getTriageSeverity(level);
  const label = getTriageLabel(level);
  const { classes, Icon } = configs[severity];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1 rounded-full border font-semibold ${classes} ${size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3" }),
        label
      ]
    }
  );
}
const ringClasses = {
  low: "border-l-4 border-l-emerald-400",
  medium: "border-l-4 border-l-amber-400",
  high: "border-l-4 border-l-orange-400",
  critical: "border-l-4 border-l-red-500"
};
function ConditionCard({
  condition,
  rank
}) {
  const severity = getTriageSeverity(condition.triageLevel);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: rank * 0.1 },
      className: `bg-card border border-border rounded-xl p-5 shadow-card ${ringClasses[severity]}`,
      "data-ocid": `condition-card-${condition.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-xs font-bold text-muted-foreground mt-0.5", children: rank }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground leading-tight", children: condition.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBar, { score: condition.confidenceScore, size: "sm" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriageBadge, { level: condition.triageLevel }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-3", children: condition.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-lg px-3 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-0.5", children: "When to see a doctor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: condition.whenToSeeDoctor })
        ] })
      ]
    }
  );
}
function Results() {
  const navigate = useNavigate();
  const { state, setResults, resetAssessment } = useAssessment();
  reactExports.useEffect(() => {
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
    navigate
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-2xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 flex items-start gap-2.5",
        "data-ocid": "results-disclaimer-banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-800 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "This is not a medical diagnosis." }),
            " Please consult a qualified healthcare provider to discuss your symptoms and receive proper medical evaluation."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "mb-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Your Assessment Results" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Based on your reported symptoms:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-wrap gap-1.5",
              "data-ocid": "results-symptoms-summary",
              children: state.selectedSymptoms.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "bg-primary/8 text-primary border-primary/20 text-xs",
                  children: s.name
                },
                s.id.toString()
              ))
            }
          )
        ]
      }
    ),
    hasHighSeverity && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.97 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: 0.15 },
        className: `border rounded-xl p-4 mb-6 flex items-start gap-3 ${hasErCondition ? "bg-red-50 border-red-200" : "bg-orange-50 border-orange-200"}`,
        "data-ocid": "er-warning",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Phone,
            {
              className: `w-5 h-5 flex-shrink-0 mt-0.5 ${hasErCondition ? "text-red-600" : "text-orange-600"}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `font-semibold text-sm ${hasErCondition ? "text-red-700" : "text-orange-700"}`,
                children: hasErCondition ? "Possible emergency — seek immediate care now" : "Urgent attention recommended"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-xs mt-0.5 leading-relaxed ${hasErCondition ? "text-red-600" : "text-orange-600"}`,
                children: hasErCondition ? "One or more conditions may require emergency attention. Please call emergency services or go to your nearest ER immediately." : "One or more conditions suggest you should seek medical attention promptly. Please visit an urgent care clinic or contact your healthcare provider."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground", children: "Probable Conditions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Ranked by likelihood with triage recommendations" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-8", "data-ocid": "results-list", children: state.results.map((condition, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConditionCard,
      {
        condition,
        rank: i + 1
      },
      condition.id.toString()
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 border border-border rounded-xl p-4 mb-6 text-xs text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Important:" }),
      " These results are informational only and do not constitute medical advice. Please consult a qualified healthcare professional before making any health decisions. SymptomCheck is not a substitute for professional medical diagnosis or treatment."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          className: "gap-2 flex-1",
          onClick: handleStartOver,
          "data-ocid": "btn-start-over",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
            "Start New Assessment"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "gap-2 w-full", "data-ocid": "btn-go-home", children: [
        "Back to Home",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
      ] }) })
    ] })
  ] });
}
export {
  Results as default
};
