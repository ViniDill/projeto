import React from "react";
import HeaderMobileLogin from "../../Components/HeaderMobileLogin";
import { Formik, Form } from "formik";
import Button from "../../DesingSystem/Button";
import Input from "../../DesingSystem/Input";
import Text from "../../DesingSystem/Text";
import { Subtitle } from "../../DesingSystem/Subtitle";
import Link from "../../DesingSystem/Link";
import Spacer from "../../Components/Spacer";
import { useTranslation } from "react-i18next";
import { H2 } from "../../DesingSystem/Title";

import { Container, AlignLink, LabelError } from "./styles";
import * as Yup from "yup";

const ForgotPassword: React.FC = () => {
  const { t } = useTranslation();
  const schema = Yup.object().shape({
    email: Yup.string()
      .required(t("forgot_pass_email_required"))
      .email(t("forgot_pass_email_invalid")),
  });

  return (
    <Container>
      <HeaderMobileLogin image="/changePass.svg" />
      <H2>{t("forgot_pass_title")}</H2>
      <Text align="center">{t("forgot_pass_sub_title")}</Text>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={schema}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({ values, errors, handleChange, handleBlur }) => (
          <Form>
            <Input
              title={t("forgot_pass_input_label")}
              placeholder={t("forgot_pass_input_email")}
              value={values.email}
              error={errors.email}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Spacer size="m" />
            <AlignLink>
              <Link type="Neutral" align="center">
                {t("forgot_pass_link_another_way")}
              </Link>
            </AlignLink>

            <Spacer size="m" />
            <Button variant="Neutral">{t("forgot_pass_button_send")}</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ForgotPassword;
