import { NavigateFunction } from "react-router-dom";

const scrollToSection = (
  sectionId: string,
  updateSection: (section: string) => void,
  navigate: NavigateFunction
) => {
  updateSection(sectionId);
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  navigate(`/${sectionId}`);
};

export default scrollToSection;
