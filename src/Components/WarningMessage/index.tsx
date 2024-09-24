import React from "react";

import { Container, CloseButton } from "./styles";
import IconClose from "./iconClose";

export interface warningProps {
  type?: "succcess" | "error" | "warning" | "help";
  descrition: string;
  onClick?: () => void;
}

const WarningMessage: React.FC<warningProps> = ({
  type = "help",
  descrition,
  onClick,
}) => {
  return (
    <Container type={type}>
      <div>
        <img src={`/icons/${type}.png`} alt={type} />
      </div>
      <div>
        <span>{descrition}</span>
      </div>
      <CloseButton onClick={onClick} data-testid="warning-button">
        <IconClose fill={type} />
      </CloseButton>
    </Container>
  );
};

export default WarningMessage;
