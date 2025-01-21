import React, { useState } from "react";
import {
  ArrowButton,
  CardWrapper,
  CarouselContainer,
  CarouselWrapper,
} from "./styles";

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <CarouselContainer>
      <ArrowButton onClick={goToPrev}>&lt;</ArrowButton>
      <CarouselWrapper>
        <div
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {items.map((item, index) => (
            <CardWrapper key={index} isActive={index === currentIndex}>
              {item}
            </CardWrapper>
          ))}
        </div>
      </CarouselWrapper>
      <ArrowButton onClick={goToNext}>&gt;</ArrowButton>
    </CarouselContainer>
  );
};

export default Carousel;
