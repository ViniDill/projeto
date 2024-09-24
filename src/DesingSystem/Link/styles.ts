import styled from "styled-components";
import theme, { FontSize } from "../../theme";
import { EnumMainColors, EnumSizes } from "../../Interfaces/themeInterfaces";

const ButtonColor = (item?: string) => {
  if (item === EnumMainColors.Secundary) {
    return theme.colors.Secundary400;
  }
  if (item === EnumMainColors.Tertiary) {
    return theme.colors.Tertiary400;
  }
  if (item === EnumMainColors.Neutral) {
    return theme.colors.neutrals40;
  }
  return theme.colors.Primary400;
};

const ButtonSize = (item?: string) => {
  if (item === EnumSizes.xs) {
    return `${FontSize.xs}px`;
  }
  if (item === EnumSizes.md) {
    return `${FontSize.md}px`;
  }
  return `${FontSize.sm}px`;
};

const HoverColor = (item?: string) => {
  if (item === EnumMainColors.Secundary) {
    return theme.colors.Secundary900;
  }
  if (item === EnumMainColors.Tertiary) {
    return theme.colors.Tertiary900;
  }
  if (item === EnumMainColors.Neutral) {
    return theme.colors.neutrals90;
  }
  return theme.colors.Primary900;
};

const DisableColors = (item?: string) => {
  if (item === EnumMainColors.Secundary) {
    return theme.colors.Secundary300;
  }
  if (item === EnumMainColors.Tertiary) {
    return theme.colors.Tertiary300;
  }
  if (item === EnumMainColors.Neutral) {
    return theme.colors.neutrals30;
  }
  return theme.colors.Primary300;
};

interface ContainerProps {
  type?: string;
  size?: string;
  disable?: boolean;
  style?: React.CSSProperties;
  className?: string;
  align: "left" | "right" | "center";
}

export const Container = styled.a<ContainerProps>`
  text-align: ${({ align }) => align};
  color: ${({ type, disable }) =>
    disable ? DisableColors(type) : ButtonColor(type)};
  font-size: ${({ size }) => ButtonSize(size)};
  &:hover {
    color: ${({ type }) => HoverColor(type)};
  }
  text-decoration: none;
`;
