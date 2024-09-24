import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  width: 500px;
  ${media.lessThan("medium")`
  width: 320px;
  `}
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const AlignInputs = styled.div``;

export const ButtonContainer = styled.div`
  width: 145px;
  margin: auto;

  Button {
    color: ${theme.colors.neutrals60};
  }
`;
