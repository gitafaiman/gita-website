import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const CardWrapper = styled.div<{ isActive: boolean }>`
  flex: 0 0 100%;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: ${(props) => (props.isActive ? "scale(1)" : "scale(0.9)")};
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  &:hover {
    color: #a0cbd6;
  }
  &:first-of-type {
    left: 0;
  }
  &:last-of-type {
    right: 0;
  }
`;

export { ArrowButton, CardWrapper, CarouselContainer, CarouselWrapper };
