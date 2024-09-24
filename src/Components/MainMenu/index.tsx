import React from "react";
import DropDownButton from "../DropDownButton";
import InternalButton from "../InternalButton";
import MenuButton from "../MenuButton";
import { DashboardContainer } from "./styles";
import { useNavigate } from "react-router";

export interface MainMenuProps {
  closeDrawer?: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ closeDrawer = () => {} }) => {
  const navigate = useNavigate();
  return (
    <DashboardContainer>
      <MenuButton
        iconName="Graphic"
        label="Dashboard"
        selected={true}
        onClick={() => {
          navigate("/dashboard");
          closeDrawer();
        }}
      />
      <DropDownButton iconName="handshake" header="Produtos">
        <InternalButton
          label="Registro de produtos"
          onClick={() => {
            navigate("/product-registration");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Lista de produto"
          onClick={() => {
            navigate("/product-list");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Lista de marcas"
          onClick={() => {
            navigate("/list-of-brands");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Tipo de fixação"
          onClick={() => {
            navigate("/list-fixing-type");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Tipo de monitoramento"
          onClick={() => {
            navigate("/list-monitoring-type");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Lista tipo de fases"
          onClick={() => {
            navigate("/list-phase-type");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Registrar Preço"
          onClick={() => {
            navigate("/product-price");
            closeDrawer();
          }}
        />
      </DropDownButton>
      <DropDownButton iconName="ui-kit" header="Kits">
        <InternalButton
          label="Criar kits"
          onClick={() => {
            navigate("/kit-registration");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Lista de kits"
          onClick={() => {
            navigate("/kit-list");
            closeDrawer();
          }}
        />
      </DropDownButton>
      <DropDownButton iconName="build" header="Concessionária">
        <InternalButton
          label="Criar concessionária"
          onClick={() => {
            navigate("/Concessionaire");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Lista de concessionária"
          onClick={() => {
            navigate("/energy-provider-list");
            closeDrawer();
          }}
        />
      </DropDownButton>
      <DropDownButton iconName="person" header="Clientes">
        <InternalButton
          label="Cadastro de cliente"
          onClick={() => {
            navigate("/register-client");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Listagem de Clientes"
          onClick={() => {
            navigate("/clients-list");
            closeDrawer();
          }}
        />
      </DropDownButton>
      <DropDownButton iconName="commercial" header="Comercial">
        <InternalButton label="Propostas" />
        <InternalButton
          label="Listagem de propostas"
          onClick={() => {
            navigate("/proposal-list");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Criar proposta"
          onClick={() => {
            navigate("/proposal");
            closeDrawer();
          }}
        />
      </DropDownButton>
      <DropDownButton iconName="user" header="Usuarios">
        <InternalButton
          label="Detalhes da conta"
          onClick={() => {
            navigate("/personal-details");
            closeDrawer();
          }}
        />
        <InternalButton
          label="Roles de usuarios"
          onClick={() => {
            navigate("/user-permissions");
            closeDrawer();
          }}
        />
      </DropDownButton>
    </DashboardContainer>
  );
};

export default MainMenu;
