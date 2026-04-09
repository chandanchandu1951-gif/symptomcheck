import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { analyzeSymptoms } from "@/lib/backendClient";
import { useAssessment } from "@/store/assessmentStore";
import type { SymptomAnswer } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Interview() {
  const navigate = useNavigate();
  const { state, setAnswer, setResults } = useAssessment();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  useEffect(() => {
    if (state.selectedSymptoms.length === 0) {
      navigate({ to: "/assess" });
    }
  }, [state.selectedSymptoms, navigate]);

  const questions = state.followUpQuestions;
  const currentQuestion = questions[currentIndex];
  const currentAnswer = state.answers.find(
    (a) => a.questionId === currentQuestion?.id,
  );
  const progress =
    questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 100;

  if (questions.length === 0) {
    navigate({ to: "/results" });
    return null;
  }

  const handleAnswer = (answerId: string) => {
    if (!currentQuestion) return;
    const answer: SymptomAnswer = { questionId: currentQuestion.id, answerId };
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
    enter: (dir: string) => ({
      opacity: 0,
      x: dir === "forward" ? 40 : -40,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: string) => ({
      opacity: 0,
      x: dir === "forward" ? -40 : 40,
    }),
  };

  return (
    <div className="container max-w-2xl mx-auto px-4 py-10">
      {/* Progress */}
      <div className="mb-8" data-ocid="interview-progress">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-semibold text-primary">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentQuestion.id.toString()}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.28, ease: "easeInOut" }}
        >
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                  Follow-up question
                </p>
                <h2 className="font-display text-xl font-semibold text-foreground leading-snug">
                  {currentQuestion.questionText}
                </h2>
              </div>
            </div>

            <div className="space-y-2.5 mb-8" data-ocid="answer-options">
              {currentQuestion.answerOptions.map((option, idx) => {
                const isSelected = currentAnswer?.answerId === option.id;
                return (
                  <motion.button
                    key={option.id}
                    type="button"
                    onClick={() => handleAnswer(option.id)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.06 }}
                    className={`w-full text-left px-4 py-3.5 rounded-xl border transition-smooth font-medium text-sm ${
                      isSelected
                        ? "bg-primary/10 border-primary text-primary shadow-xs"
                        : "bg-background border-border text-foreground hover:bg-muted hover:border-primary/30"
                    }`}
                    data-ocid={`answer-${option.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-smooth ${
                          isSelected
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-full h-full rounded-full bg-primary-foreground scale-50" />
                        )}
                      </div>
                      {option.text}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleBack}
                className="gap-2"
                data-ocid="btn-interview-back"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
              <Button
                className="flex-1 gap-2 font-semibold py-5"
                onClick={handleNext}
                disabled={!currentAnswer}
                data-ocid="btn-interview-next"
              >
                {currentIndex < questions.length - 1
                  ? "Next Question"
                  : "See Results"}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Symptom context */}
      <div
        className="mt-4 flex flex-wrap gap-1.5"
        data-ocid="interview-symptom-context"
      >
        <span className="text-xs text-muted-foreground mr-1">Symptoms:</span>
        {state.selectedSymptoms.map((s) => (
          <Badge key={s.id.toString()} variant="secondary" className="text-xs">
            {s.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
