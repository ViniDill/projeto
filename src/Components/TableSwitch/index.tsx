import React from "react";
import Switch from "../../DesingSystem/Switch";

import { Container, ContainerActions, Action, ContainerTitle } from "./styles";

export interface TableSwitchProps {
  index: number;
  active?: boolean;
  name: string;
  onClickPencil?: () => void;
  onClickSwitch?: () => void;
}

const TableSwitch: React.FC<TableSwitchProps> = ({
  index,
  active = false,
  name,
  onClickPencil,
  onClickSwitch,
}) => {
  return (
    <Container index={index}>
      <ContainerTitle>
        <span>{name}</span>
      </ContainerTitle>
      <ContainerActions>
        <Action onClick={onClickPencil} data-testid="click_pencil">
          <img src="/icons/pencil.svg" alt="editar" />
        </Action>
        <Action>
          <Switch
            checked={active}
            onClick={onClickSwitch}
            data-testid="switch_button"
          />
        </Action>
      </ContainerActions>
    </Container>
  );
};

export default TableSwitch;
