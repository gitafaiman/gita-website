import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 50px; /* Extra padding at the bottom */
  background-color: #191919;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: visible; /* Ensure nothing gets cut off */
`;


const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  padding: 20px 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    padding: 20px 30px;
  }
`;

const Logo = styled.img`
  height: 10vw;
  border-radius: 50%; /* Adjust this value based on your logo shape */
  background: linear-gradient(
    to right,
    rgba(25, 25, 25, 0) 0%, /* Transparent */
    rgba(25, 25, 25, 1) 20%, /* Matches background color */
    rgba(25, 25, 25, 1) 80%, /* Matches background color */
    rgba(25, 25, 25, 0) 100%  /* Transparent */
  );
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(25, 25, 25, 0) 0%, /* Transparent */
    rgba(25, 25, 25, 1) 20%, /* Matches background color */
    rgba(25, 25, 25, 1) 80%, /* Matches background color */
    rgba(25, 25, 25, 0) 100%  /* Transparent */
  );
  mask-image: linear-gradient(
    to right,
    rgba(25, 25, 25, 0) 0%, /* Transparent */
    rgba(25, 25, 25, 1) 20%, /* Matches background color */
    rgba(25, 25, 25, 1) 80%, /* Matches background color */
    rgba(25, 25, 25, 0) 100%  /* Transparent */
  );

  @media (max-width: 768px) {
    height: 80px;
  }
`;



const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const colorValue = 'rgba(195, 221, 228, 0.5)'; 
const SocialIcon = styled.a`
  color: ${colorValue};
  transition: color 0.3s;

  &:hover {
    color: #a0cbd6;
  }

  svg {
    transition: transform 0.3s;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const Divider = styled.hr`
  width: 100%;
  max-width: 80%;
  display: block; /* Ensures it appears */
  border: none;
  border-top: 1px solid ${colorValue}; /* Using standardized color value */
  margin: 15px 0; /* Increase margin */
  opacity: 1; /* Ensure it's fully visible */
`;

const CopyrightText = styled.p`
  font-size: 0.8rem;
  margin-top: 10px;
  opacity: 0.9;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: ${colorValue}; /* Using standardized color value */
  line-height: 1.5; /* Adjust line height for spacing between lines */
`;



export { CopyrightText, Divider, FooterContainer, FooterContent, Logo, SocialIcon, SocialLinks };

