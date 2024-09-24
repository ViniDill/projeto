import styled from "styled-components";
import theme from "../../theme";

interface ContainerProps {
  size: "md" | "lg";
  bold: boolean;
  align: "left" | "center" | "right";
}

export const Container = styled.p<ContainerProps>`
  font-size: ${({ size }) => theme.fontSize[size]};
  font-weight: ${({ bold }) => (bold ? 600 : "normal")};
  text-align: ${({ align }) => align};
`;