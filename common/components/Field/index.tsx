import React, { forwardRef } from "react";
import { FieldContainer, Input, Label } from "./styles";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Field = forwardRef<HTMLInputElement, FieldProps>(({ label, ...props }, ref) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Input ref={ref} {...props} />
    </FieldContainer>
  );
});

export default Field;
