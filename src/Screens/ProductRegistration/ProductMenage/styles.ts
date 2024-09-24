import styled from "styled-components";
import { H4 } from "../../../DesingSystem/Title";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div``;

export const Title = styled(H4)`
  margin: 0;
  margin-bottom: ${theme.spacing.l};
`;

export const Board = styled.div`
  display: grid;
  grid-template-areas: "prod prod prod prod nav nav";
  grid-gap: ${theme.spacing.l};
  ${media.lessThan("medium")`
  grid-template-areas: 
            "prod"
            "nav";            
  ;
  `}
`;

export const ProduContet = styled.div`
  grid-area: prod;
`;

export const PaddingCard = styled.div`
  padding: ${theme.spacing.m} ${theme.spacing.m};
`;

export const LateralContent = styled.div`
  min-width: 275px;
  grid-area: nav;
  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column-reverse;
  `}
`;

export const SpaceFase = styled.div`
  display: flex;
  gap: 0 14px;
  flex-wrap: wrap;
`;

export const SpaceDimension = styled.div`
  display: flex;
  gap: 0 14px;
  flex-wrap: wrap;
`;

export const InternalTitle = styled.span`
  color: ${theme.colors.neutrals60};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
