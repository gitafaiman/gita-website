import styled from 'styled-components';

const Navbar = styled.header<{ $isMenuOpen: boolean; $isScrolled: boolean }>`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 1rem);
  max-width: 1600px;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(
    90deg,
    rgba(160, 203, 214, 0.9),
    rgba(184, 222, 210, 0.9)
  );
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-radius: 75px;
  transition: padding 0.3s ease-in-out, 
              max-height 0.3s ease-in-out, 
              box-shadow 0.3s ease-in-out;
object-fit: conatain;
  ${({ $isScrolled }) =>
    $isScrolled &&
    `
      padding: 0.5rem 1.5rem;
      max-height: 90px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    `}

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.75rem;
    width: calc(100% - 3rem);
    max-height: 350px;
    overflow: hidden;
    border-radius: 35px;
    transition: padding 0.3s ease-in-out, 
                max-height 0.3s ease-in-out, 
                border-radius 0.3s ease-in-out;
  }
`;

const NavbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavbarPlaceholder = styled.div`
  height: 80px;
  width: 100%;
`;

const NavbarBrand = styled.div<{$isScrolled: boolean}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
`;

const NavbarLogo = styled.img<{ $isScrolled: boolean }>`
  width: 100px;
  height: 100px;
  margin-right: 1rem;
  border-radius: 50%;
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%);
  transition: all 0.3s ease;
  
  ${({ $isScrolled }) =>
    $isScrolled &&
    `
      mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%);
      -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%);
    `}
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
      }
`;

const NavbarTitle = styled.span<{$isScrolled: boolean}>`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
transition: all 0.3s ease;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  color: white;
  display: none;

  @media (max-width: 768px) {
    display: block;
    
  }
`;

const NavbarLinks = styled.nav<{ $isMenuOpen: boolean; $isScrolled: boolean}>`
  display: flex;
  gap: 1rem;
transition: all 0.3s ease;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    display: ${(props) => (props.$isMenuOpen ? "flex" : "none")};
    padding-top: 1rem;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 20px;
left: 50%; 
transform: translateX(-50%);
  background: rgba(160, 203, 214, 0.9);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavbarButton = styled.button<{ isContact?: boolean; $isScrolled: boolean }>`
  position: relative;
  padding: ${(props) => (props.isContact ? "0.75rem 2rem" : "0.75rem 1.5rem")};
  border-radius: 50px;
  background-color: transparent;
  color: #ffffff;
  border: ${(isContact) => (isContact ? "2px solid #ffffff" : "none")};
  cursor: pointer;
  font-size: 1.125rem;
  overflow: hidden;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    background-color: #a0cbd6;
    color: #ffffff;
    transform: scale(1.05);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #a0cbd6;
    z-index: -1;
    transition: width 0.4s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  ${(props) =>
    props.isContact &&
    `&:hover {
      background-color: #a0cbd6;
    }
    &:hover::before {
      width: 0%;
    }`}

  @media (max-width: 768px) {
    padding: ${(props) => (props.isContact ? "0.5rem 1.5rem" : "0.5rem 1rem")};
    font-size: 1rem;
  }

  @media (max-width: 420px) {
    padding: ${(props) =>
      props.isContact ? "0.4rem 1.2rem" : "0.4rem 0.9rem"};
    font-size: 0.875rem;
  }
`;


export {
  MenuIcon,
  MobileMenu,
  Navbar,
  NavbarBrand,
  NavbarButton,
  NavbarHeader,
  NavbarLinks,
  NavbarLogo,
  NavbarPlaceholder,
  NavbarTitle
};

