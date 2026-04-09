import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, r as reactExports, u as useNavigate, b as useAssessment } from "./index-B41jLCFQ.js";
import { S as STATIC_SYMPTOMS, g as getQuestionsForSymptoms, B as Badge } from "./badge-BgwKzHjo.js";
import { g as getBodyRegionLabel } from "./index-ncL38psA.js";
import { S as Search } from "./search-KZjb3d14.js";
import { c as createSlot, C as ChevronRight, m as motion, B as Button } from "./proxy-C5uP9_Ji.js";
import { A as AnimatePresence } from "./index-BaTgAj1j.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const regions = [
  { key: "head", label: "Head" },
  { key: "chest", label: "Chest" },
  { key: "abdomen", label: "Abdomen" },
  { key: "back", label: "Back" },
  { key: "limbs", label: "Limbs" },
  { key: "skin", label: "Skin" },
  { key: "general", label: "General" }
];
function getRegionFromBodyRegion(region) {
  if ("head" in region) return "head";
  if ("chest" in region) return "chest";
  if ("abdomen" in region) return "abdomen";
  if ("back" in region) return "back";
  if ("limbs" in region) return "limbs";
  if ("skin" in region) return "skin";
  if ("throat" in region) return "head";
  return "general";
}
function regionClass(key, active) {
  return `cursor-pointer transition-all duration-200 stroke-primary/60 ${active === key ? "fill-primary/30 stroke-primary" : "fill-primary/8 hover:fill-primary/20"}`;
}
function handleKeyDown(e, key, active, onRegionClick) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onRegionClick(active === key ? null : key);
  }
}
function BodyDiagram({ activeRegion, onRegionClick }) {
  const toggle = (key) => onRegionClick(activeRegion === key ? null : key);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 relative", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "80",
        height: "160",
        viewBox: "0 0 80 160",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "drop-shadow-sm",
        role: "img",
        "aria-label": "Body diagram for region selection",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Body diagram for region selection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "ellipse",
            {
              cx: "40",
              cy: "20",
              rx: "14",
              ry: "16",
              className: regionClass("head", activeRegion),
              strokeWidth: "1.5",
              onClick: () => toggle("head"),
              onKeyDown: (e) => handleKeyDown(e, "head", activeRegion, onRegionClick),
              tabIndex: 0,
              role: "button",
              "aria-label": "Head region",
              "aria-pressed": activeRegion === "head"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "35",
              y: "34",
              width: "10",
              height: "8",
              rx: "2",
              className: "fill-primary/8 stroke-primary/30",
              strokeWidth: "1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "22",
              y: "42",
              width: "36",
              height: "32",
              rx: "6",
              className: regionClass("chest", activeRegion),
              strokeWidth: "1.5",
              onClick: () => toggle("chest"),
              onKeyDown: (e) => handleKeyDown(e, "chest", activeRegion, onRegionClick),
              tabIndex: 0,
              role: "button",
              "aria-label": "Chest region",
              "aria-pressed": activeRegion === "chest"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "24",
              y: "74",
              width: "32",
              height: "26",
              rx: "4",
              className: regionClass("abdomen", activeRegion),
              strokeWidth: "1.5",
              onClick: () => toggle("abdomen"),
              onKeyDown: (e) => handleKeyDown(e, "abdomen", activeRegion, onRegionClick),
              tabIndex: 0,
              role: "button",
              "aria-label": "Abdomen region",
              "aria-pressed": activeRegion === "abdomen"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "7",
              y: "44",
              width: "13",
              height: "44",
              rx: "6",
              className: regionClass("limbs", activeRegion),
              strokeWidth: "1.5",
              onClick: () => toggle("limbs"),
              onKeyDown: (e) => handleKeyDown(e, "limbs", activeRegion, onRegionClick),
              tabIndex: 0,
              role: "button",
              "aria-label": "Left arm region",
              "aria-pressed": activeRegion === "limbs"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "60",
              y: "44",
              width: "13",
              height: "44",
              rx: "6",
              className: regionClass("limbs", activeRegion),
              strokeWidth: "1.5",
              onClick: () => toggle("limbs"),
              onKeyDown: (e) => handleKeyDown(e, "limbs", activeRegion, onRegionClick),
              tabIndex: 0,
              role: "button",
              "aria-label": "Right arm region",
              "aria-pressed": activeRegion === "limbs"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "24",
              y: "100",
              width: "14",
              height: "52",
              rx: "6",
              className: regionClass("limbs", activeRegion),
              strokeWidth: "1.5",
              onClick: () => toggle("limbs"),
              onKeyDown: (e) => handleKeyDown(e, "limbs", activeRegion, onRegionClick),
              tabIndex: 0,
              role: "button",
              "aria-label": "Left leg region",
              "aria-pressed": activeRegion === "limbs"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "42",
              y: "100",
              width: "14",
              height: "52",
              rx: "6",
              className: regionClass("limbs", activeRegion),
              strokeWidth: "1.5",
              onClick: () => toggle("limbs"),
              onKeyDown: (e) => handleKeyDown(e, "limbs", activeRegion, onRegionClick),
              tabIndex: 0,
              role: "button",
              "aria-label": "Right leg region",
              "aria-pressed": activeRegion === "limbs"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-2 gap-1.5", children: [
      regions.map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => toggle(key),
          className: `px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 text-left ${activeRegion === key ? "bg-primary/15 border-primary text-primary shadow-xs" : "bg-background border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/30"}`,
          "data-ocid": `body-region-${key}`,
          children: label
        },
        key
      )),
      activeRegion && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onRegionClick(null),
          className: "col-span-2 px-2.5 py-1 text-xs font-medium rounded-lg border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200",
          "data-ocid": "body-region-clear",
          children: "Clear filter"
        }
      )
    ] })
  ] });
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function SymptomSearch({
  selectedIds,
  activeRegion,
  onAdd
}) {
  const [query, setQuery] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const inputRef = reactExports.useRef(null);
  const filtered = (() => {
    const base = activeRegion !== null ? STATIC_SYMPTOMS.filter(
      (s) => getRegionFromBodyRegion(s.bodyRegion) === activeRegion
    ) : STATIC_SYMPTOMS;
    if (query.length < 2) return [];
    return base.filter(
      (s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
  })();
  const handleSelect = (s) => {
    var _a;
    if (!selectedIds.includes(s.id)) {
      onAdd(s);
    }
    setQuery("");
    setOpen(false);
    (_a = inputRef.current) == null ? void 0 : _a.blur();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-ocid": "symptom-search-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        ref: inputRef,
        placeholder: activeRegion ? `Search ${activeRegion} symptoms…` : "Search symptoms (e.g. headache, fever…)",
        value: query,
        onChange: (e) => {
          setQuery(e.target.value);
          setOpen(true);
        },
        onFocus: () => setOpen(true),
        onBlur: () => setTimeout(() => setOpen(false), 150),
        className: "pl-9 bg-background",
        "data-ocid": "input-symptom-search"
      }
    ),
    open && filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute z-20 top-full mt-1 left-0 right-0 bg-card border border-border rounded-xl shadow-elevated overflow-hidden",
        "data-ocid": "symptom-dropdown",
        children: filtered.map((s) => {
          const alreadyAdded = selectedIds.includes(s.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onMouseDown: (e) => e.preventDefault(),
              onClick: () => handleSelect(s),
              disabled: alreadyAdded,
              className: `w-full px-4 py-2.5 text-left text-sm flex items-center justify-between group transition-colors ${alreadyAdded ? "opacity-40 cursor-not-allowed" : "hover:bg-muted"}`,
              "data-ocid": `symptom-option-${s.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: s.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground group-hover:text-primary transition-colors", children: getBodyRegionLabel(s.bodyRegion) })
              ]
            },
            s.id.toString()
          );
        })
      }
    )
  ] });
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const QUICK_SYMPTOM_NAMES = [
  "Headache",
  "Fever",
  "Cough",
  "Fatigue",
  "Nausea",
  "Back Pain",
  "Chest Pain",
  "Dizziness"
];
const quickSymptoms = STATIC_SYMPTOMS.filter(
  (s) => QUICK_SYMPTOM_NAMES.includes(s.name)
);
function Assess() {
  const navigate = useNavigate();
  const {
    state,
    setDemographics,
    addSymptom,
    removeSymptom,
    setFollowUpQuestions
  } = useAssessment();
  const [step, setStep] = reactExports.useState("demographics");
  const [age, setAge] = reactExports.useState(state.demographics.age);
  const [gender, setGender] = reactExports.useState(state.demographics.gender || "");
  const [preExisting, setPreExisting] = reactExports.useState(
    state.demographics.preExistingConditions
  );
  const [disclaimerChecked, setDisclaimerChecked] = reactExports.useState(false);
  const [showValidation, setShowValidation] = reactExports.useState(false);
  const [activeRegion, setActiveRegion] = reactExports.useState(null);
  const handleDemographicsNext = reactExports.useCallback(() => {
    if (!age || !gender || !disclaimerChecked) return;
    setDemographics({ age, gender, preExistingConditions: preExisting });
    setStep("symptoms");
    setShowValidation(false);
  }, [age, gender, preExisting, disclaimerChecked, setDemographics]);
  const handleAddSymptom = reactExports.useCallback(
    (symptom) => {
      addSymptom(symptom);
    },
    [addSymptom]
  );
  const handleContinue = reactExports.useCallback(() => {
    if (state.selectedSymptoms.length === 0) {
      setShowValidation(true);
      return;
    }
    const questions = getQuestionsForSymptoms(
      state.selectedSymptoms.map((s) => s.id)
    );
    setFollowUpQuestions(questions);
    if (questions.length > 0) {
      navigate({ to: "/interview" });
    } else {
      navigate({ to: "/results" });
    }
  }, [state.selectedSymptoms, setFollowUpQuestions, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-2xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-8", "data-ocid": "assess-progress", children: ["demographics", "symptoms"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-smooth ${step === s ? "bg-primary text-primary-foreground" : step === "symptoms" && s === "demographics" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`,
          children: step === "symptoms" && s === "demographics" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }) : i + 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `text-sm font-medium transition-smooth ${step === s ? "text-foreground" : "text-muted-foreground"}`,
          children: s === "demographics" ? "About You" : "Your Symptoms"
        }
      ),
      i < 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-muted-foreground" })
    ] }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      step === "demographics" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          transition: { duration: 0.3 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground", children: "Tell us about yourself" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Helps us provide more accurate results" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "age",
                      className: "text-sm font-medium text-foreground",
                      children: "Age"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "age",
                      type: "number",
                      placeholder: "e.g. 34",
                      value: age,
                      onChange: (e) => setAge(e.target.value),
                      min: 1,
                      max: 120,
                      className: "bg-background",
                      "data-ocid": "input-age"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "gender",
                      className: "text-sm font-medium text-foreground",
                      children: "Biological Sex"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      id: "gender",
                      value: gender,
                      onChange: (e) => setGender(e.target.value),
                      className: "w-full h-10 px-3 text-sm bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                      "data-ocid": "select-gender",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select…" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "male", children: "Male" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "female", children: "Female" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "preexisting",
                    className: "text-sm font-medium text-foreground",
                    children: [
                      "Pre-existing conditions",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "preexisting",
                    placeholder: "e.g. diabetes, hypertension, asthma…",
                    value: preExisting,
                    onChange: (e) => setPreExisting(e.target.value),
                    className: "bg-background resize-none h-20",
                    "data-ocid": "input-preexisting"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 border border-border rounded-xl p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: disclaimerChecked,
                    onChange: (e) => setDisclaimerChecked(e.target.checked),
                    className: "mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-ring",
                    "data-ocid": "checkbox-disclaimer"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground leading-relaxed", children: "I understand that SymptomCheck provides informational guidance only — not a medical diagnosis. I will consult a qualified healthcare professional for any medical decisions." })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full gap-2 py-5 font-semibold",
                  onClick: handleDemographicsNext,
                  disabled: !age || !gender || !disclaimerChecked,
                  "data-ocid": "btn-demographics-next",
                  children: [
                    "Next: Add Symptoms",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] })
          ] })
        },
        "demographics"
      ),
      step === "symptoms" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          transition: { duration: 0.3 },
          className: "space-y-4",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground mb-1", children: "Describe your symptoms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Search, browse by body area, or select common symptoms below" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border rounded-xl p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide", children: "Filter by body area" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  BodyDiagram,
                  {
                    activeRegion,
                    onRegionClick: setActiveRegion
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SymptomSearch,
                {
                  selectedIds: state.selectedSymptoms.map((s) => s.id),
                  activeRegion,
                  onAdd: handleAddSymptom
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wide", children: "Common symptoms" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex flex-wrap gap-2",
                  "data-ocid": "quick-symptoms",
                  children: quickSymptoms.map((s) => {
                    const added = state.selectedSymptoms.some(
                      (sel) => sel.id === s.id
                    );
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => handleAddSymptom(s),
                        disabled: added,
                        className: `px-3 py-1.5 text-xs font-medium rounded-full border transition-smooth ${added ? "bg-primary/10 border-primary/30 text-primary opacity-60 cursor-not-allowed" : "bg-background border-border text-foreground hover:bg-muted hover:border-primary/40"}`,
                        "data-ocid": `quick-symptom-${s.id}`,
                        children: [
                          added ? "✓ " : "+ ",
                          s.name
                        ]
                      },
                      s.id.toString()
                    );
                  })
                }
              )
            ] }),
            state.selectedSymptoms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-5", "data-ocid": "selected-symptoms", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide", children: [
                "Selected (",
                state.selectedSymptoms.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: state.selectedSymptoms.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "secondary",
                  className: "gap-1.5 pl-3 pr-1.5 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20",
                  "data-ocid": `selected-symptom-${s.id}`,
                  children: [
                    s.name,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => removeSymptom(s.id),
                        className: "hover:text-destructive transition-colors ml-0.5",
                        "aria-label": `Remove ${s.name}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
                      }
                    )
                  ]
                },
                s.id.toString()
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showValidation && state.selectedSymptoms.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: -8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                className: "flex items-center gap-2 text-destructive text-sm mb-3",
                "data-ocid": "validation-message",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 flex-shrink-0" }),
                  "Please add at least one symptom to continue."
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full gap-2 py-5 font-semibold",
                onClick: handleContinue,
                "data-ocid": "btn-symptoms-continue",
                children: [
                  "Analyze Symptoms",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                ]
              }
            )
          ] })
        },
        "symptoms"
      )
    ] })
  ] });
}
export {
  Assess as default
};
