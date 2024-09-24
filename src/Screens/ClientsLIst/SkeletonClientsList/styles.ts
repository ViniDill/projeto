import styled from "styled-components";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div`
    padding: ${theme.spacing.s};
`

export const Content = styled.div`
    background-color: ${theme.colors.white};
    padding: ${theme.spacing.xl} ${theme.spacing["2xl"]};

    .Filter {
        height: 37px;


        ${media.lessThan("large")`
            height: 27px;
        `}
    }

    .Rectangle {
    &:nth-child(even) {
        background-color: ${theme.colors.neutrals30};
    }

    }



    ${media.lessThan("large")`
        padding: ${theme.spacing.m} ${theme.spacing.l};
        

        .Bones {
            display: none;
        }
    `}
`

export const HeaderContainer = styled.div`
    display: flex;
    gap: 14px;

    ${media.lessThan("large")`
        .Button {
            display: none;
        }
    `}
`

export const Pagination = styled.div`
    display: flex;
    gap: ${theme.spacing.s};
    justify-content: center;

    ${media.lessThan("large")`
        display: none;
    `}
`