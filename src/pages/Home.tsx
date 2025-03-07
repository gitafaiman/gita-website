import React from "react";
import {
  GifContainer,
  HomeHeading,
  HomeSection,
  PageContainer,
  SectionWrapper,
  TextContainer,
} from "../../common/components/NavBar/styles";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <SectionWrapper id="home">
        <HomeSection>
          <GifContainer>
            <img src="/home.gif" alt="Welcome GIF" />
          </GifContainer>
          <TextContainer>
            <HomeHeading>Welcome to Gita Faiman's Personal Website</HomeHeading>
            <p>Explore my portfolio, learn about me, and get in touch.</p>
          </TextContainer>
        </HomeSection>
      </SectionWrapper>

      {/* <Skills/> */}
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="portfolio">
        <Portfolio />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </PageContainer>
  );
};

export default Home;
