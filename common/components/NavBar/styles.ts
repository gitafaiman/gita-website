import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: #121212; /* Dark background */
    color: #ffffff; /* Bright white text */
  }
html {
  scroll-behavior: smooth;
}

  #root {
    height: 100%;
  }
`;

const AppContainer = styled.div`
  background-color: #121212; /* Dark background */
  color: #ffffff; /* Bright white text */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
    #a0cbd6,
    #b8ded2
  ); /* Darker ombre effect */
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

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #121212; /* Match dark background */
`;

const AboutCard = styled.div`
  max-width: 800px;
  width: 100%;
  background: #1e1e1e;
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
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
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
    color: #a0cbd6; /* Hover color for icons */
  }

  svg {
    transition: transform 0.3s;
  }

  &:hover svg {
    transform: scale(1.1); /* Slightly enlarge icon on hover */
  }
`;

export {
  AboutCard,
  AboutContainer,
  AppContainer,
  Cta,
  GlobalStyle,
  Heading,
  Navbar,
  NavbarBrand,
  NavbarButton,
  NavbarLinks,
  NavbarLogo,
  NavbarPlaceholder,
  NavbarTitle,
  Paragraph,
  ProfilePic,
  SocialIcon,
  SocialLinks,
};
