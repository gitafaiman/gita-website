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
  const { activeSection, updateQuery } = useQuerySection();

  return (
    <>
      <Navbar>
        <NavbarBrand onClick={() => updateQuery("home")}>
          <NavbarLogo src={imageSrcPath} alt={`${brandName} logo`} />
          <NavbarTitle>{brandName}</NavbarTitle>
        </NavbarBrand>
        <NavbarLinks>
          {navItems.map((item, index) => (
            <NavbarButton
              key={index}
              onClick={() =>
                updateQuery(item.path === "/" ? "home" : item.path.slice(1))
              }
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
