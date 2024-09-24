import styled from "styled-components";
import theme, { FontSize, Spacing } from "../../theme";

interface ButtonProps {
  selected: boolean;
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 0;
  padding: ${Spacing.s}px ${Spacing.m}px ${Spacing.s}px 85px ;
  width: 100%;
  color: ${theme.colors.neutrals70};
  background-color: ${(props) =>
    props.selected ? theme.colors.Primary200 : theme.colors.white};


`;

export const Label = styled.span`
  font-size: ${FontSize.md}px;
  color: ${theme.colors.neutrals80};
  text-align: left;
  width: 100%;
  
  &:hover {
    color: ${theme.colors.Primary300};
  }

  &:active {
    color: ${theme.colors.white};
  }
`;