import React, { useEffect } from "react";
import useQuerySection from "../../common/hooks/useQuerySection";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const Home: React.FC = () => {
  const { getActiveSection, updateSection } = useQuerySection();
  const activeSection = getActiveSection();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
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
        updateSection(""); // Default to home if no section is found
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getActiveSection, updateSection]);

  return (
    <div>
      <section
        id="home"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#121212",
          color: "white",
        }}
      >
        <h1>Welcome to Gita Faiman's Personal Website</h1>
        <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>
          Explore my portfolio, learn about me, and get in touch.
        </p>
      </section>
      <section id="about" style={{ height: "100vh", padding: "20px" }}>
        <About />
      </section>
      <section id="portfolio" style={{ height: "100vh", padding: "20px" }}>
        <Portfolio />
      </section>
      <section id="contact" style={{ height: "100vh", padding: "20px" }}>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
