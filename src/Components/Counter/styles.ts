import styled from "styled-components";
import theme from "../../theme";

export const MainContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: solid 1px ${theme.colors.neutrals50};
  border-radius: 4px;
  padding: ${theme.spacing.s};
  div {
    display: flex;
  }
  min-height: 29px;
  margin-bottom: ${theme.spacing.m};
`;

export const Controller = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  &:hover {
    background-color: ${theme.colors.neutrals20};
  }
`;

export const SubTitle = styled.span`
  font-size: ${theme.fontSize.sm};
  font-weight: 500;
  color: ${theme.colors.neutrals60};
  margin-bottom: ${theme.spacing.m};
`;
