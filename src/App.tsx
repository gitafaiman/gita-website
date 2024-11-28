import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { NavBar } from '../common'
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar
          isNavBarOpen={false}
          brandName="Gita Faiman"
          imageSrcPath="/g_favicon.png"
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
  );
};

export default App;

