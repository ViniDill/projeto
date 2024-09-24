import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
    padding: 0 ${theme.spacing["2xl"]};
    width: 100%;
    box-sizing: border-box;

    .Title{
        font-Size: ${theme.fontSize.xl};
    }

    ${media.lessThan("medium")`
        padding: 0 ${theme.spacing.s};

        .Title{
            font-Size: ${theme.fontSize.md};
        }
    `}
`;

export const BackgroundContainer = styled.div`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacing["4xl"]} ${theme.spacing["2xl"]} ${theme.spacing["2xl"]};
    width: 100%;
    box-sizing: border-box;

    ${media.lessThan("large")`
        padding: ${theme.spacing["4xl"]} ${theme.spacing.xl} ${theme.spacing.xl};
    `}

    ${media.lessThan("medium")`
        padding: ${theme.spacing["4xl"]} ${theme.spacing.m} ${theme.spacing["2xl"]};
    `}
`;

export const TransparentContainer = styled.div`
    background-color: ${theme.colors.Tertiary50};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    padding: ${theme.spacing["2xl"]} 0 ${theme.spacing["4xl"]};
    margin: 0 ${theme.spacing["4xl"]};
    box-sizing: border-box;

    ${media.lessThan("large")`
        padding: ${theme.spacing.xl} 0 ${theme.spacing["2xl"]};
        margin: 0 ${theme.spacing["2xl"]};
    `}

    ${media.lessThan("medium")`
        padding: ${theme.spacing.m} 0 ${theme.spacing["4xl"]};
        margin: 0 ${theme.spacing.m};
        height: 500px;
    `}

    .ApiErrorImage {
        max-width: 290px;

        ${media.lessThan("large")`
            padding: ${theme.spacing.xl} 0 ${theme.spacing["2xl"]};
            margin: 0 ${theme.spacing["2xl"]};
        `}

        ${media.lessThan("medium")`
            max-width: 175px;
            padding: ${theme.spacing.xl} 0 ${theme.spacing.s};
            margin: 0 ${theme.spacing.m};
        `}
    }
`;
