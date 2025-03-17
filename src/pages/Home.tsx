import { motion } from "motion/react";
import React from "react";
import { useLocation } from "react-router-dom";
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
import ErrorPage from "./ErrorPage";
import Portfolio from "./Portfolio";

const Home: React.FC = () => {
  const location = useLocation();
  const paragraphText = "Explore my portfolio, learn about me, and get in touch.";

  if (location.pathname === "/error") {
    return <ErrorPage />;
  }

  return (
    <PageContainer>
      <SectionWrapper id="home">
        <HomeSection>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <GifContainer>
              <img src="/home.gif" alt="Welcome GIF" />
            </GifContainer>
          </motion.div>
          <TextContainer>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <HomeHeading>Welcome to Gita Faiman's Personal Website</HomeHeading>
            </motion.div>
            <motion.p style={{ display: "flex", flexWrap: "wrap" }}>
              {paragraphText.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring", stiffness: 100, damping: 10, delay: 0.5 + index * 0.1,
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  style={{ marginRight: "5px" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
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
