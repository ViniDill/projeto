import React from "react";

import { Container, Title, ContainerTitle } from "./styles";
import Personicon from "./icons/person";
import BuildIcon from "./icons/bulding";
import { useTranslation } from "react-i18next";

export interface TypeOfPersonCardProps {
  active?: boolean;
  type?: "person" | "company";
  onClick?: () => void;
}

const TypeOfPersonCard: React.FC<TypeOfPersonCardProps> = ({
  active = false,
  type = "person",
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <Container active={active} onClick={onClick} data-testid="button_container">
      <div>{type === "person" ? <Personicon /> : <BuildIcon />}</div>
      <ContainerTitle>
        <Title>
          {t(
            type === "person"
              ? "Type_of_person_card_person"
              : "Type_of_person_card_company"
          )}
        </Title>
      </ContainerTitle>
    </Container>
  );
};

export default TypeOfPersonCard;
