import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div``;

export const Background = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 30px;
  border-radius: 20px;
  border: 2px solid ${theme.colors.white};
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.white};
  padding: ${theme.spacing.xs};

  &.StatusBackground {
    &.status-1 {
      background-color: ${theme.colors.Secundary400};
    }
    &.status-2 {
      background-color: ${theme.colors.warning};
    }
    &.status-3 {
      background-color: ${theme.colors.Primary400};
    }
    &.status-4 {
      background-color: ${theme.colors.Tertiary400};
    }
    &.status-5 {
      background-color: ${theme.colors.succcess};
    }
    &.status-6 {
      background-color: ${theme.colors.error};
    }
  }
`;
