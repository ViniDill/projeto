import styled from "styled-components";
import theme, { FontSize } from "../../theme";

interface MenuProps {
  selected: boolean;
  variant?: "regular" | "logout";
}

export const MenuContainer = styled.button<MenuProps>`
  background-color: ${({ selected, variant }) =>
    variant === "logout"
      ? theme.colors.error
      : selected
      ? theme.colors.Primary100
      : theme.colors.white};
  color: ${({ variant }) =>
    variant === "logout" ? theme.colors.white : theme.colors.neutrals70};
  font-size: ${FontSize.lg}px;
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: 10px;
  height: 65px;

  img {
    margin: ${theme.spacing.m};
    width: 33px;
    height: 33px;
  }

  &:hover {
    background-color: ${({ variant }) =>
      variant === "logout" ? theme.colors.error : theme.colors.Primary200};
  }

  &:active {
    background-color: ${({ variant }) =>
      variant === "logout" ? theme.colors.error : theme.colors.Primary100};
  }
`;
