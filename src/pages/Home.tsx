import React, { useEffect } from "react";
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
        // Resuming updates when scrolling slows down
        ignoreUpdates = false;
      }

      if (!ignoreUpdates) {
        // Normal section update logic
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
    <div>
      <section
        id="home"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#121212",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            maxWidth: "80%",
          }}
        >
          <img
            src="/home.gif"
            alt="Welcome GIF"
            style={{
              width: "650px",
              height: "650px",
              marginRight: "20px",
            }}
          />

          {/* Heading and Text */}
          <div>
            <h1>Welcome to Gita Faiman's Personal Website</h1>
            <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>
              Explore my portfolio, learn about me, and get in touch.
            </p>
          </div>
        </div>
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
