import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div``;

export const ContainerCard = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing["2xl"]};
  ${media.lessThan("medium")`
  padding: ${theme.spacing.m} ${theme.spacing.m};
  `}
`;

export const Title = styled.h3`
  font: ${theme.fontSize.lg};
`;

export const ConainterTarrif = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.m};
  ${media.lessThan("medium")`
  grid-template-columns: 1fr;
  `};
`;

export const ContainerTitle = styled.div`
  gap: ${theme.spacing.m};
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  ${media.lessThan("medium")`
  grid-template-columns: 1fr;
  `};
`;
