import { useLocation, useNavigate } from "react-router-dom";

const useQuerySection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveSection = () => {
    const path = location.pathname.slice(1);
    return path || "home";
  };
  const updateSection = (sectionId: string) => {
    if (sectionId === "home") {
      navigate(`/`, { replace: true });
    } else {
      navigate(`/${sectionId}`, { replace: true });
    }
  };

  return { getActiveSection, updateSection };
};

export default useQuerySection;
