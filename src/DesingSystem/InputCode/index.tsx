import React from "react";
import { Container, CodeDigit } from "./styles";

export interface PropsCodeInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fontSize?: "xs" | "sm" | "md" | "lg" | "xl";
}

const CodeInput: React.FC<PropsCodeInput> = ({
  error = false,
  fontSize = "xl",
  title,
  ...rest
}) => {
  return (
    <Container>
      <CodeDigit
        type="text"
        error={error}
        fontSize={fontSize}
        inputMode="numeric"
        maxLength={1}
        {...rest}
      />
    </Container>
  );
};

export default CodeInput;
