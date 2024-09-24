import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
    margin: 0 ${theme.spacing["3xl"]};
    h1{
        font-size: 28px;
    }

        ${media.lessThan("large")`

        h1{
        font-size: 22px;
    } `
    }

    ${media.lessThan("small")`
        margin: 0;

        h1{
        font-size: ${theme.fontSize.md};
    }
    `
    }
`

export const WhiteContainer = styled.div`
    background-color: ${theme.colors.white};
    height: 724px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.lessThan("small")`
        margin: 0 ${theme.spacing.xs};
    `
    }
`

export const BlueContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${theme.colors.Primary50};
    width: 100%;
    height: 543px;
    margin: ${theme.spacing["3xl"]} ${theme.spacing["3xl"]} 0;

    h2 {
        font-size: 20px;
    }

    ${media.lessThan("large")`

        margin: ${theme.spacing["2xl"]} ${theme.spacing.xl} 0;

        img {
            width: 246px;
            height: 180px;
        }

        h2 {
            font-size: ${theme.fontSize.md};
        }
    `
    }

    ${media.lessThan("small")`
        margin: 0 ${theme.spacing.m};
        justify-content: top;   
        align-items: top;

        img {
            width: 167px;
            height: 148px;
        }

        h2 {
        font-size: ${theme.fontSize.xs};
    }
    `
    }
`