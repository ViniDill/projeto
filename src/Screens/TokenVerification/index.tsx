import React from "react";
import { useTranslation } from "react-i18next";
import { Container, AlignInputs, TextContainer } from "./styles";
import HeaderMobileLogin from "../../Components/HeaderMobileLogin";
import { H2 } from "../../DesingSystem/Title";
import Spacer from "../../Components/Spacer";
import Text from "../../DesingSystem/Text";
import Button from "../../DesingSystem/Button";
import DigitInputCode from "../../Components/DigitInputCode";
import Link from "../../DesingSystem/Link";
import { ButtonContainer } from "./styles";

const TokenVerification: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>

      <HeaderMobileLogin image="/changePass.svg" />
      <TextContainer>
        <H2>{t("Token_verification")}</H2>
        <Spacer size="xl" />
        <Text size="md" align="center">
          {t("Token_please_fill_in_with_the_code_sent_via_SMS")}
        </Text>
      </TextContainer>
      <Spacer size="2xl" />
      <AlignInputs>
        <DigitInputCode error={false}/>
      </AlignInputs>
      <TextContainer>
        <Text size="md" align="center">
          <Link size="md">
            {t("Token_resend")}
          </Link>
          {t("Token_code_to_email")}
        </Text>
        <Spacer size="2xl" />
        <Text align="center">
        {t("Token_send_code_to_another_location")}
        </Text>
      </TextContainer>
      <Spacer size="2xl" />
      <ButtonContainer>
        <Button type="submit" variant="Neutral">
          {t("Token_verify")}
        </Button>
      </ButtonContainer>

    </Container>
    
  );
};

export default TokenVerification;
