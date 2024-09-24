import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div``;

interface titleProps {
  error?: boolean;
}

export const Title = styled.span<titleProps>`
  font-size: ${theme.fontSize.sm};
  font-weight: 500;
  margin-bottom: ${theme.spacing.s};
  color: ${(props) =>
    props.error ? theme.colors.error : theme.colors.neutrals60};
`;

export const TextArea = styled.textarea<titleProps>`
  padding: ${theme.spacing.m} ${theme.spacing.l};
  font-size: ${theme.fontSize.sm};
  border-radius: 4px;
  border-color: ${({ error }) => (error ? theme.colors.error : "unset")};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.span`
  color: ${theme.colors.error};
  font-size: ${theme.fontSize.sm};
`;
