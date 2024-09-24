import React from "react";

import { Container, LoginArea, Content, Header } from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
}

const authLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <LoginArea />
    </Container>
  );
};

export default authLayout;
