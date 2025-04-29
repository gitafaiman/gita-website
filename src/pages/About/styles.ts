import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #191919;
`;

export const AboutCard = styled.div`
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
    box-shadow: 0 0 30px 15px rgba(160, 203, 214, 0.6);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Heading = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #dcdcdc;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Cta = styled.p`
  font-size: 1.25rem;
  color: #a0cbd6;
  font-weight: bold;
  margin-top: 1.5rem;
`;

export const UnderlineAnimation = styled.span`
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

export const ResumeLink = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.2rem;
    border: 2px solid #a0cbd6;
    border-radius: 30px;
    color: #a0cbd6;
    font-weight: 600;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
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

    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: translateX(4px);
    }
  }
`;
