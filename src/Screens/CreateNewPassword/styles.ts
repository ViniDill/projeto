import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
  width: 500px;
  ${media.lessThan("medium")`
  width: 320px;
  `}
`;

export const ContainerRules = styled.div``;

export const TitleRules = styled.h4`
  color: ${theme.colors.Primary500};
`;

export const List = styled.ul`
  padding-left: 19px;
  font-size: 13px;
  color: ${theme.colors.Primary500};
`;

export const MessageError = styled.span`
  color: ${theme.colors.error};
`;
