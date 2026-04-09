function getBodyRegionLabel(region) {
  if ("head" in region) return "Head";
  if ("chest" in region) return "Chest";
  if ("abdomen" in region) return "Abdomen";
  if ("back" in region) return "Back";
  if ("limbs" in region) return "Limbs";
  if ("skin" in region) return "Skin";
  if ("throat" in region) return "Throat";
  return "General";
}
function getTriageLabel(level) {
  if ("selfCare" in level) return "Home Care";
  if ("telehealth" in level) return "Consult Doctor";
  if ("urgentCare" in level) return "Urgent Care";
  return "Go to ER";
}
function getTriageSeverity(level) {
  if ("selfCare" in level) return "low";
  if ("telehealth" in level) return "medium";
  if ("urgentCare" in level) return "high";
  return "critical";
}
export {
  getTriageSeverity as a,
  getTriageLabel as b,
  getBodyRegionLabel as g
};
