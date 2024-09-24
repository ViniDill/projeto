import styled from "styled-components";
import theme, { Spacing } from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${theme.spacing.l};
  background-color: white;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  span {
    margin-right: ${theme.spacing.m};
    color: ${theme.colors.neutrals60};
    ${media.lessThan("large")`
    display: none;
    `}
  }
  img {
    max-width: 50px;
    margin-left: ${theme.spacing.m};
    ${media.greaterThan("large")`
        display: none;
    `}
  }
`;

export const LogoContainer = styled.div`
  img {
    max-width: 230px;
  }
  cursor: pointer;
  ${media.lessThan("large")`
     display: none;
    `}
`;

export const LogoContainerMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    max-width: 26px;
  }
  ${media.greaterThan("large")`
     display: none;
    `}
`;

export const MenuAdminContainer = styled.div`
  padding: ${theme.spacing.l} ${theme.spacing.m};
`;

export const DashboardContainer = styled.div`
  margin: ${Spacing.m}px;
`;
