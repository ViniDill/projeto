import styled from "styled-components";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div``;

export const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${theme.spacing.l};
  gap: ${theme.spacing.l};
  ${media.lessThan("medium")`
    justify-content: center;
  `};
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: right;
  padding: 0 ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.l};
  div {
    width: 210px;
  }
`;
