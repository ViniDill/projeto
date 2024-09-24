import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div<{ index: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ index }) =>
    index % 2 ? theme.colors.Tertiary50 : theme.colors.Tertiary100};
  border-radius: 4px;
  padding: 5px;
  align-items: center;
`;

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${theme.colors.neutrals80};
  font-size: ${theme.fontSize.sm};
  font-weight: bold;
`;

export const SubTitle = styled.span`
  color: ${theme.colors.neutrals80};
  font-size: ${theme.fontSize.xs};
`;

export const Button = styled.div`
  cursor: pointer;
  padding: 10px 17px;
`;
