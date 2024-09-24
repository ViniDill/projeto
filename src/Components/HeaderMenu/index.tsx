import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";

import {
  Container,
  User,
  LogoContainer,
  LogoContainerMobile,
  MenuAdminContainer,
  DashboardContainer,
} from "./styles";
import UserDetailsMenu from "../UserDetailsMenu";
import MainMenu from "../MainMenu";
import useAuthStore from "../../Store/authStore";

const HeaderMenu: React.FC = () => {
  const [menuAdmin, setMenuAdmin] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const user = useAuthStore((e) => e.user);

  const closeDashboard = () => {
    setDashboardOpen(false);
  };

  return (
    <Container>
      <LogoContainer>
        <img src="/logoInovador.png" alt="logo inovador solar" />
      </LogoContainer>
      <LogoContainerMobile
        onClick={() => {
          setDashboardOpen(true);
        }}
      >
        <img src="/icons/HamburgerMenu.svg" alt="menu principal" />
      </LogoContainerMobile>
      <User
        onClick={() => {
          setMenuAdmin(true);
        }}
      >
        <span>{user.name}</span>
        <Avatar>{user.name?.charAt(0).toUpperCase()}</Avatar>
        <img src="/logo192.png" alt="logo inovador solar" />
      </User>
      <Drawer
        anchor="right"
        open={menuAdmin}
        onClose={() => {
          setMenuAdmin(false);
        }}
      >
        <MenuAdminContainer>
          <UserDetailsMenu
            name={user.name || ""}
            title=""
            controlModal={() => {
              setMenuAdmin(false);
            }}
          />
        </MenuAdminContainer>
      </Drawer>
      <Drawer
        anchor="left"
        open={dashboardOpen}
        onClose={() => {
          setDashboardOpen(false);
        }}
      >
        <DashboardContainer>
          <MainMenu closeDrawer={closeDashboard} />
        </DashboardContainer>
      </Drawer>
    </Container>
  );
};

export default HeaderMenu;
