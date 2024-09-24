import React from "react";
import { MenuContainer } from "./styles";

export interface MenuButtonProps {
  iconName: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  variant?: "regular" | "logout";
}

const MenuButton: React.FC<MenuButtonProps> = ({
  label,
  iconName,
  selected = false,
  onClick,
  variant = "regular",
}) => {
  return (
    <MenuContainer
      selected={selected}
      className={selected ? "selected" : ""}
      data-testid="menu-button"
      onClick={onClick}
      variant={variant}
    >
      <img src={`/icons/${iconName}.svg`} alt={iconName} />
      <span>{label}</span>
    </MenuContainer>
  );
};

export default MenuButton;
