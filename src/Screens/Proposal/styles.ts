import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";
import { H4 } from "../../DesingSystem/Title";

export const Container = styled.div``;
export const ContainerContent = styled.div``;

export const Content = styled.div`
  .Box {
    width: 100%;
    max-width: 850px;
    margin: auto;

    .Alert {
      display: flex;
      background-color: ${theme.colors.helpLight};
      color: ${theme.colors.help};
      border-radius: 4px;
    }
  }
`;

export const BackgroundContainer = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.l} ${theme.spacing["2xl"]} ${theme.spacing["2xl"]};

  ${media.lessThan("medium")`
        padding: ${theme.spacing.l};
    `}
`;

export const Title = styled(H4)``;

export const IdentificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CalculationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InvoiceDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RoofTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Division = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${theme.colors.neutrals40};
  background-color: ${theme.colors.neutrals40};
`;

export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 ${theme.spacing.l};

  ${media.lessThan("huge")`
        gap: 0 ${theme.spacing["2xl"]};
    `}

  ${media.lessThan("large")`
        gap: 0 ${theme.spacing.xl};
    `}

    ${media.lessThan("medium")`
        gap: 0 ${theme.spacing.m};
    `}

    label {
    font-size: ${theme.fontSize.sm};
  }
`;

export const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0 ${theme.spacing.l};

  ${media.lessThan("huge")`
        gap: 0 ${theme.spacing["2xl"]};
    `}

  ${media.lessThan("large")`
        gap: 0 ${theme.spacing.xl};
    `}

    ${media.lessThan("medium")`
        gap: 0 ${theme.spacing.m};
    `}
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${theme.colors.neutrals60};
  }

  .SelectInput {
    background-color: transparent;
  }

  .Input {
    height: 45px;
    padding: 0 ${theme.spacing.l};
  }
`;

export const BoxBottomInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${theme.colors.neutrals60};
  }

  .SelectInput {
    background-color: transparent;
  }

  .Input {
    height: 45px;
    padding: 0 ${theme.spacing.l};
  }
`;

export const Desktop = styled.div`
  ${media.lessThan("medium")`
        display: none;
    `}
`;

export const Mobile = styled.div`
  display: none;

  ${media.lessThan("medium")`
        display: inherit;
    `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .SendButton {
    width: 264px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    font-size: ${theme.fontSize.xl};
  }
`;

export const DropDivision = styled.div`
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.black};
  border-radius: 6px;
  padding: 0 ${theme.spacing.l} ${theme.spacing.l};
  margin: 0 ${theme.spacing.s} 0 0;
  box-shadow: 0 1px 5px ${theme.colors.black};
`;

export const BackgroundContainerMobile = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.l};
  border-radius: 6px;
  margin: 0 ${theme.spacing.s} ${theme.spacing.s} 0;
`;
