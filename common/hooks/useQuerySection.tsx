import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useQuerySection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("home");
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isUserScrolling = useRef(false);

// Extract section from URL on initial load and scroll to it
useEffect(() => {
  const section = location.pathname.slice(1) || "home";
  setActiveSection(section);

  // Delay ensures elements are loaded before scrolling
  setTimeout(() => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
}, [location.pathname]);

console.log(window);
  // Function to update URL when clicking a NavLink (without interference)
  const updateQuery = useCallback(
    (section: string) => {
      isUserScrolling.current = false; // Reset scrolling state
      const newPath = section === "home" ? "/" : `/${section}`;
      navigate(newPath, { replace: true });
      setActiveSection(section);
    },[]);

  // Scroll listener to detect active section
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      isUserScrolling.current = true; // Mark as manual scrolling

      scrollTimeout.current = setTimeout(() => {
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

        // Reset scroll detection after a short delay
        setTimeout(() => (isUserScrolling.current = false), 500);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [activeSection, navigate]);

  return { activeSection, updateQuery };
};

export default useQuerySection;
