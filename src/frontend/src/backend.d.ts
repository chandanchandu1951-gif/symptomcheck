import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SymptomAnswer {
    answerId: string;
    questionId: QuestionId;
}
export type ConditionId = bigint;
export interface Condition {
    id: ConditionId;
    name: string;
    triageLevel: TriageLevel;
    description: string;
    confidenceScore: bigint;
    whenToSeeDoctor: string;
}
export type SymptomId = bigint;
export type QuestionId = bigint;
export interface FollowUpQuestion {
    id: QuestionId;
    answerOptions: Array<AnswerOption>;
    symptomId: SymptomId;
    questionText: string;
}
export interface Symptom {
    id: SymptomId;
    bodyRegion: BodyRegion;
    name: string;
    description: string;
}
export interface AnswerOption {
    id: string;
    text: string;
}
export enum BodyRegion {
    back = "back",
    head = "head",
    chest = "chest",
    skin = "skin",
    limbs = "limbs",
    throat = "throat",
    general = "general",
    abdomen = "abdomen"
}
export enum TriageLevel {
    er = "er",
    urgentCare = "urgentCare",
    selfCare = "selfCare",
    telehealth = "telehealth"
}
export interface backendInterface {
    analyzeSymptoms(symptomIds: Array<SymptomId>, answers: Array<SymptomAnswer>): Promise<Array<Condition>>;
    getFollowUpQuestions(symptomIds: Array<SymptomId>): Promise<Array<FollowUpQuestion>>;
    getSymptoms(): Promise<Array<Symptom>>;
}
