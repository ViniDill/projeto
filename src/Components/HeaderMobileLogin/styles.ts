import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div``;

export const ImageSpacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -148px;
`;

export const ContainerImage = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${theme.colors.white};
  border-radius: 200px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 85%;
    border-radius: 0px;
  }
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const ContainerDesktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 0px;
    max-width: 185px;
    ${media.lessThan("medium")`
    border-radius: 200px;
    `}
  }
  ${media.lessThan("medium")`
     display: none;
    `}
`;
