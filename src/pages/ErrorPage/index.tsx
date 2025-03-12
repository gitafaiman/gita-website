import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer, ErrorMessage, ErrorPageContainer } from './styles';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <img 
        src="/coming_soon.gif" 
        alt="Error GIF" 
      />
    <ErrorPageContainer>
      {/* Adjusted the positioning of the GIF */}
      
      <ErrorMessage>
        <h2>Oops! Page not found</h2>
        <p>The page you're looking for might have been moved or doesn't exist.</p>
      </ErrorMessage>
      
      <ButtonContainer>
        <button onClick={handleBackToHome}>Go Back to Home</button>
      </ButtonContainer>
    </ErrorPageContainer>
    </div>
  );
};

export default ErrorPage;
