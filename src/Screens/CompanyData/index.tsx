import React, { useState } from "react";
import {
  Container,
  Background,
  InputContent,
  LeftContainer,
  RightContainer,
  PhoneContainer,
} from "./styles";
import { useTranslation } from "react-i18next";
import Input from "../../DesingSystem/Input";
import Button from "../../DesingSystem/Button";
import Spacer from "../../Components/Spacer";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import SkeletonCompanyData from "./SkeletonCompanyData";
import { PatternFormat } from "react-number-format";

const CompanyData: React.FC = () => {
  const { t } = useTranslation();

  const initialValues = {
    companyName: "",
    stateRegistration: "",
    email: "",
    cnpj: "",
    phone: "",
  };

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required(
      t("company_data_error_message_company_name_required")
    ),
    stateRegistration: Yup.string().required(
      t("company_data_error_message_state_registration_required")
    ),
    email: Yup.string().required(
      t("company_data_error_message_email_required")
    ),
    cnpj: Yup.string().required(t("company_data_error_message_cnpj_required")),
    phone: Yup.string()
      .required(t("register_client_field_phone_required"))
      .matches(/^\d{11}$/, t("register_client_field_phone_format_invalid")),
  });

  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      {loading ? (
        <SkeletonCompanyData />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {}}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Container>
                <h1 className="Title">{t("company_data_title")}</h1>
                <Background>
                  <LeftContainer>
                    <h2>{t("company_data_enter_company_details")}</h2>
                    <InputContent>
                      <label>{t("company_data_company_name")}</label>
                      <Spacer size="s" />
                      <Input
                        className="Input"
                        name="companyName"
                        placeholder={t("company_data_what_is_the_company_name")}
                      />
                    </InputContent>
                    <InputContent>
                      <label>{t("company_data_state_registration")}</label>
                      <Spacer size="s" />
                      <Input
                        className="Input"
                        name="stateRegistration"
                        placeholder={t("company_data_state_registration")}
                      />
                    </InputContent>
                    <InputContent>
                      <label>{t("company_data_email")}</label>
                      <Spacer size="s" />
                      <Input
                        className="Input"
                        name="email"
                        placeholder={t("company_data_email")}
                      />
                    </InputContent>
                    <InputContent>
                      <label>{t("company_data_cnpj")}</label>
                      <Spacer size="s" />
                      <PatternFormat
                        name="cnpj"
                        className="Input"
                        format="##.###.###/####-##"
                        customInput={Input}
                        placeholder={t("company_data_cnpj")}
                      />
                    </InputContent>
                    <PhoneContainer>
                      <label>{t("company_data_phone")}</label>
                      <Spacer size="s" />
                      <Input
                        name="phone"
                        placeholder={t("company_data_phone")}
                      />
                    </PhoneContainer>
                    <Button type="submit" variant="Primary" className="Button">
                      {t("company_data_send_button")}
                    </Button>
                  </LeftContainer>
                  <RightContainer>
                    <img src="/icons/building.svg" alt="Building" />
                  </RightContainer>
                </Background>
              </Container>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default CompanyData;
