import type {
  Condition,
  FollowUpQuestion,
  Symptom,
  SymptomAnswer,
} from "@/types";
import React, { createContext, useContext, useState } from "react";

export interface DemographicInfo {
  age: string;
  gender: string;
  preExistingConditions: string;
}

export interface AssessmentState {
  demographics: DemographicInfo;
  selectedSymptoms: Symptom[];
  followUpQuestions: FollowUpQuestion[];
  answers: SymptomAnswer[];
  results: Condition[];
  currentStep: number;
}

interface AssessmentContextValue {
  state: AssessmentState;
  setDemographics: (info: DemographicInfo) => void;
  addSymptom: (symptom: Symptom) => void;
  removeSymptom: (symptomId: bigint) => void;
  setFollowUpQuestions: (questions: FollowUpQuestion[]) => void;
  setAnswer: (answer: SymptomAnswer) => void;
  setResults: (conditions: Condition[]) => void;
  setCurrentStep: (step: number) => void;
  resetAssessment: () => void;
}

const initialState: AssessmentState = {
  demographics: { age: "", gender: "", preExistingConditions: "" },
  selectedSymptoms: [],
  followUpQuestions: [],
  answers: [],
  results: [],
  currentStep: 1,
};

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

export function AssessmentProvider({
  children,
}: { children: React.ReactNode }) {
  const [state, setState] = useState<AssessmentState>(initialState);

  const setDemographics = (demographics: DemographicInfo) =>
    setState((prev) => ({ ...prev, demographics }));

  const addSymptom = (symptom: Symptom) =>
    setState((prev) => ({
      ...prev,
      selectedSymptoms: prev.selectedSymptoms.some((s) => s.id === symptom.id)
        ? prev.selectedSymptoms
        : [...prev.selectedSymptoms, symptom],
    }));

  const removeSymptom = (symptomId: bigint) =>
    setState((prev) => ({
      ...prev,
      selectedSymptoms: prev.selectedSymptoms.filter((s) => s.id !== symptomId),
    }));

  const setFollowUpQuestions = (followUpQuestions: FollowUpQuestion[]) =>
    setState((prev) => ({ ...prev, followUpQuestions }));

  const setAnswer = (answer: SymptomAnswer) =>
    setState((prev) => ({
      ...prev,
      answers: [
        ...prev.answers.filter((a) => a.questionId !== answer.questionId),
        answer,
      ],
    }));

  const setResults = (results: Condition[]) =>
    setState((prev) => ({ ...prev, results }));

  const setCurrentStep = (currentStep: number) =>
    setState((prev) => ({ ...prev, currentStep }));

  const resetAssessment = () => setState(initialState);

  return React.createElement(
    AssessmentContext.Provider,
    {
      value: {
        state,
        setDemographics,
        addSymptom,
        removeSymptom,
        setFollowUpQuestions,
        setAnswer,
        setResults,
        setCurrentStep,
        resetAssessment,
      },
    },
    children,
  );
}

export function useAssessment(): AssessmentContextValue {
  const ctx = useContext(AssessmentContext);
  if (!ctx)
    throw new Error("useAssessment must be used within AssessmentProvider");
  return ctx;
}
