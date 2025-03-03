import React, { forwardRef } from "react";
import { FieldContainer, Input, ErrorMessage } from "./styles";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Field = forwardRef<HTMLInputElement, FieldProps>(({ label, error, ...props }, ref) => {
  return (
    <FieldContainer>
      <Input
        ref={ref}
        placeholder={label}
        className={error ? "error" : ""}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
});

export default Field;
