import styled from "styled-components";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div`
    background-color: ${theme.colors.white};
    padding: ${theme.spacing["2xl"]};

    ${media.lessThan("small")`
        padding: ${theme.spacing.l};
        `}
`

export const HeaderContainer = styled.div``

export const DivisionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacing.l};
    margin-top: ${theme.spacing.l};


    ${media.lessThan("medium")`
        flex-direction: column;
    `}

    .SecondDivision {
        ${media.lessThan("huge")`
            display: none;
        `}
    }
`

export const Divisions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.spacing.l};
    justify-content: end;

    .label {
        width: 100px;
        height: 10px;
    }

    .Bones{
        height: 41px;

    }

    .MiddleBone{
        width: 100%;
    }
    
`

export const SubDivisions = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: ${theme.spacing.xl} ${theme.spacing.l};
`

export const ComponentsSubdivisions = styled.div``

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.s};
    margin-top: ${theme.spacing.xl};
`

export const ItensContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.spacing.xl} ${theme.spacing["3xl"]};

    ${media.lessThan("large")`
        grid-template-columns: 1fr 1fr;
    `}

    ${media.lessThan("small")`
        grid-template-columns: 1fr;
    `}
`

export const Observation = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.l};
    margin:${theme.spacing.l} 0 ${theme.spacing["2xl"]};
`

export const Finish = styled.div`
display: flex;
justify-content: right;
`

export const Amount = styled.div`
    display: flex;
    justify-content: right;
    gap: 0 ${theme.spacing.s};
`
