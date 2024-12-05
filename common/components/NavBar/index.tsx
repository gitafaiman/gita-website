import React from "react";
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
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <NavbarLogo src={imageSrcPath} alt={`${brandName} logo`} />
          <NavbarTitle>{brandName}</NavbarTitle>
        </NavbarBrand>
        <NavbarLinks>
          {navItems.map((item, index) => (
            <NavbarButton
              key={index}
              onClick={() => (window.location.href = item.path)}
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
