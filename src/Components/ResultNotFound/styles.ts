import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${theme.colors.Primary50};
    padding: ${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing["2xl"]} ${theme.spacing.xl};
`

export const ImageContainer = styled.div`

    .Image {
        ${media.lessThan("medium")`
        width: 250px;
        `}
    }
`

export const TextContainer = styled.div`
    
    .Subtitle {
        ${media.lessThan("medium")`
            font-size: ${theme.fontSize.lg};
        `}
    }
`