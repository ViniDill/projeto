import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 220px;
  height: 220px;
  background-color: ${({ selected }) =>
    selected ? theme.colors.Tertiary400 : theme.colors.Tertiary200};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  ${media.lessThan("medium")`
    width: 130px;
    height: 130px;
  `}
`;

export const Title = styled.div`
  font-size: ${theme.fontSize.lg};
  font-weight: bold;
  font-weight: bold;
  color: ${theme.colors.white};
  margin-top: ${theme.spacing.m};
`;

export const ContainerImage = styled.div`
  img {
    ${media.lessThan("medium")`
    max-width: 48px;
   
  `}
  }
`;
