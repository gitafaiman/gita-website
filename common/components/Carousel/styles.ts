import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 800px; /* Adjusted max-width for a larger carousel */
  margin: auto;
`;

export const CardContainer = styled.div`
  perspective: 1000px;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%; /* Full width of the slide */
  height: 300px; /* Set a fixed height for consistency */
  position: relative;
  background: white; /* Keep background color white */
  border: 2px solid #a0cbd6; /* Updated outline color */
  border-radius: 10px;
  overflow: hidden; /* Ensures no overflow from image */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 80%; /* Adjust height of the image */
    object-fit: cover;
    border-radius: 10px 10px 0 0; /* Rounded top corners */
  }

  p {
    padding: 10px; /* Add padding for text */
    text-align: center;
    color: #333; /* Text color */
  }
`;


export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white; /* Keep background color white */
  border: 2px solid #a0cbd6; /* Updated outline color */
  border-radius: 10px;
  box-sizing: border-box; /* Ensure border is included in the element's total width and height */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px; /* Optional: to match the card corners */
    /* Removed margin */
  }
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #001f3f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotateY(180deg);
  border: 2px solid #a0cbd6; /* Updated outline color */
  border-radius: 10px;
  padding: 20px;

  &:hover {
    background: #003366;
  }
`;
