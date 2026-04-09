import Types "../types/symptoms";
import SymptomsLib "../lib/symptoms";

mixin () {
  public query func getSymptoms() : async [Types.Symptom] {
    SymptomsLib.getSymptoms();
  };

  public query func getFollowUpQuestions(symptomIds : [Types.SymptomId]) : async [Types.FollowUpQuestion] {
    SymptomsLib.getFollowUpQuestions(symptomIds);
  };

  public query func analyzeSymptoms(
    symptomIds : [Types.SymptomId],
    answers : [Types.SymptomAnswer],
  ) : async [Types.Condition] {
    SymptomsLib.analyzeSymptoms(symptomIds, answers);
  };
};
