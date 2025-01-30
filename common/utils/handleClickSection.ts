import useQuerySection from "../hooks/useQuerySection";

const handleClickSection = (sectionId: string) => {
  const { updateSection } = useQuerySection();
  updateSection(sectionId);
  const element = document.getElementById(
    sectionId === "/" ? "home" : sectionId.slice(1)
  );
  if (element) {
    const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight - 10;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default handleClickSection;
