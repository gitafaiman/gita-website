import React from "react";
import useQuerySection from "../../hooks/useQuerySection";
import scrollToSection from "../../utils/scrollToSection";
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
  const { getActiveSection, updateSection } = useQuerySection();
  const activeSection = getActiveSection();

  return (
    <>
      <Navbar>
        <NavbarBrand onClick={() => scrollToSection("/", updateSection)}>
          <NavbarLogo src={imageSrcPath} alt={`${brandName} logo`} />
          <NavbarTitle>{brandName}</NavbarTitle>
        </NavbarBrand>
        <NavbarLinks>
          {navItems.map((item, index) => (
            <NavbarButton
              key={index}
              onClick={() => scrollToSection(item.path, updateSection)}
              style={{
                border:
                  activeSection ===
                  (item.path === "/" ? "home" : item.path.slice(1))
                    ? "2px solid white"
                    : "none",
              }}
            >
              {item.label}
            </NavbarButton>
          ))}
        </NavbarLinks>
      </Navbar>
      <NavbarPlaceholder />
    </>
  );
};

export default NavBar;
