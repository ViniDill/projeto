import React from "react";
import { Container, WhiteContainer, BlueContainer } from "./styles";
import Spacer from "../../Components/Spacer";
import { useTranslation } from "react-i18next";

const AccessDenied: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Spacer size="xl" />
      <strong>
        <h1>{t("access_denied_title")}</h1>
      </strong>
      <Spacer size="xl" />
      <WhiteContainer>
        <BlueContainer>
          <img src="../icons/AccessDenied.svg" alt="" />
          <strong>
            <h2>
              {t(
                "access_denied_sorry_you_do_not_have_the_necessary_permission"
              )}
            </h2>
          </strong>
        </BlueContainer>
      </WhiteContainer>
    </Container>
  );
};

export default AccessDenied;
