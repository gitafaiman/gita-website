import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "../common";
import { AppContainer } from "../common/components/NavBar/styles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
const App: React.FC = () => {
  return (
    <AppContainer>
      <Router>
        <div>
          <NavBar
            brandName="Gita Faiman"
            imageSrcPath="/G.png"
            navItems={[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "Contact", path: "/contact" },
            ]}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </AppContainer>
  );
};

export default App;
