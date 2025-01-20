import React, { useEffect } from "react";
import useQuerySection from "../../common/hooks/useQuerySection";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const Home: React.FC = () => {
  const { getActiveSection } = useQuerySection();
  const activeSection = getActiveSection();

  // Scroll to the active section on load
  useEffect(() => {
    const element = document.getElementById(activeSection || "home");
    const navbarHeight = document.querySelector("header")?.offsetHeight || 0; // Adjust for NavBar height

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 10; // Add some margin

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

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
