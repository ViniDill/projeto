import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
  width: 500px;
  ${media.lessThan("medium")`
  width: 320px;
  `}
`;

export const AlignLink = styled.div`
  text-align: center;
`;

export const LabelError = styled.span`
  color: ${theme.colors.error};
  font-size: ${theme.fontSize.sm};
`;
