import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  background-color: ${theme.colors.Primary50};
  text-align: center;
  padding: ${theme.spacing["2xl"]} ${theme.spacing.l};
`;

export const ContainerButton = styled.div`
  max-width: 320px;
  margin: 0 auto;
`;
