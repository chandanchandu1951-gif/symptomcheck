import { j as jsxRuntimeExports, a as cn } from "./index-B41jLCFQ.js";
import { S as Slot, d as cva } from "./proxy-C5uP9_Ji.js";
const STATIC_SYMPTOMS = [
  {
    id: 1n,
    name: "Headache",
    bodyRegion: { head: null },
    description: "Pain or pressure in the head"
  },
  {
    id: 2n,
    name: "Sore Throat",
    bodyRegion: { throat: null },
    description: "Pain or irritation in the throat"
  },
  {
    id: 3n,
    name: "Chest Pain",
    bodyRegion: { chest: null },
    description: "Discomfort or tightness in the chest"
  },
  {
    id: 4n,
    name: "Cough",
    bodyRegion: { chest: null },
    description: "Repeated coughing episodes"
  },
  {
    id: 5n,
    name: "Fever",
    bodyRegion: { general: null },
    description: "Body temperature above 38°C / 100.4°F"
  },
  {
    id: 6n,
    name: "Fatigue",
    bodyRegion: { general: null },
    description: "Persistent tiredness or exhaustion"
  },
  {
    id: 7n,
    name: "Nausea",
    bodyRegion: { abdomen: null },
    description: "Feeling sick to your stomach"
  },
  {
    id: 8n,
    name: "Dizziness",
    bodyRegion: { head: null },
    description: "Feeling of lightheadedness or spinning"
  },
  {
    id: 9n,
    name: "Shortness of Breath",
    bodyRegion: { chest: null },
    description: "Difficulty breathing normally"
  },
  {
    id: 10n,
    name: "Back Pain",
    bodyRegion: { back: null },
    description: "Aching or sharp pain in the back"
  },
  {
    id: 11n,
    name: "Rash",
    bodyRegion: { skin: null },
    description: "Skin irritation or discoloration"
  },
  {
    id: 12n,
    name: "Joint Pain",
    bodyRegion: { limbs: null },
    description: "Aching in one or more joints"
  },
  {
    id: 13n,
    name: "Abdominal Pain",
    bodyRegion: { abdomen: null },
    description: "Pain or cramps in the stomach area"
  },
  {
    id: 14n,
    name: "Runny Nose",
    bodyRegion: { head: null },
    description: "Nasal discharge or congestion"
  },
  {
    id: 15n,
    name: "Muscle Aches",
    bodyRegion: { general: null },
    description: "General body or muscle soreness"
  },
  {
    id: 16n,
    name: "Ear Pain",
    bodyRegion: { head: null },
    description: "Pain or pressure in one or both ears"
  },
  {
    id: 17n,
    name: "Swollen Lymph Nodes",
    bodyRegion: { throat: null },
    description: "Swelling in neck, armpits, or groin"
  },
  {
    id: 18n,
    name: "Vision Changes",
    bodyRegion: { head: null },
    description: "Blurry, double, or loss of vision"
  }
];
const STATIC_QUESTIONS = [
  {
    id: 1n,
    symptomId: 1n,
    questionText: "How would you describe the headache?",
    answerOptions: [
      { id: "throbbing", text: "Throbbing / pulsating" },
      { id: "pressure", text: "Pressure / squeezing" },
      { id: "sharp", text: "Sharp / stabbing" },
      { id: "dull", text: "Dull and constant" }
    ]
  },
  {
    id: 2n,
    symptomId: 1n,
    questionText: "Is the headache accompanied by sensitivity to light?",
    answerOptions: [
      { id: "yes", text: "Yes, very sensitive to light" },
      { id: "somewhat", text: "Somewhat sensitive" },
      { id: "no", text: "No sensitivity" }
    ]
  },
  {
    id: 3n,
    symptomId: 5n,
    questionText: "How high is your fever?",
    answerOptions: [
      { id: "low", text: "Low (38–38.5°C / 100–101°F)" },
      { id: "moderate", text: "Moderate (38.5–39.5°C / 101–103°F)" },
      { id: "high", text: "High (above 39.5°C / 103°F)" }
    ]
  },
  {
    id: 4n,
    symptomId: 3n,
    questionText: "Does the chest pain radiate to your arm or jaw?",
    answerOptions: [
      { id: "yes", text: "Yes" },
      { id: "no", text: "No" },
      { id: "unsure", text: "Not sure" }
    ]
  },
  {
    id: 5n,
    symptomId: 2n,
    questionText: "Is your sore throat accompanied by white patches?",
    answerOptions: [
      { id: "yes", text: "Yes" },
      { id: "no", text: "No" },
      { id: "unsure", text: "I can't see clearly" }
    ]
  }
];
function makeTriageLevel(key) {
  return { [key]: null };
}
function analyzeSymptoms(symptoms, answers) {
  var _a, _b, _c, _d, _e;
  const symptomIds = symptoms.map((s) => s.id);
  const conditions = [];
  if (symptomIds.includes(1n)) {
    const lightAnswer = (_a = answers.find((a) => a.questionId === 2n)) == null ? void 0 : _a.answerId;
    const styleAnswer = (_b = answers.find((a) => a.questionId === 1n)) == null ? void 0 : _b.answerId;
    if (styleAnswer === "throbbing" && lightAnswer === "yes") {
      conditions.push({
        id: 1n,
        name: "Migraine",
        description: "A neurological condition causing intense, throbbing headaches, often with nausea and sensitivity to light and sound.",
        confidenceScore: 85,
        triageLevel: makeTriageLevel("telehealth"),
        whenToSeeDoctor: "If migraines are frequent, severe, or not relieved by OTC medications, consult a doctor."
      });
    }
    conditions.push({
      id: 2n,
      name: "Tension Headache",
      description: "The most common type of headache, caused by muscle tension or stress, often described as a tight band around the head.",
      confidenceScore: styleAnswer === "pressure" ? 78 : 60,
      triageLevel: makeTriageLevel("selfCare"),
      whenToSeeDoctor: "If headaches are unusually severe, come on suddenly, or are accompanied by fever or stiff neck."
    });
  }
  if (symptomIds.includes(3n)) {
    const radiatesAnswer = (_c = answers.find((a) => a.questionId === 4n)) == null ? void 0 : _c.answerId;
    if (radiatesAnswer === "yes") {
      conditions.push({
        id: 3n,
        name: "Possible Cardiac Event",
        description: "Chest pain radiating to the arm or jaw can be a sign of a heart attack or angina. Seek immediate medical attention.",
        confidenceScore: 72,
        triageLevel: makeTriageLevel("er"),
        whenToSeeDoctor: "Seek emergency care immediately. Call emergency services."
      });
    } else {
      conditions.push({
        id: 4n,
        name: "Costochondritis",
        description: "Inflammation of the cartilage connecting ribs to the breastbone, causing chest wall pain.",
        confidenceScore: 55,
        triageLevel: makeTriageLevel("telehealth"),
        whenToSeeDoctor: "See a doctor if chest pain persists, worsens, or is accompanied by shortness of breath."
      });
    }
  }
  if (symptomIds.includes(5n) && symptomIds.includes(4n)) {
    const feverAnswer = (_d = answers.find((a) => a.questionId === 3n)) == null ? void 0 : _d.answerId;
    conditions.push({
      id: 5n,
      name: "Influenza (Flu)",
      description: "A viral infection causing fever, cough, body aches, and fatigue. Usually resolves in 1–2 weeks with rest.",
      confidenceScore: feverAnswer === "high" ? 80 : 65,
      triageLevel: feverAnswer === "high" ? makeTriageLevel("urgentCare") : makeTriageLevel("selfCare"),
      whenToSeeDoctor: "See a doctor if fever is very high, breathing is difficult, or symptoms do not improve after 7 days."
    });
  }
  if (symptomIds.includes(2n)) {
    const patchAnswer = (_e = answers.find((a) => a.questionId === 5n)) == null ? void 0 : _e.answerId;
    conditions.push({
      id: 6n,
      name: patchAnswer === "yes" ? "Strep Throat" : "Viral Pharyngitis",
      description: patchAnswer === "yes" ? "A bacterial throat infection requiring antibiotic treatment. Look for white patches and swollen lymph nodes." : "A viral infection causing throat soreness, usually resolving without antibiotics in 5–7 days.",
      confidenceScore: patchAnswer === "yes" ? 75 : 65,
      triageLevel: patchAnswer === "yes" ? makeTriageLevel("telehealth") : makeTriageLevel("selfCare"),
      whenToSeeDoctor: "See a doctor if you have white patches, difficulty swallowing, or high fever."
    });
  }
  if (symptomIds.includes(6n) && symptomIds.includes(7n)) {
    conditions.push({
      id: 7n,
      name: "Viral Gastroenteritis",
      description: "A stomach bug causing nausea, fatigue, and sometimes vomiting. Usually resolves in 1–3 days.",
      confidenceScore: 60,
      triageLevel: makeTriageLevel("selfCare"),
      whenToSeeDoctor: "See a doctor if symptoms persist more than 3 days or you become severely dehydrated."
    });
  }
  const fallbacks = [
    {
      id: 100n,
      name: "Viral Illness",
      description: "Many common symptoms — fatigue, aches, mild fever, and congestion — are caused by circulating viral infections. Rest, hydration, and over-the-counter relief typically resolve symptoms within 7–10 days.",
      confidenceScore: 52,
      triageLevel: makeTriageLevel("selfCare"),
      whenToSeeDoctor: "Seek care if symptoms worsen after 7 days, fever exceeds 39.5 °C, or breathing becomes difficult."
    },
    {
      id: 101n,
      name: "Stress / Anxiety",
      description: "Physical symptoms such as headaches, fatigue, muscle tension, and stomach upset often have a psychological trigger. Stress activates the body's fight-or-flight response, producing real, measurable symptoms.",
      confidenceScore: 48,
      triageLevel: makeTriageLevel("telehealth"),
      whenToSeeDoctor: "Speak with a healthcare provider if stress or anxiety is interfering with daily activities or sleep."
    },
    {
      id: 102n,
      name: "Dehydration",
      description: "Even mild dehydration can cause headaches, dizziness, fatigue, and muscle cramps. Most adults need 2–3 litres of water per day; more during illness, exercise, or hot weather.",
      confidenceScore: 45,
      triageLevel: makeTriageLevel("selfCare"),
      whenToSeeDoctor: "Seek urgent care if you cannot keep fluids down, feel extremely weak, or show signs of severe dehydration."
    }
  ];
  for (const fallback of fallbacks) {
    if (conditions.length >= 3) break;
    const alreadyIncluded = conditions.some((c) => c.id === fallback.id);
    if (!alreadyIncluded) {
      conditions.push(fallback);
    }
  }
  return conditions.sort((a, b) => b.confidenceScore - a.confidenceScore);
}
function getQuestionsForSymptoms(symptomIds) {
  return STATIC_QUESTIONS.filter((q) => symptomIds.includes(q.symptomId));
}
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
export {
  Badge as B,
  STATIC_SYMPTOMS as S,
  analyzeSymptoms as a,
  getQuestionsForSymptoms as g
};
