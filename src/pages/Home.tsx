import React, { useEffect } from "react";
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
import useQuerySection from "../../common/hooks/useQuerySection";

const Home: React.FC = () => {
  const { activeSection } = useQuerySection();

  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);

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
