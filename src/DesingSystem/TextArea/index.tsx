import React, { TextareaHTMLAttributes } from "react";
import Spacer from "../../Components/Spacer";

import {
  Container,
  Title,
  TextArea as Content,
  Label,
  ErrorMessage,
} from "./styles";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, error, ...rest }) => {
  return (
    <Container>
      <Label>
        {label && <Title error={!!error}>{label}</Title>}
        <Content error={!!error} {...rest} />
        {error && (
          <>
            <Spacer size="s" />
            <ErrorMessage>{error}</ErrorMessage>
          </>
        )}
      </Label>
    </Container>
  );
};

export default TextArea;
