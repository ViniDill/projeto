import styled from "styled-components";
import theme from "../../../theme";

export const Container = styled.div``;

export const InternalContainer = styled.div`
  padding: ${theme.spacing.l};
`;

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${theme.spacing.m};
`;
