import styled from "styled-components";
import theme from "../../theme";
import { TypesButton } from "../../Interfaces/themeInterfaces";

interface PropsButton {
  variantStyle?: "text" | "contain" | "border";
  disable?: boolean;
  variant: TypesButton;
  border?: boolean;
}

const ColorControlText = (variant: TypesButton) => {
  if (variant === "Primary") {
    return {
      "background-color": theme.colors.white,
      color: theme.colors.Primary500,
      "color-disable": theme.colors.Primary200,
      "color-hover": theme.colors.Primary700,
      "color-active": theme.colors.Primary700,
      "background-color-active": theme.colors.Primary50,
    };
  }
  if (variant === "Secundary") {
    return {
      "background-color": theme.colors.white,
      color: theme.colors.Secundary500,
      "color-disable": theme.colors.Secundary200,
      "color-hover": theme.colors.Secundary700,
      "color-active": theme.colors.Secundary700,
      "background-color-active": theme.colors.Secundary50,
    };
  }
  if (variant === "Tertiary") {
    return {
      "background-color": theme.colors.white,
      color: theme.colors.Tertiary500,
      "color-disable": theme.colors.Tertiary200,
      "color-hover": theme.colors.Tertiary700,
      "color-active": theme.colors.Tertiary700,
      "background-color-active": theme.colors.Tertiary50,
    };
  }
  if (variant === "Neutral") {
    return {
      "background-color": theme.colors.white,
      color: theme.colors.neutrals50,
      "color-disable": theme.colors.neutrals20,
      "color-hover": theme.colors.neutrals70,
      "color-active": theme.colors.neutrals10,
      "background-color-active": theme.colors.neutrals50,
    };
  }
};

export const ContainerText = styled.button<PropsButton>`
  cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    ColorControlText(props.variant)?.["background-color"]};
  color: ${(props) =>
    props.disable
      ? ColorControlText(props.variant)?.["color-disable"]
      : ColorControlText(props.variant)?.color};

  padding: ${theme.spacing.m} ${theme.spacing.s};
  font-size: ${theme.fontSize.md};
  text-align: center;
  width: 100%;
  border: solid ${({ border }) => (border ? 1 : 0)}px red;
  &:hover {
    color: ${({ variant }) => ColorControlText(variant)?.["color-hover"]};
  }
  &:active {
    color: ${({ variant }) => ColorControlText(variant)?.["color-active"]};
    background-color: ${({ variant }) =>
      ColorControlText(variant)?.["background-color-active"]};
  }
`;

const BackgroundContain = (variant: TypesButton) => {
  if (variant === "Primary") {
    return {
      "background-color": theme.colors.Primary50,
      "background-color-press": theme.colors.Primary700,
      "background-color-hover": theme.colors.Primary50,
      "color-hover": theme.colors.Primary700,
      color: theme.colors.Primary500,
      "disable-color": theme.colors.Primary200,
      "press-color": theme.colors.Primary50,
      "hover-color": theme.colors.Primary700,
    };
  }
  if (variant === "Secundary") {
    return {
      "background-color": theme.colors.Secundary50,
      "background-color-press": theme.colors.Secundary700,
      "background-color-hover": theme.colors.Secundary50,
      "color-hover": theme.colors.Secundary700,
      color: theme.colors.Secundary500,
      "disable-color": theme.colors.Secundary200,
      "press-color": theme.colors.Secundary50,
      "hover-color": theme.colors.Secundary700,
    };
  }
  if (variant === "Tertiary") {
    return {
      "background-color": theme.colors.Tertiary50,
      "background-color-press": theme.colors.Tertiary700,
      "background-color-hover": theme.colors.Tertiary50,
      "color-hover": theme.colors.Tertiary700,
      color: theme.colors.Tertiary500,
      "disable-color": theme.colors.Tertiary200,
      "press-color": theme.colors.Tertiary50,
      "hover-color": theme.colors.Tertiary700,
    };
  }
  if (variant === "Neutral") {
    return {
      "background-color": theme.colors.neutrals10,
      "background-color-press": theme.colors.neutrals70,
      "background-color-hover": theme.colors.neutrals10,
      "color-hover": theme.colors.neutrals70,
      color: theme.colors.neutrals50,
      "disable-color": theme.colors.neutrals20,
      "press-color": theme.colors.neutrals10,
      "hover-color": theme.colors.neutrals70,
    };
  }
};

export const ContainerContain = styled.button<PropsButton>`
  cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    BackgroundContain(props.variant)?.["background-color"]};
  color: ${(props) =>
    props.disable
      ? BackgroundContain(props.variant)?.["disable-color"]
      : BackgroundContain(props.variant)?.color};
  border: none;
  padding: ${theme.spacing.m} ${theme.spacing.s};
  font-size: ${theme.fontSize.md};
  text-align: center;
  width: 100%;
  &:hover {
    color: ${(props) => BackgroundContain(props.variant)?.["hover-color"]};
    background-color: ${(props) =>
      BackgroundContain(props.variant)?.["background-color-hover"]};
  }
  &:active {
    color: ${(props) => BackgroundContain(props.variant)?.["press-color"]};
    background-color: ${(props) =>
      BackgroundContain(props.variant)?.["background-color-press"]};
  }
`;
