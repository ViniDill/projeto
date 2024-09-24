import styled from "styled-components";
import theme from "../../theme";

interface PropsInternal {
  error?: boolean;
  fontSize: "xs" | "sm" | "md" | "lg";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<PropsInternal>`
  color: ${theme.colors.neutrals90};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]};
  font-weight: 500;
  border: solid 1px
    ${(props) => (props.error ? theme.colors.error : theme.colors.neutrals60)};
  padding: ${theme.spacing.m} ${theme.spacing.l};
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

export const Title = styled.span<PropsInternal>`
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]};
  font-weight: 500;
  margin-bottom: ${theme.spacing.s};
  color: ${(props) =>
    props.error ? theme.colors.error : theme.colors.neutrals60};
`;

export const ErrorMessage = styled.span`
  color: ${theme.colors.error};
  font-size: ${theme.fontSize.sm};
`;
