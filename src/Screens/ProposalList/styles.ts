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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 275px;
    height: 49px;
    font-size: ${theme.fontSize.xl};
    border-radius: 6px;
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

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.l};

  .SearchButton {
    display: flex;
    width: 105px;
    height: 50px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;

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
    padding: ${theme.spacing.m} ${theme.spacing.xl};
    background-color: ${theme.colors.Tertiary50};
  }

  td {
    padding: ${theme.spacing.s} ${theme.spacing.xl};
    text-align: center;
    align-items: center;

    button {
      background: none;
      border: none;
    }

    .Options{
      cursor: pointer;
    }
  }

  ${media.lessThan("large")`
     display: none;
  `}

    .Date{
        text-align: left;
        width: 12%;
    }
    .Number{
        text-align: left;
        width: 12%;
    }
    .Client{

        text-align: left;
        width: 20%;
    }
    .Stage{
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .Value{
        text-align: center;
        width: 10%;
    }
    .Action{
        text-align: center;
        width: 5%;
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

export const ContainerTable = styled.div``;

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

  .ProposalNumber {
    font-size: ${theme.fontSize.sm};
  }
  
  .MobileStatus {
    display: flex;
    flex-direction: column;
    font-size: ${theme.fontSize.xs};

    .status {
      &.Completed {
        color: ${theme.colors.succcess};
      }
      &.Inspection {
        color: ${theme.colors.warning};
      }
      &.Canceled {
        color: ${theme.colors.error};
      }
      &.Sale {
        color: ${theme.colors.Secundary400};
      }
      &.Execution {
        color: ${theme.colors.Tertiary400};
      }
      &.Administrative {
        color: ${theme.colors.Primary400};
      }
    }
  }
`;

export const MobileIcon = styled.div`
  .IconRotated {
    transform: rotate(90deg);
  }
`;



export const DrawerComponents = styled.div`
  display: flex;
  align-items: left;

  .DateProposal{
    width: 159px;
  }

  span {

    font-size: ${theme.fontSize.lg};
    margin-bottom: ${theme.spacing.l};

    ${media.lessThan("large")`
      font-size: ${theme.fontSize.sm};
      margin-top: ${theme.spacing.s};
      margin-bottom: ${theme.spacing.xl};
      `
    } 
  }
`;

export const DrawerComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  .ExitImg {
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin: ${theme.spacing.m};

    ${media.lessThan("large")`
      margin-left: auto;
    width: 15px;
    height: 15px;
      `
    } 
  }
`;

export const DrawerPadding = styled.div`
  padding: 0 ${theme.spacing["2xl"]};

  .DrawerData{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .DrawerDivisionNumber{
    display: flex;
    justify-content: left;
    align-items: center;

    ${media.lessThan("medium")`
      justify-content: center;
      `
    } 


    .DrawerProposalNumber {
      margin-left: ${theme.spacing.s};
      color: ${theme.colors.Primary500};
    }
  }
`;

export const DrawerButtons = styled.div`
  display: flex;

  .DrawerButton {
    font-size: ${theme.fontSize.xl};

    &.Right{
      margin-left: ${theme.spacing.l};
      margin-right: ${theme.spacing.l};
    }

    &.Left{
      margin-left: ${theme.spacing.l};
    }
  }
`;

export const ItemDivision = styled.div`
  width: 100%;

  label {
    font-size: ${theme.fontSize.xs};
  }

  .status {
    &.Completed {
      color: ${theme.colors.succcess};
    }
    &.Inspection {
      color: ${theme.colors.warning};
    }
    &.Canceled {
      color: ${theme.colors.error};
    }
    &.Sale {
      color: ${theme.colors.Secundary400};
    }
    &.Execution {
      color: ${theme.colors.Tertiary400};
    }
    &.Administrative {
      color: ${theme.colors.Primary400};
    }
  }
`;

export const ItemDivisionMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: ${theme.spacing.s} 0;

  span{
    font-size: ${theme.fontSize.xs};
  }
`;

export const ProposalButton = styled.button`
  display: flex;
  width: 100%;
  background-color: ${theme.colors.white};
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  border: ${theme.colors.neutrals60} solid 0.7px;
  border-radius: 4px;
  padding: ${theme.spacing.xs} ${theme.spacing["2xl"]};
  cursor: pointer;

  :hover{
    background-color: ${theme.colors.Tertiary300};
  }

  :active{
    background-color: ${theme.colors.Tertiary500};
  }
`

export const DrawerFullScreen = styled.div`
  ${media.lessThan("large")`
    display: none;
  `}
`

export const DrawerMobile = styled.div`
  display: none;

  ${media.lessThan("large")`
    display: inherit;
  `}
`

export const DrawerComponentsMobile = styled.div``