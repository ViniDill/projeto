import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  padding: 12px;
`;

export const Footer = styled.div`
  display: flex;
  gap: 12px;
`;

export const Title = styled.span`
  color: ${theme.colors.Primary700};
  font-weight: bold;
`;

export const Description = styled.span`
  color: ${theme.colors.Primary700};
`;

export const ContainerDescription = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing.s} 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  img {
    border: solid 1px ${theme.colors.Primary700};
    border-radius: 50px;
  }
`;
