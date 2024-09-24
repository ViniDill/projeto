import React from "react";

import {
  Container,
  ContainerTitle,
  ContainerAddres,
  RegulaText,
  TitleHouse,
  Content,
  ContainerMenu,
  ActionCont,
  SelectedMenu,
} from "./styles";
import PinRegular from "./icons/pinRegular";
import SelectedIcon from "./icons/selectedIcon";
import MenuPoints from "./icons/menuPoints";
import PinHouse from "./icons/pinHouse";
import Spacer from "../Spacer";

export interface AddressCardProps {
  selected?: boolean;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
  houseName: string;
  openMenu?: () => void;
}

const AddressCard: React.FC<AddressCardProps> = ({
  selected,
  street,
  neighborhood,
  city,
  state,
  complement,
  houseName,
  openMenu,
}) => {
  return (
    <Container>
      <div>
        {selected ? (
          <PinHouse data-testid="pin-house-icon" />
        ) : (
          <PinRegular data-testid="pin-regular-icon" />
        )}
      </div>
      <Content>
        <ContainerTitle>
          <TitleHouse>{houseName}</TitleHouse>
          <ActionCont>
            {selected && (
              <SelectedMenu>
                <SelectedIcon />
              </SelectedMenu>
            )}
            <ContainerMenu onClick={openMenu} data-testid="open-menu">
              <MenuPoints />
            </ContainerMenu>
          </ActionCont>
        </ContainerTitle>
        <Spacer size="xs" />
        <ContainerAddres>
          <RegulaText>
            {`${street} - ${neighborhood} - ${city} - ${state} - ${complement}`}
          </RegulaText>
        </ContainerAddres>
      </Content>
    </Container>
  );
};

export default AddressCard;
