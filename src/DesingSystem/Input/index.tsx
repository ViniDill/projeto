import React from "react";
import Spacer from "../../Components/Spacer";

import { Container, Title, Input as TextInput, ErrorMessage } from "./styles";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  fontSize?: "xs" | "sm" | "md" | "lg";
  title?: string;
}

const Input: React.FC<InputProps> = ({
  error = false,
  fontSize = "sm",
  title,
  ...rest
}) => {
  return (
    <Container>
      {title && (
        <Title error={!!error} fontSize={fontSize}>
          {title}
        </Title>
      )}
      <TextInput error={!!error} fontSize={fontSize} {...rest} />
      {error && (
        <>
          <Spacer size="s" />
          <ErrorMessage>{error}</ErrorMessage>
        </>
      )}
    </Container>
  );
};

export default Input;
