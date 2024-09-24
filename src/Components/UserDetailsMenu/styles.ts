import styled from "styled-components";
import theme from "../../theme";

export const GeneralContainer = styled.div`
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Division = styled.div`
  height: 1px;
  background-color: ${theme.colors.black};
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${theme.colors.neutrals70};
  font-size: 16px;
`;

export const SubTitle = styled.span`
  color: ${theme.colors.neutrals50};
  font-size: 12px;
  margin-top: ${theme.spacing.xs};
`;

export const ContainerAvatar = styled.div`
  margin-right: ${theme.spacing.xl};
  margin-left: ${theme.spacing.m};
`;
