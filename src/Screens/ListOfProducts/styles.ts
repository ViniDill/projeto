import styled from "styled-components";
import { H4 } from "../../DesingSystem/Title";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled(H4)`
  margin: 0;
  margin-bottom: ${theme.spacing.l};
`;

export const ContainerFilter = styled.div`
  display: grid;
  grid-template-areas: "input input input input input button";
  grid-gap: ${theme.spacing.l};
  .buttonContainer {
    grid-area: button;
  }
`;

export const ContainerInput = styled.div`
  grid-area: input;
`;

export const Content = styled.div`
  padding: ${theme.spacing.l};
`;

export const ContainerTable = styled.div``;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  thead {
    background-color: ${theme.colors.Tertiary50};
  }
  th {
    text-align: left;
    padding: ${theme.spacing.s};
  }
  ${media.lessThan("large")`
     display: none;
  `}
  td {
    padding: ${theme.spacing.s};
  }
`;

export const IconTable = styled.th`
  width: 60px;
  text-align: center !important;
`;

export const IconBody = styled.td`
  text-align: center;
  cursor: pointer;
`;

export const TableContent = styled.tbody`
  background-color: ${theme.colors.Tertiary50};
  tr:nth-child(odd) {
    background-color: ${theme.colors.Tertiary100};
  }
  tr:hover {
    background-color: ${theme.colors.Tertiary200};
  }
`;

export const ContainerDialog = styled.div`
  text-align: center;
  padding: ${theme.spacing.m};
`;

export const TitleDialog = styled.h2`
  color: ${theme.colors.neutrals80};
`;

export const DialogText = styled.span`
  color: ${theme.colors.neutrals50};
  font: ${theme.fontSize.sm};
`;

export const ConfirmContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const ContainerMobile = styled.div`
  display: none;
  ${media.lessThan("large")`
  display: inherit;
  `}
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.m};
`;

export const ContainerPills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: ${theme.spacing.m};
  ${media.lessThan("medium")`
  grid-template-columns: 1fr 1fr 1fr;
  `};
  ${media.lessThan("small")`
  grid-template-columns: 1fr 1fr;
  `};
`;
