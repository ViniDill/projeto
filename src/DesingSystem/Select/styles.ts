import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
interface errorProps {
  error?: boolean;
}

export const SelectContainer = styled.select<errorProps>`
  padding: ${theme.spacing.m} ${theme.spacing.l};
  font-size: ${theme.fontSize.sm};
  border-radius: 4px;
  border-color: ${({ error }) => (error ? theme.colors.error : "unset")};
`;

export const Title = styled.span`
  font-size: ${theme.fontSize.sm};
  margin-bottom: ${theme.spacing.s};
  color: ${theme.colors.neutrals60};
`;

export const ErrorMessage = styled.span`
  color: ${theme.colors.error};
  font-size: ${theme.fontSize.sm};
`;
