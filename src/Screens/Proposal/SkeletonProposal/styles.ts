import styled from "styled-components";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div`
  padding: ${theme.spacing.s};
`;

export const BackGroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.xl};

  ${media.lessThan("medium")`
        display: none;
    `}

  .Division {
    width: 100%;
    height: 1px;
  }

  .Middle {
    width: 100%;
    max-width: 739px;
    height: 49px;
    margin: auto;
  }
`;

export const TwoColumnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0 ${theme.spacing["2xl"]};

  > div {
    flex: 1 1 calc(45% - 16px);
    max-width: calc(45% - 16px);
  }
`;

export const ThreeColumnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0 ${theme.spacing.l};

  ${media.lessThan("huge")`
        gap: 0 ${theme.spacing.xl};
    `}

  ${media.lessThan("large")`
        gap: 0 ${theme.spacing.l};
    `}

    > div {
    flex: 1 1 30%;
    max-width: 300px;
  }
`;

export const BonesContent = styled.div`
  .TwoBones {
    max-width: 550px;
    height: 41px;
  }

  .ThreeBones {
    max-width: 300px;
    height: 41px;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  gap: ${theme.spacing.s};
`;

export const FinalContainer = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BackgroundContainerMobile = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.l} ${theme.spacing.l} ${theme.spacing["3xl"]};
  display: none;

  ${media.lessThan("medium")`
        display: inherit;
    `}
`;

export const ButtonContainerMobile = styled.div`
  display: flex;
  background-color: ${theme.colors.white};
  display: none;
  padding: ${theme.spacing.l};

  .Button {
    margin: auto;
  }

  ${media.lessThan("medium")`
        display: inherit;
    `}
`;
