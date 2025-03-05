import { Menu, X } from "lucide-react"; // Import close (X) icon
import React, { useState } from "react";
import useQuerySection from "../../hooks/useQuerySection";
import {
  MenuIcon,
  Navbar,
  NavbarBrand,
  NavbarButton,
  NavbarHeader,
  NavbarLinks,
  NavbarLogo,
  NavbarPlaceholder,
  NavbarTitle
} from "./styles";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: { label: string; path: string }[];
}

const NavBar: React.FC<NavBarProps> = ({
  brandName,
  imageSrcPath,
  navItems,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { activeSection, updateQuery } = useQuerySection(isClicked);

  const handleNavClick = (section: string) => {
    setIsClicked(true);
    updateQuery(section);
    setTimeout(() => setIsClicked(false), 100);
    setIsMenuOpen(false); // Close menu on link click
  };
console.log(isMenuOpen);
console.log(isClicked);

return (
  <>
    <Navbar $isMenuOpen={isMenuOpen}>
      {/* New Wrapper to Keep Brand and MenuIcon in One Row */}
      <NavbarHeader>
        <NavbarBrand onClick={() => handleNavClick("home")}>
          <NavbarLogo src={imageSrcPath} alt={`${brandName} logo`} />
          <NavbarTitle>{brandName}</NavbarTitle>
        </NavbarBrand>

        {/* Menu Icon stays on the right */}
        <MenuIcon onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </MenuIcon>
      </NavbarHeader>

      {/* Navbar Links should appear below the header in mobile view */}
      <NavbarLinks $isMenuOpen={isMenuOpen}>
        {navItems.map((item, index) => {
          const section = item.path === "/" ? "home" : item.path.slice(1);

          return (
            <NavbarButton
              key={index}
              onClick={() => handleNavClick(section)}
              style={{
                border: activeSection === section ? "2px solid white" : "none",
              }}
            >
              {item.label}
            </NavbarButton>
          );
        })}
      </NavbarLinks>
    </Navbar>

    <NavbarPlaceholder />
  </>
);
};

export default NavBar;
