import styled from 'styled-components';

export const ErrorPageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: auto 20px;
  background-color: #191919;
  color: white;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 1030px) {
    flex-direction: column;
  }
`;

export const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center top;

    @media (max-width: 760px) {
      height: 500px; // Even more cropped on smaller screens
    }
  }
`;


export const ErrorMessage = styled.div`
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 30px; 

  button {
    background-color: #d668ed;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 8px;
    padding: 12px 24px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 10px rgba(214, 104, 237, 0.3);

    &:hover {
      background-color: #a356d4;
      transform: scale(1.05);
      box-shadow: 0px 6px 15px rgba(163, 86, 212, 0.4);
    }
  }
`;

