import styled from "styled-components";
import theme from "../../../theme";

export const Container = styled.div``;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: ${theme.spacing.s};
`;
