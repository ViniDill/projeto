import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const SendButton: React.FC<PropsButton> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default SendButton;
