import { Button } from "react-bootstrap";
import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 5rem 2rem;
  background-color: #191919;
  color: white;
  overflow-x: hidden;

  @media (max-width: 450px) {
    padding: 1rem 1rem;
    margin: 0 auto;
  }
`;


export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;


export const ContactText = styled.div`
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 400px;
  padding: 1rem;
  
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  h4 {
    font-size: 1.5rem;
    opacity: 0.8;
    text-align: left;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
  }

  @media (max-width: 344px) {
    h1 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;

export const ContactRight = styled.div`
  flex: 1;
  border: 2px solid #4B6CEE;
  padding: 2rem;
  border-radius: 10px;
  background-color: #191919;
  box-sizing: border-box; 

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  @media (max-width: 344px) {
    padding: 1rem;
  }
`;

export const FormHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  @media (max-width: 344px) {
      font-size: 1.2rem;
    }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  
  .g-recaptcha {
    transform: scale(0.85);
    transform-origin: 0 0;
    margin: 0 auto;
  }

  @media (max-width: 360px) {
    .g-recaptcha {
      transform: scale(0.6);
      width: 100%;
      height: auto;
    }

    .g-recaptcha .recaptcha-checkbox {
      transform: scale(0.5);
    }
  }
`;



export const SendButton = styled(Button)`
  background-color: #4B6CEE;
  border-radius: 9999px;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  transition: background 0.3s ease-in-out;
  
  &:hover {
    background-color: #3658B0;
  }
  
  &:disabled {
    background-color: #6C85DA;
  }
`;
