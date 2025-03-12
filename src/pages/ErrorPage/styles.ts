// src/common/components/ErrorPage/styles.ts
import styled from "styled-components";
export const ErrorPageContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  margin: auto 20px;
`;

export const ErrorText = styled.h2`
  color: #721c24;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #d668ed;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #a254d4;
  }
`;
