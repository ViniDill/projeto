import styled from "styled-components";
import { H4 } from "../../DesingSystem/Title";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div``;

export const Title = styled(H4)`
  margin: 0;
  margin-bottom: ${theme.spacing.l};
`;

export const Content = styled.div`
  padding: ${theme.spacing.m};
`;

export const Table = styled.div``;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 8px;
  background-color: ${theme.colors.Tertiary50};
`;

export const ActionTitle = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerFilter = styled.div`
  display: grid;
  grid-template-areas: "input input input input input button";
  grid-gap: ${theme.spacing.l};
  padding: ${theme.spacing.m} 0;
  .buttonContainer {
    grid-area: button;
  }
`;

export const InputContainer = styled.div`
  grid-area: input;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContainerModal = styled.div`
  min-width: 290px;
  padding: ${theme.spacing.m};
  ${media.greaterThan("medium")`
     min-width: 480px;
  `}
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing.m};
`;
