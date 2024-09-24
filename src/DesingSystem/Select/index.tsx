import React, { SelectHTMLAttributes } from "react";
import Spacer from "../../Components/Spacer";

import {
  Container,
  Label,
  SelectContainer,
  Title,
  ErrorMessage,
} from "./styles";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children?: React.ReactNode;
  error?: string;
}

const Select: React.FC<SelectProps> = ({ label, children, error, ...rest }) => {
  return (
    <Container>
      <Label>
        {label && <Title>{label}</Title>}
        <SelectContainer error={!!error} {...rest}>
          {children}
        </SelectContainer>
      </Label>
      {error && (
        <>
          <Spacer size="s" />
          <ErrorMessage>{error}</ErrorMessage>
        </>
      )}
    </Container>
  );
};

export default Select;
