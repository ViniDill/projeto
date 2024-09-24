import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const LoginArea = styled.div`
  width: 40vw;
  height: 100vh;
  background-image: url("/backgroundLogin.png");
  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const Content = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.lessThan("medium")`   
    width: 100vw;
    align-items: flex-start;
  `}
`;

export const Header = styled.div`
  background-image: url("/backgroundLogin.png");
  display: flex;
  align-items: center;
  justify-content: center;
  height: 229px;
`;
