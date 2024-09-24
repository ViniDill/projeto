import React from "react";
import Avatar from "@mui/material/Avatar";
import UserMenu from "../UserMenu";
import Spacer from "../Spacer";

import {
  GeneralContainer,
  Container,
  Details,
  Title,
  SubTitle,
  ContainerAvatar,
  Division,
} from "./styles";

export interface UserDetailsProps {
  name: string;
  title?: string;
  controlModal: () => void;
}

const UserDetailsMenu: React.FC<UserDetailsProps> = ({
  name,
  title,
  controlModal,
}) => {
  return (
    <GeneralContainer>
      <Spacer size="xl" />
      <Container>
        <ContainerAvatar>
          <Avatar className="Avatar">{name.slice(0, 1)}</Avatar>
        </ContainerAvatar>
        <Details>
          <Title>{name}</Title>
          {title && <SubTitle>{title}</SubTitle>}
        </Details>
      </Container>
      <Spacer size="xl" />
      <Division />
      <Spacer size="xl" />
      <UserMenu modalControl={controlModal} />
    </GeneralContainer>
  );
};

export default UserDetailsMenu;
