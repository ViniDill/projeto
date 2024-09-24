import React from "react";
import {
  Container,
  ContainerContent,
  HeaderDashboardContainer,
} from "./styles";
import { H4 } from "../../../DesingSystem/Title";
import NavigableCard from "../../../Components/NavigableCard";
import { useTranslation } from "react-i18next";
import useAuthStore from "../../../Store/authStore";

const SelectCategory: React.FC = () => {
  const { t } = useTranslation();
  const user = useAuthStore((e) => e.user);

  return (
    <Container>
      <HeaderDashboardContainer>
        <H4 className="header">Bem Vindo,{user.name}</H4>
      </HeaderDashboardContainer>
      <ContainerContent>
        <NavigableCard
          label="Área de Negócio"
          iconName="business"
          text="Selecione entre as opções cadastrar
                Kit ou editar kit já cadastrado ao entrar 
                no painel."
        />
        <NavigableCard
          label="Área de Negócio"
          iconName="kits"
          text="Selecione entre as opções cadastrar
                    Kit ou editar kit já cadastrado ao entrar 
                    no painel."
        />
        <NavigableCard
          label="Área de Negócio"
          iconName="kits"
          text="Selecione entre as opções cadastrar
                Kit ou editar kit já cadastrado ao entrar 
                no painel."
        />
        <NavigableCard
          label="Área de Negócio"
          iconName="maintenance"
          text="Selecione entre as opções cadastrar
                    Kit ou editar kit já cadastrado ao entrar 
                    no painel."
        />
        <NavigableCard
          label="Área de Negócio"
          iconName="products"
          text="Selecione entre as opções cadastrar
                Kit ou editar kit já cadastrado ao entrar 
                no painel."
        />

        <NavigableCard
          label="Área de Negócio"
          iconName="business"
          text="Selecione entre as opções cadastrar
                Kit ou editar kit já cadastrado ao entrar 
                no painel."
        />
      </ContainerContent>
    </Container>
  );
};

export default SelectCategory;
