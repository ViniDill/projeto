import React from "react";
import { Container, BackgroundContainer, TransparentContainer } from "./styles";
import Spacer from "../../Components/Spacer";
import { useTranslation } from "react-i18next";

const APIError: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1 className="Title">{t("api_error_title")}</h1>
      <BackgroundContainer>
        <TransparentContainer>
          <img
            src="../icons/APIError.svg"
            alt="Imagem de erro de API"
            className="ApiErrorImage"
          />
          <Spacer size="l" />
          <strong>
            <span>{t("api_error_check_your_internet_connection")}</span>
          </strong>
        </TransparentContainer>
      </BackgroundContainer>
    </Container>
  );
};

export default APIError;
