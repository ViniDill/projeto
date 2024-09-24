import styled from "styled-components";
import theme, { FontSize } from "../../../theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Arrow = styled.img`
  width: ${FontSize.md}px;
  height: ${FontSize.md}px;
  cursor: pointer;
  transition: filter 0.3s ease;

  padding: 0 ${theme.spacing.m};

  &:hover {
    filter: brightness(2.0);
  }

  &:active {
    filter: brightness(0.5);
  }
`;

export const PageNumber = styled.span<{ isSelected: boolean }>`
  margin: 0 ${theme.spacing.xs};
  padding: ${theme.spacing.xs} ${theme.spacing.s};
  cursor: pointer;
  border-radius: ${theme.spacing.xs};
  background-color: ${(props) =>
    props.isSelected ? theme.colors.neutrals70 : "transparent"};
  transition: background-color 0.3s ease, color 0.3s ease;

  color: ${(props) => (props.isSelected ? theme.colors.neutrals10 : "inherit")};
  font-size: ${FontSize.md}px;

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? theme.colors.neutrals70 : theme.colors.neutrals30};
  }
`;