import React, { useState } from "react";
import {
  Container,
  MenuContainer,
  Content,
  Child,
  BackgroundDashboard,
} from "./styles";
import HeaderMenu from "../../Components/HeaderMenu";
import MainMenu from "../../Components/MainMenu";
import CollapsedMenu from "../../Components/CollapsedMenu";

interface LoggedLayoutProps {
  children?: React.ReactNode;
}

const LoggedLayout: React.FC<LoggedLayoutProps> = ({ children }) => {
  const [collapsedMenuVisible, setCollapsedMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setCollapsedMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setCollapsedMenuVisible(false);
  };

  return (
    <Container>
      <HeaderMenu />
      <Content>
        <BackgroundDashboard>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="ContainerDetails"
          >
            <MenuContainer
              className={collapsedMenuVisible ? "expanded" : "collapsed"}
            >
              {collapsedMenuVisible ? <MainMenu /> : <CollapsedMenu />}
            </MenuContainer>
          </div>
        </BackgroundDashboard>
        <Child>{children}</Child>
      </Content>
    </Container>
  );
};

export default LoggedLayout;
