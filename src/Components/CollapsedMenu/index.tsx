import React from "react";
import { Container, DashboardContainer, IconsContainer } from "./styles";
import Spacer from "../Spacer";

const CollapsedMenu: React.FC = () => {
  return (
    <Container>
      <DashboardContainer>
        <img src="/icons/Graphic.svg" alt="erro" />
      </DashboardContainer>
      <Spacer size="m" />
      <IconsContainer>
        <img src="/icons/dashboardIcons/handshake.svg" alt="erro" />
        <Spacer size="l" />
        <img src="/icons/dashboardIcons/ui-kit.svg" alt="erro" />
        <Spacer size="l" />
        <img src="/icons/dashboardIcons/build.svg" alt="erro" />
        <Spacer size="l" />
        <img src="/icons/dashboardIcons/person.svg" alt="erro" />
        <Spacer size="l" />
        <img src="/icons/dashboardIcons/commercial.svg" alt="erro" />
        <Spacer size="l" />
        <img src="/icons/dashboardIcons/user.svg" alt="erro" />
        <Spacer size="m" />
      </IconsContainer>
    </Container>
  );
};

export default CollapsedMenu;
