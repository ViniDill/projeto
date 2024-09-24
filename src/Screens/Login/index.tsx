import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, AlignForgotPassword } from "./styles";
import Button from "../../DesingSystem/Button";
import HeaderMobileLogin from "../../Components/HeaderMobileLogin";
import LoginInput from "../../DesingSystem/LoginInput";
import Spacer from "../../Components/Spacer";
import Link from "../../DesingSystem/Link";
import ErrorMessage from "../../Components/ErrorMessage";
import { apiLogInService } from "../../services/authService/authService";
import LoadingFullScreen from "../../Components/LoadingFullScreen";
import WarningMessage from "../../Components/WarningMessage";
import useAuthStore from "../../Store/authStore";
import { useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const tokenSet = useAuthStore((e) => e.setToken);
  const setUser = useAuthStore((e) => e.setUser);

  const schema = Yup.object().shape({
    email: Yup.string()
      .required(t("login_error_message_required_email"))
      .email(t("login_error_message_format_email")),
    password: Yup.string()
      .required(t("login_error_message_password_required"))
      .min(8, t("login_error_message_password_wrong_format")),
  });

  const handleLogIn = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      try {
        setLoading(true);
        const response = await apiLogInService.logIn({ email, password });
        tokenSet(response.token);
        setUser(
          response.user.name,
          response.user.email,
          response.user.email_verified_at
        );
        window.location.reload();
      } catch (error) {
        setErrorMessage(t("login_message_invalid_login"));
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <Container>
      <HeaderMobileLogin />
      {errorMessage && (
        <>
          <Spacer size="m" />
          <WarningMessage
            type="error"
            descrition={errorMessage}
            onClick={() => {
              setErrorMessage(undefined);
            }}
          />
          <Spacer size="m" />
        </>
      )}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={(value) => {
          handleLogIn(value);
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <div>
              <Spacer size="2xl" />
              {!!errors.email && <ErrorMessage message={errors.email} />}
              <LoginInput
                name="email"
                variation="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={t("login_input_placeholder_email")}
                id="email"
                error={!!errors.email}
              />
              <Spacer size="l" />
              {!!errors.password && <ErrorMessage message={errors.password} />}
              <LoginInput
                variation="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                id="password"
                name="password"
                placeholder={t("login_input_placeholder_password")}
                error={!!errors.password}
              />
              <Spacer size="m" />
              <AlignForgotPassword>
                <div>
                  <Link>{t("login_forgot_password")}</Link>
                </div>
              </AlignForgotPassword>

              <Spacer size="m" />
              <div>
                <Button type="submit" variant="Primary">
                  {t("login_button")}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      {loading && <LoadingFullScreen />}
    </Container>
  );
};

export default Login;
