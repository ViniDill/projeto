import React from "react";
import { Container, Input, Span } from "./styles";

export interface SwitchProps {
  checked?: boolean;
  onClick?: () => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onClick }) => {
  return (
    <Container className="switch" data-testid="switch_button">
      <Input
        type="checkbox"
        checked={checked}
        onChange={onClick}
        data-testid="input_switch"
      />
      <Span className="slider round" />
    </Container>
  );
};

export default Switch;
