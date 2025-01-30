import React from "react";
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
  const { getActiveSection, updateSection } = useQuerySection();
  const activeSection = getActiveSection();

  const handleNavClick = (path: string) => {
    updateSection(path === "/" ? "home" : path.slice(1));
    const element = document.getElementById(
      path === "/" ? "home" : path.slice(1)
    );
    if (element) {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 10;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar>
        <NavbarBrand onClick={() => handleNavClick("/")}>
          <NavbarLogo src={imageSrcPath} alt={`${brandName} logo`} />
          <NavbarTitle>{brandName}</NavbarTitle>
        </NavbarBrand>
        <NavbarLinks>
          {navItems.map((item, index) => (
            <NavbarButton
              key={index}
              onClick={() => handleNavClick(item.path)}
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
