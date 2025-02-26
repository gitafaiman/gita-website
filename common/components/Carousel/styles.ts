import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: auto;
  display: flex;
`;


export const Card = styled.div`
  width: 400px; 
  height: 500px; 
  flex-shrink: 0;
  position: relative;
  background: #001f3f;
  border: 2px solid #007bff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  
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
