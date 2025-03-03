import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "../common";
import Footer from '../common/components/Footer';
import { AppContainer } from "../common/components/NavBar/styles";
import Home from "./pages/Home";
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
          <Home />
        </div>
          <Footer />
      </Router>
    </AppContainer>
  );
};

export default App;
