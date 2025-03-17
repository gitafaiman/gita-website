import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Card, CarouselWrapper, SwiperSlideStyled } from "./styles";

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
  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay?.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay?.start();
    }
  };

  const handleCardClick = () => {
    window.open("/error", "_blank");
  };

  return (
    <CarouselWrapper>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {projects.map((project) => (
          <SwiperSlideStyled key={project.id}>
            <Card
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleCardClick /*() => window.open(project.link, "_blank")*/}
            >
              <img src={project.image} alt="Project" />
              <p>{project.description}</p>
            </Card>
          </SwiperSlideStyled>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
};

export default Carousel;
