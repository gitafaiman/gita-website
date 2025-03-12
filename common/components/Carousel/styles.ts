import styled from "styled-components";
import { SwiperSlide } from 'swiper/react';

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: auto;
  display: flex;
`;

export const Card = styled.div`
  width: 300px; 
  height: 500px; 
  flex-shrink: 0;
  position: relative;
  background: rgba(75, 108, 238, 0.2); /* More transparent #4b6cee background */
  border: 2px solid #4b6cee; /* Solid border with #4b6cee */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  margin: 0;
  img {
    width: 90%;
    height: 70%;
    object-fit: cover;
    border-radius: 10px;
  }

  p {
    padding: 15px;
    text-align: center;
    color: white;
    font-size: 18px;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  webkit-box-pack: center;
  ms-flex-pack: center;
  webkit-justify-content: center;
  justify-content: center;
  webkit-box-align: center;
  ms-flex-align: center;
  webkit-align-items: center;
  align-items: center;
}
`;
