import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: ${theme.spacing.m};
  cursor: pointer;
  align-items: center;
  &:active {
    opacity: 0.6;
  }
`;

export const Text = styled.span`
  color: ${theme.colors.neutrals50};
  padding-left: ${theme.spacing.m};
`;
