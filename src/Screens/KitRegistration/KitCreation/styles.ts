import styled from "styled-components";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div`
  padding: ${theme.spacing.s};
`;

export const BackgroundContainer = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing["2xl"]};

  ${media.lessThan("small")`
        padding: ${theme.spacing.l};
        `}

  .DivisionBottom {
    margin: ${theme.spacing["2xl"]} 0 0 0;
  }
`;

export const Division = styled.div`
  border: solid 1px ${theme.colors.black50};
`;

export const HeaderContainer = styled.div`
  .H3 {
    ${media.lessThan("medium")`
            font-size: ${theme.fontSize.xl};
        `}
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl} 0;
  margin: ${theme.spacing["3xl"]} 0;
`;

export const MiddleContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 660px;
`;

export const SelectedItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl} 0;
`;

export const SelectedItemsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl} ${theme.spacing["3xl"]};

  ${media.lessThan("large")`
        grid-template-columns: 1fr ;
    `}
`;

export const Amount = styled.div`
  display: flex;
  justify-content: right;
  gap: 0 ${theme.spacing.s};
  padding: ${theme.spacing.s} 0 0 0;
  align-items: center;

  .Price {
    color: ${theme.colors.Primary500};
    font-size: ${theme.fontSize.xl};
  }
`;

export const Observation = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.l};
  margin: ${theme.spacing.l} 0 ${theme.spacing["2xl"]};
`;

export const Finish = styled.div`
  width: 145px;
  margin: 0 0 ${theme.spacing.l} auto;
`;

export const ObservationTitle = styled.div`
  display: flex;
  gap: 0 ${theme.spacing.l};
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${theme.spacing.m};
  ${media.lessThan("large")`
  grid-template-columns: 1fr;
  `}
`;
