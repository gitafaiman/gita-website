import useQuerySection from "../hooks/useQuerySection";

const handleClickSection = (sectionId: string) => {
  const { updateSection } = useQuerySection();
  updateSection(sectionId);

  const element = document.getElementById(
    sectionId === "/" ? "home" : sectionId.slice(1)
  );

  if (element) {
    const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
    const elementRect = element.getBoundingClientRect();
    const elementCenter =
      elementRect.top + window.scrollY + elementRect.height / 2;
    const screenCenter = window.innerHeight / 2;
    const offsetPosition = elementCenter - screenCenter;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default handleClickSection;
