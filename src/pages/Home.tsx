import React, { useEffect } from "react";
import {
  GifContainer,
  HomeHeading,
  HomeSection,
  PageContainer,
  SectionWrapper,
  TextContainer,
} from "../../common/components/NavBar/styles";
import useQuerySection from "../../common/hooks/useQuerySection";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const Home: React.FC = () => {
  const { getActiveSection, updateSection } = useQuerySection();

  useEffect(() => {
    let lastScrollTime = 0;
    let lastScrollY = window.scrollY;
    let ignoreUpdates = false;

    const SCROLL_THRESHOLD = 1000;

    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;

      const deltaY = Math.abs(currentScrollY - lastScrollY);
      const deltaTime = currentTime - lastScrollTime;
      const scrollSpeed = deltaY / (deltaTime / 1000);

      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;

      if (scrollSpeed > SCROLL_THRESHOLD) {
        ignoreUpdates = true;
        return;
      }

      if (ignoreUpdates && scrollSpeed <= SCROLL_THRESHOLD) {
        ignoreUpdates = false;
      }

      if (!ignoreUpdates) {
        const sections = document.querySelectorAll("section");
        let found = false;

        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.5
          ) {
            if (getActiveSection() !== section.id) {
              updateSection(section.id);
            }
            found = true;
            break;
          }
        }

        if (!found && getActiveSection() !== "") {
          updateSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getActiveSection, updateSection]);

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
