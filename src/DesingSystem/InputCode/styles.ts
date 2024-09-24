import styled from "styled-components";
import theme from "../../theme";

interface PropsInternal {
  error?: boolean;
  fontSize: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Container = styled.div`
  display: flex;
`;

export const CodeDigit = styled.input<PropsInternal>`
  width: 47px;
  height: 47px;
  border: 1px solid
    ${(props) => (props.error ? theme.colors.error : theme.colors.neutrals90)};
  color: ${theme.colors.black};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]};
  border-radius: 4px;
  margin-right: 24px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
