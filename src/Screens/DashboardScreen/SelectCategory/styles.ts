import styled from "styled-components";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div`
    width: 100%;
`

export const HeaderDashboardContainer = styled.div`
    
    .header {
        text-align: left;
    }

`

export const ContainerContent = styled.div`

    display: flex;
    flex-wrap: wrap;

    background-color: ${theme.colors.white};

    padding: ${theme.spacing["3xl"]} ${theme.spacing.l} ${theme.spacing["2xl"]};

    margin: ${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.xl} 0;

    ${media.lessThan("medium")`
        margin: 0;
        justify-content: center;
        padding: 10px 0;
    `}
`;
