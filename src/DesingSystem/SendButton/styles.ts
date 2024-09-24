import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.button`
  width: 100%;
  height: 35px;
  border: none;
  background-color: ${theme.colors.Primary700};
  color: ${theme.colors.Secundary50};
  font-size: ${theme.fontSize.lg};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.Primary900};
  }

  &:active {
    background-color: ${theme.colors.Primary500};
  }
`;
