import { useState } from "react";
import {
  Button,
  CardBack,
  CardFront,
  CardWrapper,
  CarouselContainer,
  Description,
  PortfolioCard,
  ProjectTitle,
} from "../../common/components/NavBar/styles";
const projects = [
  {
    title: "Project 1",
    description: "Short description of Project 1",
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "Short description of Project 2",
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    description: "Short description of Project 3",
    link: "https://example.com/project3",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handleCardClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <CarouselContainer>
      <Button onClick={prevProject}>Prev</Button>
      <CardWrapper>
        <PortfolioCard
          onClick={() => handleCardClick(projects[currentIndex].link)}
        >
          <CardFront>
            <ProjectTitle>{projects[currentIndex].title}</ProjectTitle>
          </CardFront>
          <CardBack>
            <Description>{projects[currentIndex].description}</Description>
          </CardBack>
        </PortfolioCard>
      </CardWrapper>
      <Button onClick={nextProject}>Next</Button>
    </CarouselContainer>
  );
};

export default Portfolio;
