import React, { useState, useCallback } from "react";

import {
  Container,
  ContainerCard,
  ContainerBanner,
  Header,
  Btn,
  Waning,
  BtnMob,
} from "./styles";
import { Card } from "@mui/material";
import Input from "../../DesingSystem/Input";
import Spacer from "../../Components/Spacer";
import ChangeBanner from "./ChangeBannerIcon";
import SendButton from "../../DesingSystem/SendButton";
import Skeleton from "./Skeleton";
import { Formik } from "formik";
import { apiLogInService } from "../../services/authService/authService";
import { ChangePassProps } from "../../services/authService/authServiceProps";
import WarningMessage from "../../Components/WarningMessage";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

interface MessageErrorProps {
  type: string;
  message: string;
}

const LoggedChangePassword: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<MessageErrorProps | null>();

  const initialState = {
    current_password: "",
    new_password: "",
    confirmation_password: "",
  };

  const schema = Yup.object().shape({
    current_password: Yup.string().required(t("change_pass_required_field")),
    new_password: Yup.string()
      .required(t("change_pass_required_field"))
      .min(8, t("change_pass_rule_min_size"))
      .matches(/[A-Z]/, t("change_pass_rule_uppercase"))
      .matches(/[a-z]/, t("change_pass_rule_lowercase"))
      .matches(/[0-9]/, t("change_pass_rule_number"))
      .matches(/[\W_]/, t("change_pass_rule_symbol")),
    confirmation_password: Yup.string()
      .required(t("change_pass_required_field"))
      .oneOf([Yup.ref("password")], t("change_pass_field_not_match")),
  });

  const handleChangePassword = useCallback(async (values: ChangePassProps) => {
    try {
      setLoading(true);
      await apiLogInService.changePassLogged(values);
      setAlertMessage({
        type: "succcess",
        message: t("change_pass_successess_message"),
      });
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: t("change_pass_error_message"),
      });
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Skeleton />;
  }
  return (
    <Container>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          handleChangePassword(values);
        }}
        validationSchema={schema}
      >
        {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
          <>
            <Header>
              <h1>{t("change_pass_title")}</h1>
              <Btn>
                <SendButton
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  {t("change_pass_btn_save")}
                </SendButton>
              </Btn>
            </Header>
            <Card>
              {alertMessage && (
                <Waning>
                  <WarningMessage
                    type={alertMessage.type as any}
                    descrition={alertMessage.message}
                    onClick={() => {
                      setAlertMessage(null);
                    }}
                  />
                </Waning>
              )}

              <ContainerCard>
                <div>
                  <h3>{t("change_pass_sub_title")}</h3>
                  <Input
                    title={t("change_pass_current_password")}
                    type="password"
                    name="current_password"
                    value={values.current_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.current_password}
                  />
                  <Spacer size="xl" />
                  <Input
                    title={t("change_pass_new_password")}
                    type="password"
                    name="new_password"
                    value={values.new_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.new_password}
                  />
                  <Spacer size="xl" />
                  <Input
                    title={t("change_pass_confirmation_password")}
                    type="password"
                    name="confirmation_password"
                    value={values.confirmation_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.confirmation_password}
                  />
                  <BtnMob>
                    <Spacer size="l" />
                    <SendButton
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      {t("change_pass_btn_save")}
                    </SendButton>
                    <Spacer size="l" />
                  </BtnMob>
                </div>
                <ContainerBanner>
                  <ChangeBanner />
                  <Spacer size="m" />
                  <p>{t("change_pass_title_rules")}</p>
                  <Spacer size="xs" />
                  <ul>
                    <li>{t("change_pass_rule_different")}</li>
                    <li>{t("change_pass_rule_min_size")}</li>
                    <li>{t("change_pass_rule_uppercase")}</li>
                    <li>{t("change_pass_rule_lowercase")}</li>
                    <li>{t("change_pass_rule_number")}</li>
                    <li>{t("change_pass_rule_symbol")}</li>
                  </ul>
                </ContainerBanner>
              </ContainerCard>
            </Card>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default LoggedChangePassword;
