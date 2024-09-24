import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div``;

export const ContainerCard = styled.div`
  ${media.lessThan("medium")`
  grid-template-columns: 1fr;
  `};
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${theme.spacing.xl};
  ${theme.spacing["2xl"]};
`;

export const ContainerBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    padding: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
  color: ${theme.colors.Primary500};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  ${media.lessThan("medium")`
  grid-template-columns: 1fr;
  `};
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  ${media.lessThan("medium")`
  display:none; `};
`;

export const Waning = styled.div`
  padding: ${theme.spacing.m} ${theme.spacing.xl};
`;

export const BtnMob = styled.div`
  ${media.greaterThan("medium")`
    display: none;
    `};
`;
