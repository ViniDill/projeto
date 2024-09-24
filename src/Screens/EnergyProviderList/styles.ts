import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";
import { H4 } from "../../DesingSystem/Title";


export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: ${theme.spacing.l} 0;

  .RegisterButton{
    width: 158px;
    height: 49px;
    font-size: ${theme.fontSize.lg};
  }

  ${media.lessThan("large")`
  
    .RegisterButton{
      display: none;
    }

    .RegisterIcon {
      width: 30px;
      height: 30px;
    }
  `}
`

export const RegisterIconContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      display: none;

      &:active {
        background-color: ${theme.colors.Primary300};
        border-radius: 50px;
      }  
      
      ${media.lessThan("large")`
        display: inherit;
    `}
      
      
`

export const Title = styled(H4)`
  margin: 0;

  ${media.lessThan("large")`  
    font-size: ${theme.fontSize.xl};
  `}
`;

export const ContainerContent = styled.div``;

export const Content = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing["2xl"]};
  background-color: ${theme.colors.white};
  border-radius: 4px;

  ${media.lessThan("large")`  
    padding: ${theme.spacing.l} ${theme.spacing.m} ${theme.spacing.m};
  `}
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  .Status {
    .StatusContainer {
      display: flex;
      width: 110px;
      height: 30px;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 25px;
      border: ${theme.colors.white} solid 2px;
      color: ${theme.colors.white};

      &.Atualizado {
        background-color: ${theme.colors.succcess};
      }
      &.Atualizar {
        background-color: ${theme.colors.warning};
      }
      &.Desatualizado {
        background-color: ${theme.colors.error};
      }
    }
  }

  th {
    padding: ${theme.spacing.m} ${theme.spacing.l};
    background-color: ${theme.colors.Tertiary50};
  }

  td {
    padding: ${theme.spacing.s} ${theme.spacing.l};
    text-align: center;
    align-items: center;

    button {
      background: none;
      border: none;
    }
  }

  ${media.lessThan("large")`
     display: none;
  `}

  .Name {
    text-align: left;
    width: 70%;
    padding-left: ${theme.spacing["3xl"]};

    ${media.lessThan("huge")`
     width: 20%;
  `}
  }

  .Status {
    width: 10%;
    padding: 0;
    padding-right: ${theme.spacing.xl};
  }

  .TableIcon {
    width: 5%;
  }

.TableIconDelete {
  width: 5%;
  padding-right: ${theme.spacing["3xl"]};


  .DeleteButton {
  border: none;
  background: none;
  } 

  .DeleteIcon {
    cursor: pointer;
  }
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

    ${media.lessThan("large")`
     display: none;
  `}
  }
`;

export const ContainerTable = styled.div``;

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

export const MobileContent = styled.div`

  .MobileStatus {
    &.Atualizado {
        color: ${theme.colors.succcess};
      }
      &.Atualizar {
        color: ${theme.colors.warning};
      }
      &.Desatualizado {
        color: ${theme.colors.error};
      }
  }
`;

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

  .DrawerStatus {
    color: white;
    &.Atualizado {
        color: ${theme.colors.succcess};
      }
      &.Atualizar {
        color: ${theme.colors.warning};
      }
      &.Desatualizado {
        color: ${theme.colors.error};
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

export const ConfirmationBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.l};
`;

export const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .ButtonConfirm {
    width: 84px;
    margin-top: ${theme.spacing.l};
  }
`