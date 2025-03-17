import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from './styles.ts';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
