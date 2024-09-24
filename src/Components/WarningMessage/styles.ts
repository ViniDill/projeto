import styled from "styled-components";
import theme from "../../theme";

interface PorpsContainer {
  type: "succcess" | "error" | "warning" | "help";
}

export const Container = styled.div<PorpsContainer>`
  background-color: ${({ type }) => theme.colors[`${type}Light`]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  span {
    color: ${({ type }) => theme.colors[type]};
    font-weight: bold;
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;

  img {
    fill: yellow;
  }
`;
