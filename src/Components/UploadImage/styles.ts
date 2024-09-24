import styled from "styled-components";
import theme from "../../theme";

interface ContainerProps {
    hasImage: boolean;
}
    
    export const Container = styled.div<ContainerProps>`
        position: relative;
        cursor: pointer;
        width: ${(props) => (props.hasImage ? "179px" : "188px")};
        height: ${(props) => (props.hasImage ? "162px" : "131px")};
        border: ${(props) => (props.hasImage ? "transparent" : `2px dashed ${theme.colors.Primary200}`)} ;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => (props.hasImage ? "none" : theme.colors.Primary50)};


    img {
        max-width: 100%;
        max-height: 100%;

    }

`;

    export const CameraContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        .CameraImage {
            margin-bottom: ${theme.spacing.s};
        }
    `

    export const UploadText = styled.span`
        font-size: ${theme.fontSize.xs};
        color: ${theme.colors.neutrals80};
        margin-bottom: ${theme.spacing.s};
    `;

    export const RemoveButtonContainer = styled.div`
        width: 100%;
        text-align: right;
        margin-left: 40px;
    `

    export const RemoveButton = styled.button`
        background-color: transparent;
        color: ${theme.colors.Primary500};
        font-size: ${theme.fontSize.sm};
        padding: ${theme.spacing.xs} ${theme.spacing.m};
        border: none;
        cursor: pointer;
        margin-top: ${theme.spacing.s};

        &:hover {
        color: ${theme.colors.Primary300};
        }

        &:active {
        color: ${theme.colors.Primary400};
        }
    `;