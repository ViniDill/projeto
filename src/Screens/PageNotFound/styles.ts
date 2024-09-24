import styled from "styled-components";
import theme, { FontSize } from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    align-items: center;


    ${media.lessThan("medium")`
    flex-direction: column;
    
  `}
`

export const Image = styled.div`

    img {
    max-height: 456px;

    ${media.lessThan("large")`
    max-height: 250px;
      `}
    }`

export const TextContainer = styled.div`

    padding: 20px;
    text-align: left;
    margin: 10px;

    span{
      font-size: ${FontSize.lg}px;
      color: ${theme.colors.neutrals90};
    }

    ${media.lessThan("medium")`
    text-align: center;
  `}
`