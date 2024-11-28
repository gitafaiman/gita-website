import React, { useState } from 'react';
import { styles } from './styles';

interface NavBarProps {
  isNavBarOpen: boolean;
  brandName: string;
  imageSrcPath: string;
  navItems: { label: string; path: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ isNavBarOpen, brandName, imageSrcPath, navItems }) => {
  const [menuOpen, setMenuOpen] = useState(isNavBarOpen);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header style={styles.navbar}>
      <div style={styles.navbarBrand}>
        <img src={imageSrcPath} alt={`${brandName} logo`} style={styles.navbarLogo} />
        <span style={styles.navbarTitle}>{brandName}</span>
      </div>
      <nav style={styles.navbarLinks}>
        {navItems.map((item, index) => (
          <button key={index} style={styles.navbarButton} onClick={() => window.location.href = item.path}>
            {item.label}
          </button>
        ))}
      </nav>
    </header >
  );
};

export default NavBar;
