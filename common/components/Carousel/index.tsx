import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CarouselWrapper } from "./styles";

interface Project {
  id: number;
  image: string;
  description: string;
  link: string;
}

interface CarouselProps {
  projects: Project[];
}

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const swiperRef = useRef<any>(null); // Create a ref to hold the swiper instance

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop(); // Stop autoplay on hover
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start(); // Restart autoplay when not hovering
    }
  };

  return (
    <CarouselWrapper>
      <Swiper
        ref={swiperRef} // Attach the ref to the Swiper component
        modules={[Autoplay, Pagination]}
        slidesPerView={3} // Display 3 cards at a time
        spaceBetween={30} // Optional: Add space between the slides
        loop={true} // Enable infinite loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => window.open(project.link, "_blank")}>
              <img src={project.image} alt="Project" />
              <p>{project.description}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
};

export default Carousel;
