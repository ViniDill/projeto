import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div``;

export const ReadContainer = styled.div<{ align: string }>`
  border: solid 1px ${theme.colors.Primary500};
  background-color: ${theme.colors.Primary100};
  border-radius: 4px;
  padding: ${theme.spacing.s};
  text-align: ${({ align }) => align};
  min-height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: ${theme.colors.Primary500};
    text-align: ${({ align }) => align};
  }
`;

export const SubTitle = styled.span`
  font-size: ${theme.fontSize.sm};
  font-weight: 500;
  color: ${theme.colors.neutrals60};
  margin-bottom: ${theme.spacing.m};
`;
