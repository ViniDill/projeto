import styled from "styled-components";
import theme from "../../../theme";

export const Container = styled.div`
    display: flex;

    .Skeleton {
        margin: 0 ${theme.spacing.s};
        height: 40px;
        width: ${theme.fontSize.xl};
        border-radius: 4px;
    }
`;