import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 500px;
  ${media.lessThan("medium")`
  width: 320px;
  `}
`;

export const AlignForgotPassword = styled.div`
  display: flex;
  justify-content: end;
`;
