import styled from "styled-components";

import theme from "../../theme";

interface PropsSpacer {
  size: "none" | "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

export const Container = styled.div<PropsSpacer>`
  margin-bottom: ${({ size }) => theme.spacing[size]};
`;
