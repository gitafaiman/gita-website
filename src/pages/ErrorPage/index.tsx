// src/common/components/ErrorPage/index.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorPageContainer, ErrorText, Button } from "./styles";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <ErrorPageContainer>
      <ErrorText>Oops! This page does not exist.</ErrorText>
      <Button onClick={goBackHome}>Go Back Home</Button>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
