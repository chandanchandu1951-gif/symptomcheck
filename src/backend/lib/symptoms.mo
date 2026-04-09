import Types "../types/symptoms";
import Runtime "mo:core/Runtime";

module {
  public func getSymptoms() : [Types.Symptom] {
    Runtime.trap("not implemented");
  };

  public func getFollowUpQuestions(symptomIds : [Types.SymptomId]) : [Types.FollowUpQuestion] {
    Runtime.trap("not implemented");
  };

  public func analyzeSymptoms(
    symptomIds : [Types.SymptomId],
    answers : [Types.SymptomAnswer],
  ) : [Types.Condition] {
    Runtime.trap("not implemented");
  };
};
