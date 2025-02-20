import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useQuerySection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("home");

  // Extract section from URL on initial load
  useEffect(() => {
    const section = location.pathname.slice(1) || "home";
    setActiveSection(section);
  }, [location.pathname]);

  // Function to update URL when clicking a NavLink
  const updateQuery = useCallback(
    (section: string) => {
      const newPath = section === "home" ? "/" : `/${section}`;
      navigate(newPath, { replace: true });
      setActiveSection(section);
    },
    [navigate]
  );

  return { activeSection, updateQuery };
};

export default useQuerySection;
