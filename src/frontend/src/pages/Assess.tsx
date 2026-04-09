import { BodyDiagram, getRegionFromBodyRegion } from "@/components/BodyDiagram";
import { SymptomSearch } from "@/components/SymptomSearch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { STATIC_SYMPTOMS, getQuestionsForSymptoms } from "@/lib/backendClient";
import { useAssessment } from "@/store/assessmentStore";
import type { Symptom } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  MapPin,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

type Step = "demographics" | "symptoms";
type RegionKey =
  | "head"
  | "chest"
  | "abdomen"
  | "back"
  | "limbs"
  | "skin"
  | "general";

// 8 specific quick-add symptoms as required
const QUICK_SYMPTOM_NAMES = [
  "Headache",
  "Fever",
  "Cough",
  "Fatigue",
  "Nausea",
  "Back Pain",
  "Chest Pain",
  "Dizziness",
];
const quickSymptoms = STATIC_SYMPTOMS.filter((s) =>
  QUICK_SYMPTOM_NAMES.includes(s.name),
);

export default function Assess() {
  const navigate = useNavigate();
  const {
    state,
    setDemographics,
    addSymptom,
    removeSymptom,
    setFollowUpQuestions,
  } = useAssessment();

  const [step, setStep] = useState<Step>("demographics");
  const [age, setAge] = useState(state.demographics.age);
  const [gender, setGender] = useState(state.demographics.gender || "");
  const [preExisting, setPreExisting] = useState(
    state.demographics.preExistingConditions,
  );
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [activeRegion, setActiveRegion] = useState<RegionKey | null>(null);

  const handleDemographicsNext = useCallback(() => {
    if (!age || !gender || !disclaimerChecked) return;
    setDemographics({ age, gender, preExistingConditions: preExisting });
    setStep("symptoms");
    setShowValidation(false);
  }, [age, gender, preExisting, disclaimerChecked, setDemographics]);

  const handleAddSymptom = useCallback(
    (symptom: Symptom) => {
      addSymptom(symptom);
    },
    [addSymptom],
  );

  const handleContinue = useCallback(() => {
    if (state.selectedSymptoms.length === 0) {
      setShowValidation(true);
      return;
    }
    const questions = getQuestionsForSymptoms(
      state.selectedSymptoms.map((s) => s.id),
    );
    setFollowUpQuestions(questions);
    if (questions.length > 0) {
      navigate({ to: "/interview" });
    } else {
      navigate({ to: "/results" });
    }
  }, [state.selectedSymptoms, setFollowUpQuestions, navigate]);

  return (
    <div className="container max-w-2xl mx-auto px-4 py-10">
      {/* Progress Steps */}
      <div className="flex items-center gap-2 mb-8" data-ocid="assess-progress">
        {(["demographics", "symptoms"] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-smooth ${
                step === s
                  ? "bg-primary text-primary-foreground"
                  : step === "symptoms" && s === "demographics"
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {step === "symptoms" && s === "demographics" ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                i + 1
              )}
            </div>
            <span
              className={`text-sm font-medium transition-smooth ${
                step === s ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {s === "demographics" ? "About You" : "Your Symptoms"}
            </span>
            {i < 1 && (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === "demographics" && (
          <motion.div
            key="demographics"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Tell us about yourself
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Helps us provide more accurate results
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="age"
                      className="text-sm font-medium text-foreground"
                    >
                      Age
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="e.g. 34"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      min={1}
                      max={120}
                      className="bg-background"
                      data-ocid="input-age"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="gender"
                      className="text-sm font-medium text-foreground"
                    >
                      Biological Sex
                    </Label>
                    <select
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full h-10 px-3 text-sm bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      data-ocid="select-gender"
                    >
                      <option value="">Select…</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="preexisting"
                    className="text-sm font-medium text-foreground"
                  >
                    Pre-existing conditions{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </Label>
                  <Textarea
                    id="preexisting"
                    placeholder="e.g. diabetes, hypertension, asthma…"
                    value={preExisting}
                    onChange={(e) => setPreExisting(e.target.value)}
                    className="bg-background resize-none h-20"
                    data-ocid="input-preexisting"
                  />
                </div>

                {/* Disclaimer checkbox */}
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={disclaimerChecked}
                      onChange={(e) => setDisclaimerChecked(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-ring"
                      data-ocid="checkbox-disclaimer"
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      I understand that SymptomCheck provides informational
                      guidance only — not a medical diagnosis. I will consult a
                      qualified healthcare professional for any medical
                      decisions.
                    </span>
                  </label>
                </div>

                <Button
                  className="w-full gap-2 py-5 font-semibold"
                  onClick={handleDemographicsNext}
                  disabled={!age || !gender || !disclaimerChecked}
                  data-ocid="btn-demographics-next"
                >
                  Next: Add Symptoms
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {step === "symptoms" && (
          <motion.div
            key="symptoms"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold text-foreground mb-1">
                Describe your symptoms
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                Search, browse by body area, or select common symptoms below
              </p>

              {/* Body Diagram + Search stacked */}
              <div className="space-y-4 mb-5">
                {/* Body Diagram */}
                <div className="bg-muted/30 border border-border rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Filter by body area
                    </p>
                  </div>
                  <BodyDiagram
                    activeRegion={activeRegion}
                    onRegionClick={setActiveRegion}
                  />
                </div>

                {/* Search */}
                <SymptomSearch
                  selectedIds={state.selectedSymptoms.map((s) => s.id)}
                  activeRegion={activeRegion}
                  onAdd={handleAddSymptom}
                />
              </div>

              {/* Quick add */}
              <div className="mb-5">
                <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wide">
                  Common symptoms
                </p>
                <div
                  className="flex flex-wrap gap-2"
                  data-ocid="quick-symptoms"
                >
                  {quickSymptoms.map((s) => {
                    const added = state.selectedSymptoms.some(
                      (sel) => sel.id === s.id,
                    );
                    return (
                      <button
                        key={s.id.toString()}
                        type="button"
                        onClick={() => handleAddSymptom(s)}
                        disabled={added}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-smooth ${
                          added
                            ? "bg-primary/10 border-primary/30 text-primary opacity-60 cursor-not-allowed"
                            : "bg-background border-border text-foreground hover:bg-muted hover:border-primary/40"
                        }`}
                        data-ocid={`quick-symptom-${s.id}`}
                      >
                        {added ? "✓ " : "+ "}
                        {s.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected symptoms */}
              {state.selectedSymptoms.length > 0 && (
                <div className="space-y-2 mb-5" data-ocid="selected-symptoms">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    Selected ({state.selectedSymptoms.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {state.selectedSymptoms.map((s) => (
                      <Badge
                        key={s.id.toString()}
                        variant="secondary"
                        className="gap-1.5 pl-3 pr-1.5 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                        data-ocid={`selected-symptom-${s.id}`}
                      >
                        {s.name}
                        <button
                          type="button"
                          onClick={() => removeSymptom(s.id)}
                          className="hover:text-destructive transition-colors ml-0.5"
                          aria-label={`Remove ${s.name}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Validation message */}
              <AnimatePresence>
                {showValidation && state.selectedSymptoms.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-destructive text-sm mb-3"
                    data-ocid="validation-message"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Please add at least one symptom to continue.
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                className="w-full gap-2 py-5 font-semibold"
                onClick={handleContinue}
                data-ocid="btn-symptoms-continue"
              >
                Analyze Symptoms
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
