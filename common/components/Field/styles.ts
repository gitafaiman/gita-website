import styled from 'styled-components';

export const FieldContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  background-color: #191919;
  border: 2px solid #4B6CEE;
  border-radius: 9999px;
  font-size: 1rem;
  color: white;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #4B6CEE;
  }

  &.error {
    border-color: rgb(247,1,247);
  }
`;

export const ErrorMessage = styled.p`
  color: rgb(247,1,247);
  font-size: 0.875rem;
  margin-top: 5px;
`;
