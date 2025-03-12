import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Change to flex-start to align items at the top */
  min-height: 100vh;
  text-align: center;
  padding: 20px;
  margin-top: 20px; /* Adjusted margin for better vertical alignment */
`;

export const ErrorMessage = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 30px; /* Increased the margin to push the button container higher */
  button {
    padding: 10px 20px;
    background-color: #d668ed;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    &:hover {
      background-color: #a356d4;
    }
  }
`;
