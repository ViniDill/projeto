import styled from "styled-components";
import theme from "../../../../theme";
import media from "styled-media-query";

export const Container = styled.div``;

export const Title = styled.div`
  margin: 0;
  margin-bottom: ${theme.spacing.l};
  display: flex;
  flex-direction: column;
`;

export const Board = styled.div`
  display: grid;
  grid-template-areas: "prod prod prod prod prod nav";
  grid-gap: ${theme.spacing.l};
  ${media.lessThan("medium")`
    grid-template-areas: 
      "prod"
      "nav";            
  ;
  `}
`;

export const ProduContent = styled.div`
  grid-area: prod;
  .Card {
    padding: ${theme.spacing.m};
  }
  
  .TextArea {
    height: 200px;
  }

  .Dimension {
    display: flex;
    flex-wrap: wrap;
    .DescriptionContainer {
      flex: 1;
      margin-bottom: ${theme.spacing.s};
    }
    .DescriptionTitle,
    .DescriptionDimension {
      margin-bottom: ${theme.spacing.xs};
    }
  }
`;

export const PaddingCard = styled.div`
  padding: ${theme.spacing.m} ${theme.spacing.m};

  .LateralBox, .LateralTextArea {
    margin-left: ${theme.spacing.l};
    height: 90px;
  }

  .LateralTextArea {
    height: 200px;
  }

  .Label {
    margin-left: ${theme.spacing.l};
    max-width: 75px;

  }

  .Title {
    max-width: 95px;
  }
`;

export const LateralContent = styled.div`
  min-width: 275px;
  grid-area: nav;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.l};
  .CardContainer {
    padding: ${theme.spacing.m};
    .LateralTitle {
      margin-bottom: ${theme.spacing.s};
      max-width: 120px;
    }
    .LateralBox,
    .LateralTextArea,
    .Label {
      margin-bottom: ${theme.spacing.xs};
    }
  }
`;

export const Description = styled.div`

    .DescriptionTitle {
        max-width: 75px;
    }
    .DescriptionDimension {
        height: 70px;
    }
`;

export const SpaceDimension = styled.div`
  display: flex;
  gap: ${theme.spacing.m};
`;

export const InternalTitle = styled.span`
`;