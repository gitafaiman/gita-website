export const styles = {
  navbar: {
    position: 'fixed' as 'fixed',
    top: '10px', // Space above the navbar
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%', // Adjust as needed
    padding: '1rem 2rem',
    backgroundColor: '#333',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  navbarBrand: {
    display: 'flex',
    alignItems: 'center',
  },
  navbarLogo: {
    width: '40px',
    height: '40px',
    marginRight: '0.5rem',
  },
  navbarTitle: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navbarLinks: {
    display: 'flex',
    gap: '0.5rem', // Space between buttons
  },
  navbarButton: {
    padding: '0.5rem 1rem',
    borderRadius: '50px', // Makes the button appear pill-shaped
    backgroundColor: '#555',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  navbarButtonHover: {
    backgroundColor: '#777', // Change on hover
    transform: 'scale(1.05)',
  },
};
