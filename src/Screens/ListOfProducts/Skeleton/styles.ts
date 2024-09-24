import styled from "styled-components";
import theme from "../../../theme";

export const Container = styled.div``;

export const InternalCard = styled.div`
  padding: ${theme.spacing.m};
`;

export const SearchSpace = styled.div`
  display: grid;
  grid-template-areas: "search search search button";
  gap: ${theme.spacing.m};
  width: 100%;
`;

export const Search = styled.div`
  grid-area: search;
`;

export const Button = styled.div`
  grid-area: button;
`;
