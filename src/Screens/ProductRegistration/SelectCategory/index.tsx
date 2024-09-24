import React from "react";

import CheckBoxCategory from "../../../Components/CheckBoxCategory";
import { H4 } from "../../../DesingSystem/Title";
import Card from "@mui/material/Card";
import Button from "../../../DesingSystem/Button";
import { Container, ContainerItems, ContainerButton } from "./styles";
import { useTranslation } from "react-i18next";

interface ItemsProps {
  id: number;
  icon: string;
  label: string;
}

interface selectCategoryProps {
  category?: string;
  setCategory: (value: string, id: number) => void;
  nextStage: () => void;
}

const SelectCategory: React.FC<selectCategoryProps> = ({
  category,
  setCategory,
  nextStage,
}) => {
  const { t } = useTranslation();
  const mockItems: ItemsProps[] = [
    {
      id: 1,
      icon: "/icons/ProductRegistration/inversor.svg",
      label: "inversor",
    },
    { id: 2, icon: "/icons/ProductRegistration/modulos.svg", label: "Módulos" },
    { id: 3, icon: "/icons/ProductRegistration/cabos.svg", label: "Cabos" },
    { id: 4, icon: "/icons/ProductRegistration/string.svg", label: "String" },
    {
      id: 5,
      icon: "/icons/ProductRegistration/acessorios.svg",
      label: "Acessórios",
    },
  ];
  return (
    <Container>
      <H4>{t("product_registration_title_category")}</H4>
      <Card>
        <ContainerItems>
          {mockItems.map((field, index) => (
            <CheckBoxCategory
              key={field.id}
              testid={`item-category ${index}`}
              name={field.label}
              image={field.icon}
              selected={category === field.label}
              onClick={() => {
                setCategory(field.label, field.id);
              }}
            />
          ))}
        </ContainerItems>
        <ContainerButton>
          <div>
            <Button
              variant="Tertiary"
              onClick={nextStage}
              data-testid="btn-next"
            >
              {t("product_registration_button_next")}
            </Button>
          </div>
        </ContainerButton>
      </Card>
    </Container>
  );
};

export default SelectCategory;
