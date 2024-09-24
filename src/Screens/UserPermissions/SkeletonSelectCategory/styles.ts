import styled from "styled-components";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div``

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${theme.spacing.xl} 0;

    .Header-Button {
        ${media.lessThan('large')`
        display: none;
    `}
    }
`

export const RoleContainer = styled.div`
    background-color: ${theme.colors.white};
    padding: ${theme.spacing.xl} ${theme.spacing["3xl"]};
    margin-bottom: ${theme.spacing.l};

    ${media.lessThan('medium')`
        padding: ${theme.spacing.xl} ${theme.spacing.l};
    `}
`

export const HeaderRole = styled.div`
    margin-bottom: ${theme.spacing.xl}
`

export const RoleContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0 14px;

    ${media.lessThan('large')`
        flex-direction: column;
    `}
`

export const RoleBoxOne = styled.div`
    width: 100%;
`

export const RoleBoxTwo = styled.div`
    width: 100%;
    
    ${media.lessThan('large')`
        margin-top: ${theme.spacing.l};
    `}
`

export const PermissionContainer = styled.div`
    background-color: ${theme.colors.white};
    padding: ${theme.spacing.l} ${theme.spacing["3xl"]} ${theme.spacing["3xl"]};

    ${media.lessThan('medium')`  
        padding: ${theme.spacing.l} ${theme.spacing.l};
    `}
`
export const HeaderPermission = styled.div``

export const PermissionContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0 14px;
    margin-top: ${theme.spacing["3xl"]};

    ${media.lessThan('large')`
        flex-direction: column;
    `}
`

export const ButtonContainer = styled.div`
    
    display: none;
    justify-content: center;
    margin-top: ${theme.spacing.xl};

    ${media.lessThan('large')`
        display: flex;
    `}
`