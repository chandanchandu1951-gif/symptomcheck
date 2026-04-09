module {
  public type SymptomId = Nat;
  public type QuestionId = Nat;
  public type ConditionId = Nat;

  public type BodyRegion = {
    #head;
    #chest;
    #abdomen;
    #back;
    #limbs;
    #skin;
    #throat;
    #general;
  };

  public type TriageLevel = {
    #selfCare;
    #telehealth;
    #urgentCare;
    #er;
  };

  public type Symptom = {
    id : SymptomId;
    name : Text;
    bodyRegion : BodyRegion;
    description : Text;
  };

  public type AnswerOption = {
    id : Text;
    text : Text;
  };

  public type FollowUpQuestion = {
    id : QuestionId;
    symptomId : SymptomId;
    questionText : Text;
    answerOptions : [AnswerOption];
  };

  public type SymptomAnswer = {
    questionId : QuestionId;
    answerId : Text;
  };

  public type Condition = {
    id : ConditionId;
    name : Text;
    description : Text;
    confidenceScore : Nat;
    triageLevel : TriageLevel;
    whenToSeeDoctor : Text;
  };
};
