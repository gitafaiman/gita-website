import { ToastContainer } from 'react-toastify';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;

    /* WebKit Browsers (Chrome, Safari) */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(160, 203, 214, 0.9);
      border-radius: 50px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgba(160, 203, 214, 0.9) transparent;
  }

  html, body {
    height: 100%;
    width: 100%;
    background-color: #191919;
    color: #ffffff;
  }

  body {
    max-width: 100vw;
  overflow-x:hidden;

  }

  body, html {
    position: relative;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const PageContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0 5%;
  box-sizing: border-box;
`;

export const AppContainer = styled.div`
background-color: #191919;
color: #ffffff;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 0 20px;
box-sizing: border-box;
width: 100%;
max-width: 100%;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

export const SocialIcon = styled.a`
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #a0cbd6;
  }

  svg {
    transition: transform 0.3s;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const CustomToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 10px !important;
    font-size: 1rem !important;
  }

  .Toastify__toast--success {
    background-color: #4caf50 !important;
  }

  .Toastify__toast--error {
    background-color: #f44336 !important;
  }

  .Toastify__toast--info {
    background-color: #2196f3 !important;
  }
`;