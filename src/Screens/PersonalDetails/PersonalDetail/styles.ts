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

    ${media.lessThan('small')`
        justify-content: center;
    `}

    .H4 {
        ${media.lessThan('small')`
            font-size: ${theme.fontSize.xl};
        `}
    }
`;

export const ButtonContainer = styled.div`

    ${media.lessThan('large')`
        display: none;
    `}

    .Send-Button {
        width: 120px;
        height: 35px;
        border: none;
        background-color: ${theme.colors.Primary700};
        color: ${theme.colors.Secundary50};
        font-size: ${theme.fontSize.lg};
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: ${theme.colors.Primary900};
        }

        &:active {
            background-color: ${theme.colors.Primary500};
        }
        
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
        background-color: ${theme.colors.Primary700};
        color: ${theme.colors.Secundary50};
        font-size: ${theme.fontSize.lg};
        border-radius: 4px;
        cursor: pointer;

        ${media.lessThan('large')`
            margin: 0 0 ${theme.spacing.l};
        `}

        &:hover {
            background-color: ${theme.colors.Primary900};
        }

        &:active {
            background-color: ${theme.colors.Primary500};
        }
    }
`

export const BackgroundContainer = styled.div`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.l};

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
    margin-top: -25px;

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