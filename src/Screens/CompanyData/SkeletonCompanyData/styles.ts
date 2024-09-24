import styled from "styled-components";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

    ${media.lessThan("medium")`
    padding: ${theme.spacing.l} ${theme.spacing.m} 0;
    `}

  .Title {
    width: 240px;
    height: 22px;
    margin-bottom: ${theme.spacing.l};

    ${media.lessThan("medium")`
      width: 127px;
      height: 13px;
    `}
  }
`;

export const Background = styled.div`
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing["4xl"]};

    ${media.lessThan("large")`
        padding: ${theme.spacing["2xl"]};
        justify-content: center;
    `}

    ${media.lessThan("medium")`
        padding: ${theme.spacing.l};
    `}
`

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 473px;

    ${media.lessThan("medium")`
        width: 100%;
    `}

    .Input{
        width: 100%;
        height: 41px;
        margin-bottom: ${theme.spacing.l};

        ${media.lessThan("medium")`
            width: 276px;
        `}
    }

    .Phone{
        width: 70%;
        height: 41px;
        margin-bottom: ${theme.spacing.xl};

        ${media.lessThan("large")`
            width: 100%;
        `}

        ${media.lessThan("medium")`
            width: 276px;
        `}
    }

    .Label{
        width: 93px;
        height: 9px;
    }
`

export const LeftContainer = styled.div`
    .SubTitle{
        width: 240px;
        height: 23px;
        margin-bottom: ${theme.spacing.xl};


        ${media.lessThan("medium")`
            width: 127px;
            height: 11px;
        `}
    }

    .Button{
        width: 120px;
        height: 49px;


    ${media.lessThan("medium")`
        width: 80px;
        height: 28px;
        margin: auto;
    `}
    }
`

export const RigthContainer = styled.div`

    ${media.lessThan("large")`
        display: none;
    `}
`