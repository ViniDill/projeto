import React from "react";

import { Container, ContainerButton } from "./styles";
import Button from "../../DesingSystem/Button";
import { useTranslation } from "react-i18next";

interface NotFoundMessageProps {
  onClick?: () => void;
}

const NotFoundMessage: React.FC<NotFoundMessageProps> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <img src="/icons/notFoundRegister.svg" alt="registro nao encontrado" />
      <h3>{t("Not_found_message_title")}</h3>
      <h4>{t("Not_found_message_create_register")}</h4>
      <ContainerButton>
        <Button data-testid="button_action" onClick={onClick}>
          {t("Not_found_message_register")}
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default NotFoundMessage;
