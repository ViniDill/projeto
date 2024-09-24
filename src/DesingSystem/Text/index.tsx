import React from "react";
import { Container } from "./styles";

export interface TextProps {
  size?: "md" | "lg";
  bold?: boolean;
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ size = "md", bold = false, align = "left", children }) => {
  return (
    <Container size={size} bold={bold} align={align}>
      {children}
    </Container>
  );
};

export default Text;