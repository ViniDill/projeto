import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

interface containerProps {
  active: boolean;
}

export const Container = styled.div<containerProps>`
  background-color: ${({ active }) =>
    active ? theme.colors.Primary50 : theme.colors.white};
  border: solid 2px ${theme.colors.Primary500};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.m} ${theme.spacing.m};
  cursor: pointer;
  ${media.lessThan("large")`
    padding: ${theme.spacing.m} ${theme.spacing.xs};    
  `}
`;

export const Title = styled.span`
  color: ${theme.colors.Primary500};
  font-size: ${theme.fontSize.lg};
  font-weight: bold;
  padding: 0 ${theme.spacing.m};
  ${media.lessThan("large")`
  font-size: ${theme.fontSize.md};
  padding: 0;
  `}
`;

export const ContainerTitle = styled.div`
  ${media.lessThan("large")`
  padding: 0 ${theme.spacing.s};
  `}
`;
