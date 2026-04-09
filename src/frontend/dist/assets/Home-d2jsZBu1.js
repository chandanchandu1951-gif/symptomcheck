import { c as createLucideIcon, u as useNavigate, j as jsxRuntimeExports, A as Activity } from "./index-B41jLCFQ.js";
import { m as motion, B as Button, C as ChevronRight } from "./proxy-C5uP9_Ji.js";
import { P as Phone, S as Stethoscope, T as TriangleAlert } from "./triangle-alert-BWw-AbwS.js";
import { S as Search } from "./search-KZjb3d14.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const steps = [
  {
    num: 1,
    title: "Enter Symptoms",
    description: "Search and select the symptoms you're experiencing",
    Icon: Search
  },
  {
    num: 2,
    title: "Answer Questions",
    description: "Short follow-up questions help narrow down possibilities",
    Icon: Stethoscope
  },
  {
    num: 3,
    title: "See Results",
    description: "Get ranked conditions with triage recommendations",
    Icon: Activity
  }
];
const features = [
  {
    icon: Clock,
    title: "Quick Assessment",
    description: "Complete your symptom check in under 5 minutes"
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your health data stays on-device and is never shared"
  },
  {
    icon: Stethoscope,
    title: "Guided Questions",
    description: "Step-by-step follow-up for more accurate insights"
  }
];
function Home() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-destructive/10 border-b border-destructive/20 px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-4xl mx-auto flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-destructive flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-destructive font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Emergency:" }),
        " If you have severe chest pain, difficulty breathing, or signs of stroke — call emergency services immediately."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "flex items-center justify-center gap-2 mb-6",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-7 h-7 text-primary" }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.1 },
          className: "font-display text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight leading-tight",
          children: "Symptom Checker"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed",
          children: "Understand your symptoms in minutes. Secure, guided, human-centered healthcare insight."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              className: "gap-2 px-8 py-6 text-base font-semibold shadow-elevated hover:shadow-card transition-smooth",
              onClick: () => navigate({ to: "/assess" }),
              "data-ocid": "cta-start-check",
              children: [
                "Start Assessment",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              ]
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-16 px-4 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4 },
          className: "font-display text-2xl font-bold text-foreground text-center mb-10",
          children: "How it works"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.1 },
          className: "relative bg-card rounded-xl p-5 shadow-card border border-border text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center", children: step.num }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(step.Icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1.5", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: step.description })
          ]
        },
        step.num
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.1 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1.5", children: feature.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: feature.description })
        ]
      },
      feature.title
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-10 px-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-card border border-border rounded-xl p-5 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-chart-5/15 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-chart-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-1", children: "Medical Disclaimer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "SymptomCheck is for informational purposes only and does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for any medical concerns." })
      ] })
    ] }) }) })
  ] });
}
export {
  Home as default
};
