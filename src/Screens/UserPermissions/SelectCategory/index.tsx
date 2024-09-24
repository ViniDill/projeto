import React, { useState, useCallback } from "react";
import {
  Container,
  HeaderContainer,
  ButtonContainer,
  BackgroundContainer,
  ContainerContent,
  RoleInformation,
  InputContainer,
  UserPermissonsContainer,
  ButtonContainerMobile,
  PermissionRow,
  PermissionName,
  PermissionsColumn,
  PermissionSwitch,
} from "./styles";
import Input from "../../../DesingSystem/Input";
import { H4 } from "../../../DesingSystem/Title";
import { Subtitle } from "../../../DesingSystem/Subtitle";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import Switch from "../../../DesingSystem/Switch";

const SelectCategory: React.FC = () => {
  const { t } = useTranslation();

  const [permissions, setPermissions] = useState([
    { id: 1, name: "Permission 1", enabled: false },
    { id: 2, name: "Permission 2", enabled: false },
    { id: 3, name: "Permission 3", enabled: false },
    { id: 4, name: "Permission 4", enabled: false },
    { id: 5, name: "Permission 5", enabled: false },
    { id: 6, name: "Permission 6", enabled: false },
    { id: 7, name: "Permission 7", enabled: false },
    { id: 8, name: "Permission 8", enabled: false },
    { id: 9, name: "Permission 9", enabled: false },
    { id: 10, name: "Permission 10", enabled: false },
    { id: 11, name: "Permission 11", enabled: false },
    { id: 12, name: "Permission 12", enabled: false },
    { id: 13, name: "Permission 13", enabled: false },
    { id: 14, name: "Permission 14", enabled: false },
    { id: 15, name: "Permission 15", enabled: false },
    { id: 16, name: "Permission 16", enabled: false },
  ]);

  const SwitchActive = useCallback(
    (index: number, checked: boolean) => {
      setPermissions((prevPermissions) => {
        let updatedPermissions = [...prevPermissions];
        updatedPermissions[index].enabled = !checked;
        return updatedPermissions;
      });
    },
    [permissions]
  );

  const initialValues = {
    roleName: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    roleName: Yup.string().required(
      t("User_permissions_error_message_role_name_required")
    ),
    description: Yup.string().required(
      t("User_permissions_error_message_description_required")
    ),
  });

  const renderSwitch = useCallback(
    () => (
      <>
        {permissions.map((permission, index) => (
          <PermissionRow key={permission.id}>
            <PermissionName>{permission.name}</PermissionName>
            <PermissionSwitch>
              <Switch
                checked={permission.enabled}
                onClick={() => {
                  SwitchActive(index, permission.enabled);
                }}
              />
            </PermissionSwitch>
          </PermissionRow>
        ))}
      </>
    ),
    []
  );

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
              <H4>{t("User_permissions_Permissions")}</H4>
              <ButtonContainer>
                <button
                  type="submit"
                  className="Send-Button"
                  data-testid="send-button"
                >
                  {t("User_permissions_save")}
                </button>
              </ButtonContainer>
            </HeaderContainer>
            <BackgroundContainer>
              <Subtitle>{t("User_permissions_role_data")}</Subtitle>
              <ContainerContent>
                <RoleInformation>
                  <InputContainer>
                    <label htmlFor="role">
                      {t("User_permissions_first_role_name")}
                    </label>
                    <Field
                      as={Input}
                      type="text"
                      name="roleName"
                      placeholder={t("User_permissions_role_name_placeholder")}
                    />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="description">
                      {t("User_permissions_description")}
                    </label>
                    <Field
                      as={Input}
                      type="text"
                      name="description"
                      placeholder={t(
                        "User_permissions_description_placeholder"
                      )}
                    />
                  </InputContainer>
                </RoleInformation>
              </ContainerContent>
            </BackgroundContainer>
            <UserPermissonsContainer>
              <Subtitle className="Subtitle">
                {t("User_permissions_user_permissions")}
              </Subtitle>
              <PermissionsColumn>{renderSwitch()}</PermissionsColumn>
            </UserPermissonsContainer>
            <ButtonContainerMobile>
              <button type="submit" className="Send-Button">
                {t("User_permissions_save")}
              </button>
            </ButtonContainerMobile>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SelectCategory;
