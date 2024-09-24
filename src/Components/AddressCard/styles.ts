import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.white};
  border: solid 1px ${theme.colors.Primary500};
  border-radius: ${theme.spacing.s};
  height: 107px;
  padding: 0 ${theme.spacing.m};
  justify-content: space-between;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${theme.spacing.s};
  align-items: center;
`;

export const ContainerAddres = styled.div`
  padding: 0 ${theme.spacing.s};
`;

export const RegulaText = styled.span`
  color: ${theme.colors.neutrals50};
`;

export const TitleHouse = styled.span`
  color: ${theme.colors.neutrals80};
`;

export const Content = styled.div`
  width: 100%;
`;

export const ContainerMenu = styled.div`
  border-radius: 50%;
  padding: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: ${theme.spacing.xs};
  &:hover {
    opacity: 0.6;
    background: rgba(0, 0, 0, 0, 0.4);
  }
`;

export const SelectedMenu = styled.div`
  border-radius: 50%;
  padding: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActionCont = styled.div`
  display: flex;
  flex-direction: row;
`;
