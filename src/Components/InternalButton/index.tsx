import React, { useState } from "react";
import { ButtonContainer, Label } from "./styles";

export interface InternalButtonProps {
  label: string;
  onClick?: () => void;
}

const InternalButton: React.FC<InternalButtonProps> = ({ label, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleFocus = () => {
    setIsSelected(true);
  };

  const handleBlur = () => {
    setIsSelected(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <ButtonContainer
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      selected={isSelected}
    >
      <Label>{label}</Label>
    </ButtonContainer>
  );
};

export default InternalButton;