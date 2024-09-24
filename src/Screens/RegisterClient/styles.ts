import styled from "styled-components";
import theme from "../../theme";
import media from "styled-media-query";

export const Container = styled.div``;

export const ContainerType = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.m};
  margin-left: ${theme.spacing.m};
  ${media.lessThan("large")`
  margin-left: 0;
  gap: ${theme.spacing.s};
  padding: ${theme.spacing.s};
  `};
`;

export const ContentPerson = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan("large")`
  justify-content: space-evenly;
  `}
`;

export const PeopleImage = styled.div`
  ${media.lessThan("large")`
  display:none;`};
`;

export const ContainerClients = styled.div`
  padding: ${theme.spacing.m};
`;

export const ContainerForm = styled.div``;

export const GridClient = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${theme.spacing.m};
  ${media.lessThan("large")`
  grid-template-columns: 1fr;
  `};
`;

export const Title = styled.h2``;

export const AddressContainer = styled.div``;

export const AddressArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  gap: ${theme.spacing.m};
  ${media.lessThan("large")`
  grid-template-columns: 1fr;
  `};
`;

export const AddressDrawer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${theme.spacing.m};
  ${media.lessThan("large")`
  grid-template-columns: 1fr;
  `};
`;

export const ContainerDrawer = styled.div`
  padding: ${theme.spacing.m};
`;

export const DefaultText = styled.span`
  color: ${theme.colors.neutrals50};
  font-weight: bold;
  margin-right: ${theme.spacing.m};
`;

export const DefaultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0 0 0;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
`;

export const ButtonCtn = styled.div`
  min-width: 300px;
  ${media.lessThan("large")`
  min-width: 45%;
  `};
`;

export const SaveContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
`;
