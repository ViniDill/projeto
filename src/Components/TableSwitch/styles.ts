import styled from "styled-components";
import theme from "../../theme";

interface ContainerProps {
  index: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing.s} 8px;
  background-color: ${({ index }) =>
    index / 2 ? theme.colors.Tertiary50 : theme.colors.Tertiary100};
`;

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Action = styled.div`
  min-width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
`;
