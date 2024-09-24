import React from "react";

import { Container } from "./styles";
import { TypesButton } from "../../Interfaces/themeInterfaces";

export interface LinkProps {
  type?: TypesButton;
  size?: buttonSizes;
  disable?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  href?: string;
  align?: "left" | "right" | "center";
}

export type buttonSizes = "xs" | "sm" | "md";

const Link: React.FC<LinkProps> = ({
  type = "Primary",
  size = "sm",
  disable = true,
  children,
  align = "left",
  ...rest
}) => {
  return (
    <Container
      type={type}
      size={size}
      disable={disable}
      align={align}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Link;
