import React from "react";
import { useTranslation } from "react-i18next";
import { Container, AlignButtons, TextContainer} from "./styles";
import ButtonSendCode from "../../Components/ButtonSendCode";
import HeaderMobileLogin from "../../Components/HeaderMobileLogin";
import { H2 } from "../../DesingSystem/Title";
import Spacer from "../../Components/Spacer";
import Text from "../../DesingSystem/Text";

const SendCode: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <HeaderMobileLogin image="/changePass.svg" />
      <TextContainer>
        <H2>{t("Send_code_to_another_location")}</H2>
        <Spacer size="xl" />
        <Text size="lg" align="center">
          {t("Where_to_send_code")}
        </Text>
      </TextContainer>
      <Spacer size="xl" />
      <AlignButtons>
        <ButtonSendCode type="email" />
        <Spacer size="xl" />
        <ButtonSendCode type="sms" />
        <Spacer size="xl" />
        <ButtonSendCode type="whatsapp" />
      </AlignButtons>
    </Container>
  );
};

export default SendCode;
