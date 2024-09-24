import React, { useState } from "react";
import {
  Container,
  Photo,
  PersonalInformation,
  ContainerContent,
  HeaderContainer,
  InputContainer,
  Functions,
  BackgroundContainer,
  ButtonContainer,
  ButtonContainerMobile,
  DropSelect,
} from "./styles";
import Input from "../../../DesingSystem/Input";
// import UploadImage from "../../../Components/UploadImage";
import { H4 } from "../../../DesingSystem/Title";
import { Subtitle } from "../../../DesingSystem/Subtitle";
import Text from "../../../DesingSystem/Text";
import Select from "../../../DesingSystem/Select";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const PersonalDetail: React.FC = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState<string | null>(null);

  const AccessLevel = [
    { value: "01", label: "Vendedor" },
    { value: "02", label: "Consultor" },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    active: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(
      t("Personal_details_error_message_first_name_required")
    ),
    lastName: Yup.string().required(
      t("Personal_details_error_message_last_name_required")
    ),
    email: Yup.string()
      .email(t("Personal_details_error_message_invalid_email"))
      .required(t("Personal_details_error_message_email_required")),
    username: Yup.string().required(
      t("Personal_details_error_message_username_required")
    ),
    password: Yup.string()
      .min(8, t("Personal_details_password_must_have_at_minimum_8_characters"))
      .required(t("Personal_details_error_message_password_required")),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        t("Personal_details_passwords_must_be_equal")
      )
      .required(t("Personal_details_error_message_confirm_password_required")),
    active: Yup.string().required(
      t("Personal_details_error_message_active_required")
    ),
  });

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <HeaderContainer>
              <H4 className="H4">
                {t("Personal_details_Registration_information")}
              </H4>
              <ButtonContainer>
                <button type="submit" className="Send-Button">
                  {t("Personal_details_save")}
                </button>
              </ButtonContainer>
            </HeaderContainer>
            <BackgroundContainer>
              <Subtitle className="Subtitle">
                {t("Personal_details_personal_details")}
              </Subtitle>
              <ContainerContent>
                <PersonalInformation>
                  <InputContainer>
                    <label className="Label-first" htmlFor="firstName">
                      {t("Personal_details_first_name")}
                    </label>
                    <Field
                      as={Input}
                      type="text"
                      name="firstName"
                      placeholder={t("Personal_details_name_placeholder")}
                      className="Input"
                    />
                  </InputContainer>
                  <InputContainer>
                    <label className="Label" htmlFor="lastName">
                      {t("Personal_details_last_name")}
                    </label>
                    <Field
                      as={Input}
                      type="text"
                      name="lastName"
                      placeholder={t("Personal_details_lastname_placeholder")}
                      className="Input"
                    />
                  </InputContainer>
                  <InputContainer>
                    <label className="Label" htmlFor="email">
                      {t("Personal_details_email")}
                    </label>
                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      placeholder={t("Personal_details_email_placeholder")}
                      className="Input"
                    />
                  </InputContainer>
                  <InputContainer>
                    <label className="Label" htmlFor="username">
                      {t("Personal_details_user_name")}
                    </label>
                    <Field
                      as={Input}
                      type="text"
                      name="username"
                      placeholder={t("Personal_details_user_placeholder")}
                      className="Input"
                    />
                  </InputContainer>
                  <InputContainer>
                    <label className="Label" htmlFor="password">
                      {t("Personal_details_password")}
                    </label>
                    <Field
                      as={Input}
                      type="password"
                      name="password"
                      placeholder={t("Personal_details_password_placeholder")}
                      className="Input"
                    />
                  </InputContainer>
                  <InputContainer>
                    <label className="Label" htmlFor="confirmPassword">
                      {t("Personal_details_confirm_password")}
                    </label>
                    <Field
                      as={Input}
                      type="password"
                      name="confirmPassword"
                      placeholder={t(
                        "Personal_details_confirm_password_placeholder"
                      )}
                      className="Input"
                    />
                  </InputContainer>
                  <InputContainer>
                    <label className="Label" htmlFor="active">
                      {t("Personal_details_active")}
                    </label>
                    <Field
                      as={Input}
                      type="text"
                      name="active"
                      placeholder={t("Personal_details_active_placeholder")}
                      className="Input"
                    />
                  </InputContainer>
                </PersonalInformation>
                <Photo>
                  <Text size="md">{t("Personal_details_profile_picture")}</Text>
                  {/* <UploadImage
                    imageSrc={image}
                    setImage={setImage}
                    errorMessage={null}
                  /> */}
                </Photo>
              </ContainerContent>
            </BackgroundContainer>
            <Functions>
              <Subtitle className="Subtitle">
                {t("Personal_details_functions")}
              </Subtitle>
              <DropSelect>
                <Select label={t("Personal_details_access_level")} />
              </DropSelect>
            </Functions>
            <ButtonContainerMobile>
              <button type="submit" className="Send-Button">
                {t("Personal_details_save")}
              </button>
            </ButtonContainerMobile>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default PersonalDetail;
