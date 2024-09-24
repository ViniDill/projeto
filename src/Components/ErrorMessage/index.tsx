import React from "react";

import { Container, Text } from "./styles";

interface PropsErrorMessage {
  message?: string;
}

const ErrorMessage: React.FC<PropsErrorMessage> = ({ message }) => {
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
};

export default ErrorMessage;
