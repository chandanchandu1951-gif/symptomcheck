import type { backendInterface, Symptom, FollowUpQuestion, Condition, BodyRegion, TriageLevel } from "../backend";

export const mockBackend: backendInterface = {
  getSymptoms: async (): Promise<Symptom[]> => [
    { id: BigInt(1), name: "Headache", description: "Pain or pressure in the head", bodyRegion: "head" as unknown as BodyRegion },
    { id: BigInt(2), name: "Fever", description: "Elevated body temperature above 38°C", bodyRegion: "general" as unknown as BodyRegion },
    { id: BigInt(3), name: "Cough", description: "Repeated or persistent coughing", bodyRegion: "chest" as unknown as BodyRegion },
    { id: BigInt(4), name: "Sore Throat", description: "Pain or irritation in the throat", bodyRegion: "throat" as unknown as BodyRegion },
    { id: BigInt(5), name: "Fatigue", description: "Unusual tiredness or lack of energy", bodyRegion: "general" as unknown as BodyRegion },
    { id: BigInt(6), name: "Chest Pain", description: "Discomfort or pain in the chest area", bodyRegion: "chest" as unknown as BodyRegion },
    { id: BigInt(7), name: "Stomach Ache", description: "Pain or cramping in the abdominal area", bodyRegion: "abdomen" as unknown as BodyRegion },
    { id: BigInt(8), name: "Back Pain", description: "Aching or stiffness in the back", bodyRegion: "back" as unknown as BodyRegion },
  ],

  getFollowUpQuestions: async (symptomIds): Promise<FollowUpQuestion[]> => [
    {
      id: BigInt(1),
      symptomId: symptomIds[0] ?? BigInt(1),
      questionText: "How long have you had this symptom?",
      answerOptions: [
        { id: "less-than-day", text: "Less than 24 hours" },
        { id: "one-to-three-days", text: "1–3 days" },
        { id: "more-than-three-days", text: "More than 3 days" },
      ],
    },
    {
      id: BigInt(2),
      symptomId: symptomIds[0] ?? BigInt(1),
      questionText: "How would you rate the severity?",
      answerOptions: [
        { id: "mild", text: "Mild — barely noticeable" },
        { id: "moderate", text: "Moderate — affects daily activities" },
        { id: "severe", text: "Severe — unable to function" },
      ],
    },
  ],

  analyzeSymptoms: async (): Promise<Condition[]> => [
    {
      id: BigInt(1),
      name: "Common Cold",
      description: "A viral infection of the upper respiratory tract. Usually resolves within 7–10 days with rest and fluids.",
      triageLevel: "selfCare" as unknown as TriageLevel,
      confidenceScore: BigInt(85),
      whenToSeeDoctor: "See a doctor if symptoms worsen after 10 days or you develop a high fever.",
    },
    {
      id: BigInt(2),
      name: "Influenza (Flu)",
      description: "A contagious respiratory illness caused by influenza viruses. More severe than a cold with sudden onset.",
      triageLevel: "telehealth" as unknown as TriageLevel,
      confidenceScore: BigInt(62),
      whenToSeeDoctor: "Contact a doctor within 48 hours for antiviral treatment options.",
    },
    {
      id: BigInt(3),
      name: "Strep Throat",
      description: "A bacterial infection causing inflammation and pain in the throat. Requires antibiotic treatment.",
      triageLevel: "urgentCare" as unknown as TriageLevel,
      confidenceScore: BigInt(45),
      whenToSeeDoctor: "Visit urgent care today for a strep test and possible antibiotics.",
    },
  ],
};
