import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  margin: auto;
`;

interface CodeDigitProps {
  invalid?: boolean;
}

export const CodeDigit = styled.input<CodeDigitProps>`
  width: 52px;
  height: 52px;
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.xl};
  border-radius: 4px;
  margin: 0 1.5%;
  text-align: center;
  border: 1px solid ${(props) => (props.invalid ? theme.colors.error : theme.colors.neutrals90)};

  &:focus {
    outline: none;
    box-shadow: 0 0 1px 0.5px ${theme.colors.black};
  }
`;

export const ErrorMessage = styled.span`
  color: ${theme.colors.error};
  font-size: ${theme.fontSize.sm};
  margin-top: 8px;
`;
