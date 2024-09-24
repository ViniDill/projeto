import styled from "styled-components";
import theme, { FontSize } from "../../theme";
import { SubtitleProps } from ".";

export const S1 = styled.p<SubtitleProps>`
  font-size: ${({ size }) => (size === "lg" ? FontSize.lg : FontSize.xl)}px;
  color: ${theme.colors.neutrals90};
  font-weight: ${({ bold }) => (bold ? "bold" : "500")};
  text-align: ${({ align }) => align};
`;

export const S2 = styled.p`
  font-size: ${FontSize.lg}px;
  color: ${theme.colors.neutrals90};
`;
