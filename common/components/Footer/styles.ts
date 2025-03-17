import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 50px; 
  background-color: #191919;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: visible;
`;


const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 80%;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
  }
`;



const Logo = styled.img`
  height: 10vw;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    rgba(25, 25, 25, 0) 0%,
    rgba(25, 25, 25, 1) 20%,
    rgba(25, 25, 25, 1) 80%,
    rgba(25, 25, 25, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(25, 25, 25, 0) 0%,
    rgba(25, 25, 25, 1) 20%,
    rgba(25, 25, 25, 1) 80%,
    rgba(25, 25, 25, 0) 100%
  );
  mask-image: linear-gradient(
    to right,
    rgba(25, 25, 25, 0) 0%,
    rgba(25, 25, 25, 1) 20%,
    rgba(25, 25, 25, 1) 80%,
    rgba(25, 25, 25, 0) 100% 
  );

  @media (max-width: 768px) {
    height: 200px;
  }
`;



const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
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
  display: block;
  border: none;
  border-top: 1px solid ${colorValue};
  margin: 15px 0;
  opacity: 1;
`;

const CopyrightText = styled.p`
  font-size: 0.8rem;
  margin-top: 10px;
  opacity: 0.9;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: ${colorValue};
  line-height: 1.5;
`;



export { CopyrightText, Divider, FooterContainer, FooterContent, Logo, SocialIcon, SocialLinks };

