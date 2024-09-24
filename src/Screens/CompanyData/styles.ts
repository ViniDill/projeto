import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
    h1 {
        font-size: ${theme.fontSize.xl};
        font-weight: 700;

    ${media.lessThan("medium")`
        font-size: ${theme.fontSize.md};
    `}
    }

    ${media.lessThan("medium")`
        padding: ${theme.spacing.l} ${theme.spacing.m} 0;
    `}
    `

export const Background = styled.div`
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing["4xl"]};
    align-items: center;

    ${media.lessThan("large")`
        padding: ${theme.spacing["2xl"]};
    `}

    ${media.lessThan("medium")`
        padding: ${theme.spacing["xl"]};
    `}

`

export const InputContent = styled.div`
    label{
        font-size: ${theme.fontSize.xs};
        color: ${theme.colors.neutrals60};
    }

    .Input {
        border-radius: 5px;
        border: 1px solid ${theme.colors.neutrals90};
        height: 40px;
        width: 100%;
        padding: ${theme.spacing.xs} ${theme.spacing.l};
    }
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: ${theme.spacing["4xl"]};
    width: 100%;
    gap: ${theme.spacing.m} 0;

    ${media.lessThan("large")`
        margin-right: 0;
        gap: ${theme.spacing.s} 0;
    `}

    h2 {
        font-size: ${theme.fontSize.xl};
        font-weight: 400;

        ${media.lessThan("medium")`
            font-size: ${theme.fontSize.sm};
        `}
    }

    .Button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 49px;
        border-radius: 6px;
        margin-top: ${theme.spacing["2xl"]};
        font-size:  ${theme.fontSize.xl};

        ${media.lessThan("large")`
            margin-top: ${theme.spacing["xl"]};
        `}

        ${media.lessThan("medium")`
            margin:${theme.spacing.m} auto 0;
            width: 80px;
            height: 28px;
            border-radius: 4px;
            font-size: ${theme.fontSize.md};
        `}
    }
`

export const RightContainer = styled.div`
    ${media.lessThan("large")`
        display: none;
    `}

    img{
        max-width: 449px;
        height: 381px;
        margin-left: ${theme.spacing["4xl"]};
    }
`

export const PhoneContainer = styled.div`
    width: 70%;
    min-width: 400px;

    label{
        font-size: ${theme.fontSize.xs};
        color: ${theme.colors.neutrals60};
    }

    ${media.lessThan("large")`
        width: 100;
        min-width: 100%;
    `}
`