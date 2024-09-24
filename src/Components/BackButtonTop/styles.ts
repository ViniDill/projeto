import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.span`
  color: ${theme.colors.neutrals50};
  padding-left: 5px;
`;
