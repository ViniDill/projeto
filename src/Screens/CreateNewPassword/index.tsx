import React from "react";

import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import {
  Container,
  ContainerRules,
  TitleRules,
  List,
  MessageError,
} from "./styles";
import { H2 } from "../../DesingSystem/Title";
import Input from "../../DesingSystem/Input";
import Spacer from "../../Components/Spacer";
import Button from "../../DesingSystem/Button";
import HeaderMobileLogin from "../../Components/HeaderMobileLogin";
import * as Yup from "yup";

const CreateNewPassword: React.FC = () => {
  const { t } = useTranslation();
  const schema = Yup.object().shape({
    password: Yup.string()
      .required(t("create_new_pass_required"))
      .min(8, t("create_new_pass_min_length"))
      .matches(/[A-Z]/, t("create_new_pass_upper_case"))
      .matches(/[a-z]/, t("create_new_pass_lower_case"))
      .matches(/[0-9]/, t("create_new_pass_number"))
      .matches(/[\W_]/, t("create_new_pass_simbol")),
    confirmPassword: Yup.string()
      .required(t("create_new_pass_confirm"))
      .oneOf([Yup.ref("password")], t("create_new_pass_match")),
  });

  return (
    <Container>
      <HeaderMobileLogin image="/changePass.svg" />
      <H2>{t("create_new_pass_title")}</H2>
      <ContainerRules>
        <TitleRules>{t("create_new_pass_rules_title")}</TitleRules>
        <List>
          <li>{t("create_new_pass_rules_condition")}</li>
          <li>{t("create_new_pass_rules_condition_size")}</li>
          <li>{t("create_new_pass_rules_condition_letter_upper")}</li>
          <li>{t("create_new_pass_rules_condition_letter")}</li>
          <li>{t("create_new_pass_rules_condition_simbol")}</li>
        </List>
      </ContainerRules>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={schema}
        onSubmit={(value) => {
          console.log(["valor recebidos", value]);
        }}
      >
        {({ values, errors, handleChange, handleBlur }) => (
          <Form>
            <Input
              title={t("create_new_pass_input_password")}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder={t("create_new_pass_input_password_placeholder")}
              error={errors.password}
              type="password"
            />

            <Spacer size="m" />
            <Input
              title={t("create_new_pass_input_password_confirm")}
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              placeholder={t(
                "create_new_pass_input_password_placeholder_confirm"
              )}
              error={errors.confirmPassword}
              type="password"
            />
            {/* <MessageError>{errors.confirmPassword}</MessageError> */}
            <Spacer size="m" />

            <Button type="submit" variant="Primary">
              ENVIAR
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateNewPassword;
