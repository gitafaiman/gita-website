import styled from 'styled-components';

export const SectionWrapper = styled.section`
width: 100%;
max-width: 1200px;
padding: 60px;
margin: 0 auto 60px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
min-height: 100vh;

&:first-of-type {
  padding-top: 0;
  margin-top: 0;
}

@media (max-width: 768px) {
  padding: 50px 15px;
  min-height: calc(100vh - 60px);
}

@media (max-width: 480px) {
  padding: 40px 10px;
  min-height: calc(100vh - 50px);
}
`;

export const HomeSection = styled.section`
display: flex;
align-items: center;
justify-content: center;
height: auto;
padding: auto 20px;
background-color: #191919;
color: white;
margin: 0 auto;
text-align: center;

@media (max-width: 1030px) {
  flex-direction: column;
  padding: auto 15px;
}
`;
export const GifContainer = styled.div`
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

export const HomeHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: left

  @media (max-width: 1030px) {
    font-size: 2.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TextContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

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