import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../common/components/Carousel";

const projects = [
  {
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard that allows users to search for weather data by city. It shows current weather conditions, forecasts, and more.",
    path: "/weather-dashboard",
  },
  {
    title: "E-commerce Store",
    description:
      "An online store built with React and Redux. It includes product listings, a shopping cart, and user authentication.",
    path: "/ecommerce-store",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app to manage tasks with categories, deadlines, and priorities. Features include sorting and filtering tasks.",
    path: "/task-manager",
  },
  {
    title: "Recipe Finder",
    description:
      "A web app that allows users to search for recipes by ingredients. It fetches data from an API to provide cooking instructions and nutrition info.",
    path: "/recipe-finder",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing various projects and skills. It includes sections for about me, contact, and portfolio.",
    path: "/portfolio-website",
  },
];

const Portfolio: React.FC = () => {
  const projectCards = projects.map((project, index) => (
    <Link
      to={project.path}
      key={index}
      style={{
        background: "#1e1e1e",
        color: "#ffffff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </Link>
  ));

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#ffffff", textAlign: "center" }}>My Projects</h2>
      <Carousel items={projectCards} />
    </div>
  );
};

export default Portfolio;
