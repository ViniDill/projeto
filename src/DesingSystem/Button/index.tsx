import React, { ButtonHTMLAttributes } from "react";

import { ContainerText, ContainerContain } from "./styles";
import { TypesButton } from "../../Interfaces/themeInterfaces";

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantStyle?: "text" | "contain" | "border";
  disable?: boolean;
  variant?: TypesButton;
  onPress?: () => void;
  styles?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<PropsButton> = ({
  variantStyle = "contain",
  disable = false,
  variant = "Secundary",
  onPress,
  children,
  ...rest
}) => {
  const callFunction = () => {
    if (disable === true) {
      return;
    }
    if (onPress !== undefined) {
      onPress();
    }
  };
  if (variantStyle === "text") {
    return (
      <ContainerText
        id="default-button-text"
        data-testid="default-button-text"
        variant={variant}
        disable={disable}
        onClick={callFunction}
        {...rest}
      >
        {children}
      </ContainerText>
    );
  }
  if (variantStyle === "border") {
    return (
      <ContainerText
        id="default-button-border"
        data-testid="default-button-border"
        border
        variant={variant}
        disable={disable}
        onClick={callFunction}
        {...rest}
      >
        {children}
      </ContainerText>
    );
  }
  return (
    <ContainerContain
      id="default-button"
      data-testid="default-button"
      variant={variant}
      disable={disable}
      onClick={callFunction}
      {...rest}
    >
      {children}
    </ContainerContain>
  );
};

export default Button;
