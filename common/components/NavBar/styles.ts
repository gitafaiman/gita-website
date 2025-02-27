import { ToastContainer } from 'react-toastify';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;

    /* Scrollbar Styles */
    /* WebKit Browsers (Chrome, Safari) */
    ::-webkit-scrollbar {
      width: 6px; /* Thinner scrollbar */
      height: 6px; /* Thinner horizontal scrollbar */
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(160, 203, 214, 0.9); /* Pill color */
      border-radius: 50px; /* Pill shape */
    }

    ::-webkit-scrollbar-track {
      background: transparent; /* No visible track */
    }

    /* Firefox */
    scrollbar-width: thin; /* Make it thin */
    scrollbar-color: rgba(160, 203, 214, 0.9) transparent; /* Pill color with no track */
  }

  html, body {
    height: 100%;
    width: 100%;
    background-color: #191919;
    color: #ffffff;
  }

  body {
    max-width: 100vw;
  }

  body, html {
    position: relative;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;



const PageContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0 5%;
  box-sizing: border-box;
`;

const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 60px;
  margin: 0 auto 60px; /* Add margin-bottom for spacing between sections */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh; /* Use min-height to allow content to define height */

  &:first-of-type {
    padding-top: 0;
    margin-top: 0; /* Optional: Remove top margin for the first section */
  }

  @media (max-width: 768px) {
    padding: 50px 15px;
    min-height: calc(100vh - 60px); /* Maintain a good height on smaller screens */
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
    min-height: calc(100vh - 50px);
  }
`;

const AppContainer = styled.div`
  background-color: #191919;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
`;

const Navbar = styled.header`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 1rem);
  max-width: 1600px;
  padding: 2rem 2.5rem;
  background: linear-gradient(
    90deg,
    rgba(160, 203, 214, 0.9),
    rgba(184, 222, 210, 0.9)
  );

  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  @media (max-width: 1300px) {
    padding: 1rem 1rem;
    width: calc(100% - 3rem);
  }
  @media (max-width: 380px) {
    padding: 0.5rem;
    gap: 0.25rem;
  }
`;

const NavbarPlaceholder = styled.div`
  height: 80px;
  width: 100%;
`;

const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 100px;
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 0.25rem;
    padding-left: 70px;
  }
`;

const NavbarLogo = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  left: -10%;
  top: 50%;
  transform: translateY(-50%);
  mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const NavbarTitle = styled.span`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavbarLinks = styled.nav`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }

  @media (max-width: 420px) {
    gap: 0.1rem;
  }
`;

const NavbarButton = styled.button<{ isContact?: boolean }>`
  position: relative;
  padding: ${(props) => (props.isContact ? "0.75rem 2rem" : "0.75rem 1.5rem")};
  border-radius: 50px;
  background-color: transparent;
  color: #ffffff;
  border: ${(isContact) => (isContact ? "2px solid #ffffff" : "none")};
  cursor: pointer;
  font-size: 1.125rem;
  overflow: hidden;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #a0cbd6;
    color: #ffffff;
    transform: scale(1.05);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #a0cbd6;
    z-index: -1;
    transition: width 0.4s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  ${(props) =>
    props.isContact &&
    `&:hover {
      background-color: #a0cbd6;
    }
    &:hover::before {
      width: 0%;
    }`}

  @media (max-width: 768px) {
    padding: ${(props) => (props.isContact ? "0.5rem 1.5rem" : "0.5rem 1rem")};
    font-size: 1rem;
  }

  @media (max-width: 420px) {
    padding: ${(props) =>
      props.isContact ? "0.4rem 1.2rem" : "0.4rem 0.9rem"};
    font-size: 0.875rem;
  }
`;

const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 20px;
  background-color: #191919;
  color: white;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 1030px) {
    flex-direction: column;
    padding: 0 15px;
  }
`;

const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 100%;
  margin-bottom: 20px;

  img {
    width: 650px;
    height: 650px;

    @media (max-width: 1030px) {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1030px) {
    margin-bottom: 20px;
  }
`;

const HomeHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: left;

  @media (max-width: 1030px) {
    font-size: 2.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;

    @media (max-width: 1030px) {
      font-size: 1rem;
    }
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #191919;
`;

const AboutCard = styled.div`
  max-width: 800px;
  width: 100%;
  background: #121212;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px 15px rgba(160, 203, 214, 0.6); /* Glowing shadow effect */
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #dcdcdc;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Cta = styled.p`
  font-size: 1.25rem;
  color: #a0cbd6;
  font-weight: bold;
  margin-top: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #333;
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

const UnderlineAnimation = styled.span`
  position: relative;
  cursor: pointer;
  color: #a0cbd6;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #a0cbd6;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  perspective: 1000px;
`;

const PortfolioCard = styled.div`
  width: 300px;
  height: 400px;
  background-color: #1e1e1e;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: rotateX(180deg);
  }
`;

const CardFront = styled.div`
  background: #333;
  color: white;
  border-radius: 12px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CardBack = styled.div`
  background: #444;
  color: white;
  border-radius: 12px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotateX(180deg);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 10px;
`;

const Button = styled.button`
  background-color: #a0cbd6;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 50px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8fb8c9;
  }
`;
const CustomToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 10px !important;
    font-size: 1rem !important;
  }

  .Toastify__toast--success {
    background-color: #4caf50 !important;
  }

  .Toastify__toast--error {
    background-color: #f44336 !important;
  }

  .Toastify__toast--info {
    background-color: #2196f3 !important;
  }
`;
export {
  AboutCard,
  AboutContainer,
  AppContainer,
  Button,
  CardBack,
  CardFront,
  CardWrapper,
  CarouselContainer, Cta, CustomToastContainer, Description,
  GifContainer,
  GlobalStyle,
  Heading,
  HomeHeading,
  HomeSection,
  Navbar,
  NavbarBrand,
  NavbarButton,
  NavbarLinks,
  NavbarLogo,
  NavbarPlaceholder,
  NavbarTitle,
  PageContainer,
  Paragraph,
  PortfolioCard,
  ProfilePic,
  ProjectTitle,
  SectionWrapper,
  SocialIcon,
  SocialLinks,
  TextContainer,
  UnderlineAnimation
};

