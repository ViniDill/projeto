import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  width: 500px;
  ${media.lessThan("medium")`
  width: 320px;
  `}
`;

export const TextContainer = styled.div``;

export const AlignButtons = styled.div``;
