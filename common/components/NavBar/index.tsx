import React, { useState } from "react";
import useQuerySection from "../../hooks/useQuerySection";
import {
  Navbar,
  NavbarBrand,
  NavbarButton,
  NavbarLinks,
  NavbarLogo,
  NavbarPlaceholder,
  NavbarTitle,
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
  const { activeSection, updateQuery } = useQuerySection(isClicked);

  const handleNavClick = (section: string) => {
    setIsClicked(true);
    updateQuery(section);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <>
      <Navbar>
        <NavbarBrand onClick={() => handleNavClick("home")}>
          <NavbarLogo src={imageSrcPath} alt={`${brandName} logo`} />
          <NavbarTitle>{brandName}</NavbarTitle>
        </NavbarBrand>
        <NavbarLinks>
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
