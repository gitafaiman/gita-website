import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useQuerySection = (isClicked = false) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("home");
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const section = location.pathname.slice(1) || "home";
    setActiveSection(section);

    if (isClicked) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.pathname, isClicked]);

  const updateQuery = useCallback((section: string) => {
    const newPath = section === "home" ? "/" : `/${section}`;
    navigate(newPath, { replace: true });
    setActiveSection(section);
  }, [navigate]);

  useEffect(() => {
    if (location.pathname === "/error") return;

    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        if (!isClicked) {
          const sections = ["home", "about", "portfolio", "contact"];
          let closestSection = "home";
          let minDistance = window.innerHeight;

          sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              const distance = Math.abs(rect.top);
              if (distance < minDistance) {
                minDistance = distance;
                closestSection = section;
              }
            }
          });

          if (closestSection !== activeSection) {
            navigate(closestSection === "home" ? "/" : `/${closestSection}`, {
              replace: true,
            });
            setActiveSection(closestSection);
          }
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [activeSection, navigate, isClicked, location.pathname]);

  return { activeSection, updateQuery };
};

export default useQuerySection;
