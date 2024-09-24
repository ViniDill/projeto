import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div`
  background-color: ${theme.colors.Tertiary50};
  min-height: 100vh;
`;

export const MenuContainer = styled.div`
  padding: ${theme.spacing["2xl"]} ${theme.spacing.l};
  border-radius: ${theme.spacing.l};
  background-color: white;
  box-shadow: 0 5px 5px ${theme.colors.neutrals40};
  transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
  white-space: nowrap;
  opacity: 1;

  &.collapsed {
    width: 60px;
    opacity: 0.8;
  }

  &.expanded {
    width: 250px;
    opacity: 1;
  }

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const Content = styled.div`
  display: grid;
  grid-template-areas: "nav content content content content content content content content content";
  padding: 0 0 0 ${theme.spacing.l};
  ${media.lessThan("medium")`
      padding: 0;
  `};
`;

export const Child = styled.div`
  padding: ${theme.spacing.l};
  grid-area: content;
  ${media.lessThan("large")`
      padding: 0;
  `}
`;

export const BackgroundDashboard = styled.div`
  grid-area: nav;
  margin: ${theme.spacing["2xl"]} ${theme.spacing.xs} ${theme.spacing["2xl"]};
  ${theme.spacing["4xl"]};

  ${media.lessThan("large")`
    display: none;
  `}

`;
