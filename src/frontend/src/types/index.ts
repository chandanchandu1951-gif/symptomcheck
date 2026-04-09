export type BodyRegion =
  | { head: null }
  | { chest: null }
  | { abdomen: null }
  | { back: null }
  | { limbs: null }
  | { skin: null }
  | { throat: null }
  | { general: null };

export type TriageLevel =
  | { selfCare: null }
  | { telehealth: null }
  | { urgentCare: null }
  | { er: null };

export type SymptomId = bigint;
export type QuestionId = bigint;
export type ConditionId = bigint;

export interface AnswerOption {
  id: string;
  text: string;
}

export interface Symptom {
  id: SymptomId;
  name: string;
  bodyRegion: BodyRegion;
  description: string;
}

export interface FollowUpQuestion {
  id: QuestionId;
  symptomId: SymptomId;
  questionText: string;
  answerOptions: AnswerOption[];
}

export interface SymptomAnswer {
  questionId: QuestionId;
  answerId: string;
}

export interface Condition {
  id: ConditionId;
  name: string;
  description: string;
  confidenceScore: number;
  triageLevel: TriageLevel;
  whenToSeeDoctor: string;
}

export function getBodyRegionLabel(region: BodyRegion): string {
  if ("head" in region) return "Head";
  if ("chest" in region) return "Chest";
  if ("abdomen" in region) return "Abdomen";
  if ("back" in region) return "Back";
  if ("limbs" in region) return "Limbs";
  if ("skin" in region) return "Skin";
  if ("throat" in region) return "Throat";
  return "General";
}

export function getTriageLabel(level: TriageLevel): string {
  if ("selfCare" in level) return "Home Care";
  if ("telehealth" in level) return "Consult Doctor";
  if ("urgentCare" in level) return "Urgent Care";
  return "Go to ER";
}

export function getTriageSeverity(
  level: TriageLevel,
): "low" | "medium" | "high" | "critical" {
  if ("selfCare" in level) return "low";
  if ("telehealth" in level) return "medium";
  if ("urgentCare" in level) return "high";
  return "critical";
}
