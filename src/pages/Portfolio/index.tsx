import { motion } from "framer-motion";
import React from "react";
import { Carousel } from '../../../common';

const projects = [
  {
    id: 1,
    image: "/personal_web.png",
    description: "My Personal Website: A showcase of my work, skills, and contact info.",
    link: "https://gitafaiman.com",
  },
  {
    id: 2,
    image: "/task_app.png",
    description: "Taskify: A modern, intuitive task management application.",
    link: "https://taskify.example.com",
  },
  {
    id: 3,
    image: "/recipes.jpg",
    description: "FoodieFinds: A restaurant discovery app with personalized recommendations.",
    link: "https://foodiefinds.example.com",
  },
  {
    id: 4,
    image: "/fitness_app.png",
    description: "FitTrack: A fitness tracking app with workout and nutrition plans.",
    link: "https://fittrack.example.com",
  },
  {
    id: 5,
    image: "/movie_recs.png",
    description: "CineMate: A movie recommendation app with AI-driven suggestions.",
    link: "https://cinemate.example.com",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div>
      <motion.h2
        style={{ padding: "50px", textAlign: "center" }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        My Projects
      </motion.h2>
      <Carousel projects={projects} />
    </div>
  );
};

export default Portfolio;
