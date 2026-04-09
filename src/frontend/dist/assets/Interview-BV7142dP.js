import { c as createLucideIcon, u as useNavigate, b as useAssessment, r as reactExports, j as jsxRuntimeExports } from "./index-B41jLCFQ.js";
import { B as Badge, a as analyzeSymptoms } from "./badge-BgwKzHjo.js";
import { m as motion, B as Button, C as ChevronRight } from "./proxy-C5uP9_Ji.js";
import { A as AnimatePresence } from "./index-BaTgAj1j.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleHelp = createLucideIcon("circle-help", __iconNode);
function Interview() {
  const navigate = useNavigate();
  const { state, setAnswer, setResults } = useAssessment();
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [direction, setDirection] = reactExports.useState("forward");
  reactExports.useEffect(() => {
    if (state.selectedSymptoms.length === 0) {
      navigate({ to: "/assess" });
    }
  }, [state.selectedSymptoms, navigate]);
  const questions = state.followUpQuestions;
  const currentQuestion = questions[currentIndex];
  const currentAnswer = state.answers.find(
    (a) => a.questionId === (currentQuestion == null ? void 0 : currentQuestion.id)
  );
  const progress = questions.length > 0 ? (currentIndex + 1) / questions.length * 100 : 100;
  if (questions.length === 0) {
    navigate({ to: "/results" });
    return null;
  }
  const handleAnswer = (answerId) => {
    if (!currentQuestion) return;
    const answer = { questionId: currentQuestion.id, answerId };
    setAnswer(answer);
  };
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setDirection("forward");
      setCurrentIndex((i) => i + 1);
    } else {
      const results = analyzeSymptoms(state.selectedSymptoms, state.answers);
      setResults(results);
      navigate({ to: "/results" });
    }
  };
  const handleBack = () => {
    if (currentIndex > 0) {
      setDirection("back");
      setCurrentIndex((i) => i - 1);
    } else {
      navigate({ to: "/assess" });
    }
  };
  if (!currentQuestion) return null;
  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir === "forward" ? 40 : -40
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({
      opacity: 0,
      x: dir === "forward" ? -40 : 40
    })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-2xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", "data-ocid": "interview-progress", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-muted-foreground", children: [
          "Question ",
          currentIndex + 1,
          " of ",
          questions.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-primary", children: [
          Math.round(progress),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "h-full bg-primary rounded-full",
          initial: { width: 0 },
          animate: { width: `${progress}%` },
          transition: { duration: 0.4 }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", custom: direction, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        custom: direction,
        variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: { duration: 0.28, ease: "easeInOut" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1", children: "Follow-up question" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground leading-snug", children: currentQuestion.questionText })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 mb-8", "data-ocid": "answer-options", children: currentQuestion.answerOptions.map((option, idx) => {
            const isSelected = (currentAnswer == null ? void 0 : currentAnswer.answerId) === option.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "button",
                onClick: () => handleAnswer(option.id),
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.2, delay: idx * 0.06 },
                className: `w-full text-left px-4 py-3.5 rounded-xl border transition-smooth font-medium text-sm ${isSelected ? "bg-primary/10 border-primary text-primary shadow-xs" : "bg-background border-border text-foreground hover:bg-muted hover:border-primary/30"}`,
                "data-ocid": `answer-${option.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-4 h-4 rounded-full border-2 flex-shrink-0 transition-smooth ${isSelected ? "border-primary bg-primary" : "border-muted-foreground"}`,
                      children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-full bg-primary-foreground scale-50" })
                    }
                  ),
                  option.text
                ] })
              },
              option.id
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                onClick: handleBack,
                className: "gap-2",
                "data-ocid": "btn-interview-back",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
                  "Back"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "flex-1 gap-2 font-semibold py-5",
                onClick: handleNext,
                disabled: !currentAnswer,
                "data-ocid": "btn-interview-next",
                children: [
                  currentIndex < questions.length - 1 ? "Next Question" : "See Results",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                ]
              }
            )
          ] })
        ] })
      },
      currentQuestion.id.toString()
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mt-4 flex flex-wrap gap-1.5",
        "data-ocid": "interview-symptom-context",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground mr-1", children: "Symptoms:" }),
          state.selectedSymptoms.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: s.name }, s.id.toString()))
        ]
      }
    )
  ] });
}
export {
  Interview as default
};
