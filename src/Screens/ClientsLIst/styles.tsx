import styled from "styled-components";
import theme from "../../theme";
import { H4 } from "../../DesingSystem/Title";
import media from "styled-media-query";

export const Container = styled.div`
  padding: ${theme.spacing.l};
  border-radius: 4px;

  ${media.lessThan("large")`
    padding: ${theme.spacing.m} 0 0;
  `}
`;

export const ContainerContent = styled.div``;

export const Content = styled.div`
  padding: ${theme.spacing["2xl"]} ${theme.spacing["3xl"]} ${theme.spacing.l};
  background-color: ${theme.colors.white};
  border-radius: 4px;

  ${media.lessThan("large")`  
    padding: ${theme.spacing.l} ${theme.spacing.m} ${theme.spacing.m};
  `}
`;

export const Title = styled(H4)`
  margin: 0;
  margin-bottom: ${theme.spacing.l};
`;
export const ContainerTable = styled.div``;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  th {
    padding: ${theme.spacing.m} ${theme.spacing.l};
    background-color: ${theme.colors.Tertiary50};
  }

  td {
    padding: ${theme.spacing.s} ${theme.spacing.l};

    .PhoneLink {
      color: ${theme.colors.neutrals80};

      &:hover {
        color: ${theme.colors.Primary500};
      }
    }
  }

  ${media.lessThan("large")`
     display: none;
  `}

  .Name {
    text-align: left;
  }

  .Email {
    text-align: left;
  }

  .Phone {
    text-align: left;
  }

  .TableIcon {
    text-align: center;
    width: 10%;
  }
`;

export const IconBody = styled.td`
  display: flex;
  justify-content: center;
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

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.l};

  .SearchButton {
    display: flex;
    width: 105px;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 8px;

    ${media.lessThan("large")`
     display: none;
  `}
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
`;

export const Filter = styled.div`
  display: flex;
  background-color: ${theme.colors.neutrals30};
  justify-content: center;
  align-items: center;
  height: 37px;
  border-radius: 4px;

  .FilterText {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  .FilterIcon {
    display: none;

    ${media.lessThan("large")`
      display: inherit;
    `}
  }
`;

export const MobileContainer = styled.div`
  display: none;
  align-items: center;
  background-color: ${theme.colors.Tertiary50};
  &:nth-child(odd) {
    background-color: ${theme.colors.Tertiary100};
  }
  &:hover {
    background-color: ${theme.colors.Tertiary200};
  }

  ${media.lessThan("large")`
    display: flex;
    justify-content: space-between;
    padding: 0 ${theme.spacing.l};
  `}
`;

export const MobileContent = styled.div``;

export const MobileIcon = styled.div`
  .IconRotated {
    transform: rotate(90deg);
    margin-top: ${theme.spacing.xs};
    margin-left: ${theme.spacing.m};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DrawerComponents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .PhoneLink {
    color: ${theme.colors.neutrals80};

    &:hover {
      color: ${theme.colors.Primary500};
    }
  }
`;

export const DrawerComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DrawerPadding = styled.div`
  padding: ${theme.spacing.l} ${theme.spacing["2xl"]} 0;
`;

export const DrawerButtons = styled.div`
  display: flex;

  .DrawerButton {
    font-size: ${theme.fontSize.xl};
  }
`;
