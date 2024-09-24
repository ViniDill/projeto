import styled from "styled-components";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div`
    padding: ${theme.spacing.s};
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    ${media.lessThan('small')`
        justify-content: center;
    `}
`;

export const ButtonContainer = styled.div`

    ${media.lessThan('large')`
        display: none;
    `}

    .Send-Button {
        width: 120px;
        height: 35px;
        border: none;
        border-radius: 4px;
        margin-bottom: ${theme.spacing.s};
        
    }`

export const ButtonContainerMobile = styled.div`

    display: none;

    ${media.lessThan('large')`
        display: flex;
        align-items: center;
        justify-content: center;
    `}

    .Send-Button {
        width: 120px;
        height: 35px;
        border: none;

        ${media.lessThan('large')`
            margin: 0 0 ${theme.spacing.l};
        `}
    }
`

export const BackgroundContainer = styled.div`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.l};

    .personal-details {
        margin-bottom: 30px;
    }

    ${media.lessThan('large')`
        padding: ${theme.spacing.l} ${theme.spacing.l} ${theme.spacing["3xl"]};
    `}
`

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0 14px;
    
    ${media.lessThan('large')`
        flex-direction: column;
        align-items: center;
    `}
`;

export const PersonalInformation = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0 14px;
    justify-content: space-between;
    width: 100%;
    ${media.lessThan('large')`
        flex-direction: column;
    `}
`;

export const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 14px;

    ${media.greaterThan('large')`
        width: calc(50% - 7px);
    `}
    ${media.lessThan('large')`
        display: flex;
        flex-direction: column;

        .Label{
            margin-top: ${theme.spacing.m};
        }

        .Label-first{
            margin-top: ${theme.spacing.l};
        }
    `}

    .Input {
        margin-right: ${theme.spacing["3xl"]};

        ${media.lessThan('large')`
            margin-right: 0;
        `}
    }
`;

export const Photo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.lessThan('large')`  
        margin-top: ${theme.spacing.l};
        `}
`;

export const Functions = styled.div`
    margin: ${theme.spacing.xl} 0;
    padding: ${theme.spacing.l} ${theme.spacing.l} ${theme.spacing["4xl"]};
    background-color: ${theme.colors.white};

    ${media.lessThan('large')`   
        padding: ${theme.spacing.m} ${theme.spacing.l} ${theme.spacing["2xl"]};
    `}

`

export const DropSelect = styled.div`
    max-width: 530px;

    ${media.lessThan('large')`   
        max-width: 100%;
    `}
`