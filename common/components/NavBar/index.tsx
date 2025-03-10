import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <Navbar $isMenuOpen={isMenuOpen} $isScrolled={isScrolled}>
      {/* New Wrapper to Keep Brand and MenuIcon in One Row */}
      <NavbarHeader>
        <NavbarBrand $isScrolled={isScrolled} onClick={() => handleNavClick("home")}>
          <NavbarLogo src={imageSrcPath} alt={`${brandName} logo`} $isScrolled={isScrolled}/>
          <NavbarTitle $isScrolled={isScrolled}>{brandName}</NavbarTitle>
        </NavbarBrand>

        {/* Menu Icon stays on the right */}
        <MenuIcon onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </MenuIcon>
      </NavbarHeader>

      {/* Navbar Links should appear below the header in mobile view */}
      <NavbarLinks $isMenuOpen={isMenuOpen} $isScrolled={isScrolled}>
        {navItems.map((item, index) => {
          const section = item.path === "/" ? "home" : item.path.slice(1);

          return (
            <NavbarButton
            $isScrolled={isScrolled}
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
