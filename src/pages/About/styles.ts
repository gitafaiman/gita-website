import styled from 'styled-components';

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