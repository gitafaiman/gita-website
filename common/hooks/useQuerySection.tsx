import { useLocation, useNavigate } from "react-router-dom";

const useQuerySection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the current section from the query or default to 'home'
  const getActiveSection = () => {
    const path = location.pathname.slice(1); // Remove leading slash
    return path || "home"; // Default to 'home' if no query is set
  };

  // Update the query to reflect the active section
  const updateSection = (sectionId: string) => {
    if (sectionId === "home") {
      navigate(`/`, { replace: true }); // Remove the query for the home section
    } else {
      navigate(`/${sectionId}`, { replace: true }); // Add the section path to the query
    }
  };

  return { getActiveSection, updateSection };
};

export default useQuerySection;
