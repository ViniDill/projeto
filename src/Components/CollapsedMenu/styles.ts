import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    border-radius: 20px;
`

export const DashboardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.Primary100};
    width: 72px;
    height: 65px;
    border-radius: 10px;
    img{
        height: 30px;
        width: 30px;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;

    img{
        height: 25px;
        width: 25px;
    }
`