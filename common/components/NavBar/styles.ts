import styled from "styled-components";

const Navbar = styled.header`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem); /* Ensure consistent padding on the sides */
  max-width: 1200px; /* Prevent excessive stretching on large screens */
  padding: 1rem 2rem; /* Internal padding for content */
  background-color: #333;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  @media (max-width: 1300px) {
    padding: 1rem 1rem; /* Adjust padding for smaller screens */
    width: calc(100% - 3rem); /* Adjust width for smaller devices */
  }
  @media (max-width: 380px) {
    padding: 0.5rem; /* Reduce padding */
    gap: 0.25rem; /* Add spacing between elements if necessary */
  }
`;

const NavbarPlaceholder = styled.div`
  height: 80px; /* Same height as Navbar for spacing */
  width: 100%;
`;

const NavbarBrand = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.25rem; /* Reduce gap for smaller screens */
  }
`;

const NavbarLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const NavbarTitle = styled.span`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavbarLinks = styled.nav`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

const NavbarButton = styled.button<{ isContact?: boolean }>`
  position: relative;
  padding: ${(props) => (props.isContact ? "0.5rem 1.5rem" : "0.5rem 1rem")};
  border-radius: 50px;
  background-color: ${(props) => (props.isContact ? "transparent" : "#555")};
  color: ${(props) => (props.isContact ? "#555" : "#ffffff")};
  border: ${(props) => (props.isContact ? "2px solid #555" : "none")};
  cursor: pointer;
  font-size: 1rem;
  overflow: hidden;
  transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffffff;
    transform: scale(1.05);
  }

  /* For animated background hover effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${(props) => (props.isContact ? "#555" : "#777")};
    z-index: -1;
    transition: width 0.4s ease-in-out;
  }

  &:hover::before {
    width: 100%; /* Fill the background */
  }

  /* Special Contact button styles */
  ${(props) =>
    props.isContact &&
    `
    &:hover {
      background-color: #555; /* Fills the outlined button */
    }
    &:hover::before {
      width: 0%; /* No animated background for the Contact button */
    }
  `}

  @media (max-width: 768px) {
    padding: ${(props) => (props.isContact ? "0.4rem 1rem" : "0.4rem 0.8rem")};
    font-size: 0.875rem;
  }

  @media (max-width: 380px) {
    padding: ${(props) =>
      props.isContact ? "0.3rem 0.8rem" : "0.3rem 0.6rem"};
    font-size: 0.75rem;
  }
`;

export {
  Navbar,
  NavbarBrand,
  NavbarButton,
  NavbarLinks,
  NavbarLogo,
  NavbarPlaceholder,
  NavbarTitle,
};
