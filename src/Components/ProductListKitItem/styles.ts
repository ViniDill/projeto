import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  background-color: ${theme.colors.neutrals10};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: ${theme.spacing.s};
`;

export const Title = styled.h2`
  color: ${theme.colors.Primary500};
  font-size: ${theme.fontSize.lg};
`;

export const ContainerSubTitles = styled.div`
  color: ${theme.colors.neutrals80};
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonClose = styled.div`
  cursor: pointer;
  padding: ${theme.spacing.s};
  &:hover {
    opacity: 0.6;
  }
`;

export const ContainerPrice = styled.div`
  display: grid;
  grid-template-areas: "price counter";
  gap: ${theme.spacing.m};
  align-items: flex-start;
`;

export const Price = styled.div`
  grid-area: price;
`;

export const CounterCont = styled.div`
  grid-area: counter;
`;

export const SubTitle = styled.span`
  font-size: ${theme.fontSize.sm};
`;

export const MiniTitle = styled.span`
  font-size: ${theme.fontSize.xs};
`;
