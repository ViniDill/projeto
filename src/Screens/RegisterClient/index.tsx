import React, { useCallback, useState, useEffect } from "react";

import { Card } from "@mui/material";
import TypeOfPersonCard from "../../Components/TypeOfPersonCard";
import Spacer from "../../Components/Spacer";
import Input from "../../DesingSystem/Input";
import { Formik } from "formik";
import AddButton from "../../Components/AddButton";
import AddressCard from "../../Components/AddressCard";
import { PatternFormat, NumericFormat } from "react-number-format";
import Drawer from "@mui/material/Drawer";
import Switch from "../../DesingSystem/Switch";
import Button from "../../DesingSystem/Button";
import { apiZipCodeService } from "../../services/ZipCodeService/ZipCodeService";
import { ZipCodeDetailsProps } from "../../services/ZipCodeService/IZipCodeService";
import {
  Container,
  ContainerType,
  ContentPerson,
  ContainerClients,
  ContainerForm,
  GridClient,
  Title,
  AddressContainer,
  AddressArea,
  AddressDrawer,
  ContainerDrawer,
  DefaultText,
  DefaultContainer,
  Action,
  ButtonCtn,
  SaveContainer,
  PeopleImage,
} from "./styles";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import LoadingFullScreen from "../../Components/LoadingFullScreen";
import { apiClientService } from "../../services/ClientService/ClientService";
import { RegistrationfullInformationClientProps } from "../../services/ClientService/ClientServiceProps";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface LocationState {
  clientdId?: string | number;
}

const RegisterClient: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [addressDrawer, setAddressDrawer] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [typeOfPerson, setTypeOfPerson] = useState<
    "person" | "company" | undefined
  >(undefined);
  const [initialValuePerson, setInitialValuePerson] = useState({
    fullName: "",
    email: "",
    cpf: "",
    phone: "",
    birth: "",
  });
  const [initialValueCompany, setInitialValueCompany] = useState({
    stateIncrition: "",
    socialRazon: "",
    phantasyName: "",
    cnpj: "",
    email: "",
    phone: "",
  });

  const [addressValues, setAddressValues] = useState<AddressValuesProps>({
    id: "",
    name: "",
    zipcode: "",
    state: "",
    city: "",
    street: "",
    neighborhood: "",
    number: "",
    additional_information: "",
    main: false,
    complement: "",
  });

  const [isDefaultAddress, setIsDefaultAddress] = useState<boolean>(false);

  const location = useLocation();

  const clientdId = location.state
    ? (location.state as LocationState).clientdId
    : null;

  const handleSwitchChange = () => {
    setIsDefaultAddress((prev) => !prev);
  };

  const getClientById = useCallback(async (id: string | number) => {
    try {
      setLoading(true);
      const response = await apiClientService.getClientsById(id);
      if (response.client_type === "cpf") {
        setTypeOfPerson("person");
        setInitialValuePerson({
          fullName: response.full_name || "",
          email: response.email,
          cpf: response.document,
          phone: response.phone,
          birth: response.birth_date || "",
        });
        setAddresses(response.addresses as any);
      }
      if (response.client_type === "cnpj") {
        setTypeOfPerson("company");
        setInitialValueCompany({
          stateIncrition: response.state_registration || "",
          socialRazon: response.full_name || "",
          phantasyName: response.trade_name || "",
          cnpj: response.document,
          email: response.email,
          phone: response.phone,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUpdateClient = useCallback(
    async (
      id: string | number,
      value: RegistrationfullInformationClientProps
    ) => {
      try {
        setLoading(true);
        await apiClientService.updateClientById(id, value);
        navigation("/clients-list");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (clientdId) {
      getClientById(clientdId);
    }
  }, []);

  interface AddressValuesProps {
    id?: string | number;
    name: string;
    street: string;
    neighborhood: string;
    state: string;
    city: string;
    additional_information: string;
    number: string;
    zipcode: string;
    main: boolean;
    complement: string;
  }

  const [addresses, setAddresses] = useState<AddressValuesProps[]>([]);

  const handleAddressSubmit = (newAddress: AddressValuesProps) => {
    const updatedAddresses = [...addresses];
    newAddress.id = uuidv4();

    if (editingIndex === null) {
      const newAddressWithSelected = {
        ...newAddress,
        selected: isDefaultAddress,
      };
      updatedAddresses.push(newAddressWithSelected);

      if (isDefaultAddress) {
        updatedAddresses.forEach((address, index) => {
          if (index !== updatedAddresses.length - 1) {
            address.main = false;
          }
        });
      }
    } else {
      updatedAddresses[editingIndex] = {
        ...newAddress,
        main: isDefaultAddress,
      };

      if (isDefaultAddress) {
        updatedAddresses.forEach((address, index) => {
          if (index !== editingIndex) {
            address.main = false;
          }
        });
      }
      setEditingIndex(null);
    }

    setAddresses(updatedAddresses);
    setAddressDrawer(false);
  };

  const resetAddressForm = () => {
    setAddressValues({
      name: "",
      zipcode: "",
      state: "",
      city: "",
      street: "",
      neighborhood: "",
      complement: "",
      number: "",
      additional_information: "",
      main: false,
    });
    setIsDefaultAddress(false);
  };

  const handleEditAddress = (index: number) => {
    setAddressValues(addresses[index]);
    setIsDefaultAddress(addresses[index].main || false);
    setEditingIndex(index);
    setAddressDrawer(true);
  };

  const getZipcode = async (cep: string, name: string) => {
    try {
      setLoading(true);
      const addressDetails: ZipCodeDetailsProps =
        await apiZipCodeService.getZipCodeDetails(cep);
      setAddressValues((prevAddressValues) => ({
        ...prevAddressValues,
        zipcode: addressDetails.cep || "",
        state: addressDetails.uf || "",
        city: addressDetails.localidade || "",
        street: addressDetails.logradouro || "",
        neighborhood: addressDetails.bairro || "",
        name: name || "",
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterClient = useCallback(
    async (value: RegistrationfullInformationClientProps) => {
      setLoading(true);
      try {
        await apiClientService.createClient(value);
        navigation("/clients-list");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const schemaPerson = Yup.object().shape({
    fullName: Yup.string().required(t("register_client_field_name_required")),
    email: Yup.string()
      .required(t("register_client_field_email_required"))
      .email(t("register_client_field_email_format_invalid")),
    cpf: Yup.string()
      .required(t("register_client_field_cpf_required"))
      .matches(/^\d{11}$/, t("register_client_field_cpf_format_invalid")),
    phone: Yup.string()
      .required(t("register_client_field_phone_required"))
      .matches(/^\d{11}$/, t("register_client_field_phone_format_invalid")),
    birth: Yup.string()
      .required(t("register_client_field_birth_required"))
      .matches(
        /^\d{2}\/\d{2}\/\d{4}$/,
        t("register_client_field_birth_format_invalid")
      ),
  });

  const schemaCompany = Yup.object().shape({
    stateIncrition: Yup.string().required(
      t("register_client_field_stateIncrition_required")
    ),
    email: Yup.string()
      .required(t("register_client_field_email_required"))
      .email(t("register_client_field_email_format_invalid")),
    cnpj: Yup.string()
      .required(t("register_client_field_CNPJ_required"))
      .matches(/^\d{14}$/, t("register_client_field_CNPJ_format_invalid")),
    phone: Yup.string()
      .required(t("register_client_field_phone_required"))
      .matches(/^\d{11}$/, t("register_client_field_phone_format_invalid")),
    socialRazon: Yup.string().required(
      t("register_client_field_social_razon_required")
    ),
    phantasyName: Yup.string().required(
      t("register_client_field_phantasy_name_required")
    ),
  });

  const schemaAddres = Yup.object().shape({
    name: Yup.string().required(t("register_client_field_house_name_required")),
    city: Yup.string().required(t("register_client_field_city_required")),
    zipcode: Yup.string()
      .required(t("register_client_field_cep_required"))
      .matches(/^\d{8}$/, t("register_client_field_cep_invalid_format")),
    state: Yup.string()
      .required(t("register_client_field_state_required"))
      .length(2, t("register_client_field_state_invalid_format")),
    street: Yup.string().required(t("register_client_field_street_required")),
    neighborhood: Yup.string().required(
      t("register_client_field_neighborhood_required")
    ),
    complement: Yup.string().required(
      t("register_client_field_complement_required")
    ),
    number: Yup.string().required(t("register_client_field_number_required")),
  });

  const renderAddress = () => (
    <>
      <Title>{t("register_client_title_address")}</Title>
      <AddressContainer>
        <AddButton
          text={t("register_client_add_address")}
          onClick={() => {
            setAddressDrawer(true);
          }}
        />
        <Spacer size="l" />
        <AddressArea>
          {addresses.map((address: AddressValuesProps, index: number) => (
            <AddressCard
              key={`${address.name}-${address.number}`}
              houseName={address.name || ""}
              street={address.street || ""}
              neighborhood={address.neighborhood || ""}
              state={address.state || ""}
              city={address.city || ""}
              complement={
                `${address.additional_information} - ${address.number}` || ""
              }
              openMenu={() => handleEditAddress(index)}
              selected={address.main}
            />
          ))}
        </AddressArea>
      </AddressContainer>
    </>
  );

  return (
    <Container>
      <h1>
        {clientdId
          ? t("register_client_title_update_client")
          : t("register_client_title_register_client")}
      </h1>
      <Card>
        <ContentPerson>
          <ContainerType>
            <div>
              <TypeOfPersonCard
                onClick={() => {
                  setTypeOfPerson("person");
                }}
                active={typeOfPerson === "person"}
              />
            </div>
            <div>
              <TypeOfPersonCard
                type="company"
                onClick={() => {
                  setTypeOfPerson("company");
                }}
                active={typeOfPerson === "company"}
              />
            </div>
          </ContainerType>
          <PeopleImage>
            <img src="/client-register.png" alt="client-register" />
          </PeopleImage>
        </ContentPerson>
      </Card>
      <Spacer size="m" />
      {typeOfPerson && typeOfPerson === "person" && (
        <Card>
          <ContainerClients>
            <Formik
              initialValues={initialValuePerson}
              validationSchema={schemaPerson}
              onSubmit={(value) => {
                const enderecos = addresses as any;
                const client: RegistrationfullInformationClientProps = {
                  client_type: "cpf",
                  document: value.cpf,
                  full_name: value.fullName,
                  birth_date: value.birth,
                  email: value.email,
                  phone: value.phone,
                  addresses: [...enderecos],
                };
                if (clientdId) {
                  handleUpdateClient(clientdId, client);
                } else {
                  handleRegisterClient(client);
                }
              }}
              enableReinitialize
            >
              {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                <ContainerForm>
                  <GridClient>
                    <Input
                      title={t("register_client_input_full_name")}
                      name="fullName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.fullName}
                      error={errors.fullName}
                    />

                    <Input
                      title={t("register_client_input_email")}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      error={errors.email}
                    />

                    <PatternFormat
                      title={t("register_client_input_cpf")}
                      name="cpf"
                      onBlur={handleBlur}
                      onChange={(value) => {
                        const justNumber = String(value.target.value).replace(
                          /\D/g,
                          ""
                        );
                        value.target.value = justNumber;
                        handleChange(value);
                      }}
                      value={values.cpf}
                      error={errors.cpf}
                      format="###.###.###-##"
                      customInput={Input}
                    />

                    <PatternFormat
                      title={t("register_client_input_phone")}
                      name="phone"
                      onBlur={handleBlur}
                      onChange={(value) => {
                        const justNumber = String(value.target.value).replace(
                          /\D/g,
                          ""
                        );
                        value.target.value = justNumber;
                        handleChange(value);
                      }}
                      value={values.phone}
                      error={errors.phone}
                      format="## #####-####"
                      customInput={Input}
                    />

                    <PatternFormat
                      title={t("register_client_input_birth")}
                      name="birth"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.birth}
                      error={errors.birth}
                      format="##/##/####"
                      customInput={Input}
                    />
                  </GridClient>
                  <Spacer size="m" />
                  {renderAddress()}
                  <Spacer size="m" />
                  <SaveContainer>
                    <div />
                    <Button
                      onClick={() => {
                        handleSubmit();
                      }}
                      variant="Primary"
                    >
                      {clientdId
                        ? t("register_client_button_update")
                        : t("register_client_button_save")}
                    </Button>
                  </SaveContainer>
                </ContainerForm>
              )}
            </Formik>
          </ContainerClients>
        </Card>
      )}
      {typeOfPerson && typeOfPerson === "company" && (
        <Card>
          <ContainerClients>
            <Formik
              initialValues={initialValueCompany}
              validationSchema={schemaCompany}
              onSubmit={(value) => {
                const enderecos = addresses as any;
                const client: RegistrationfullInformationClientProps = {
                  client_type: "cnpj",
                  document: value.cnpj,
                  email: value.email,
                  phone: value.phone,
                  state_registration: value.stateIncrition,
                  socialRazon: value.socialRazon,
                  trade_name: value.phantasyName,
                  full_name: value.socialRazon,
                  addresses: [...enderecos],
                };
                if (clientdId) {
                  handleUpdateClient(clientdId, client);
                } else {
                  handleRegisterClient(client);
                }
              }}
              enableReinitialize
            >
              {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                <ContainerForm>
                  <GridClient>
                    <PatternFormat
                      title={t("register_client_input_state_inscrition")}
                      name="stateIncrition"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.stateIncrition}
                      error={errors.stateIncrition}
                      customInput={Input}
                      format="###.###.###.###"
                    />

                    <Input
                      title={t("register_client_input_social_razon")}
                      name="socialRazon"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.socialRazon}
                      error={errors.socialRazon}
                    />

                    <Input
                      title={t("register_client_input_phantasy_name")}
                      name="phantasyName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phantasyName}
                      error={errors.phantasyName}
                    />

                    <PatternFormat
                      title={t("register_client_input_CNPJ")}
                      name="cnpj"
                      onBlur={handleBlur}
                      format="##.###.###/####-##"
                      customInput={Input}
                      value={values.cnpj}
                      error={errors.cnpj}
                      onChange={(value) => {
                        const justNumber = String(value.target.value).replace(
                          /\D/g,
                          ""
                        );
                        value.target.value = justNumber;
                        handleChange(value);
                      }}
                    />

                    <Input
                      title={t("register_client_input_email")}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      error={errors.email}
                    />

                    <PatternFormat
                      title={t("register_client_input_phone")}
                      name="phone"
                      onBlur={handleBlur}
                      onChange={(value) => {
                        const justNumber = String(value.target.value).replace(
                          /\D/g,
                          ""
                        );
                        value.target.value = justNumber;
                        handleChange(value);
                      }}
                      value={values.phone}
                      error={errors.phone}
                      format="## #####-####"
                      customInput={Input}
                    />
                  </GridClient>
                  <Spacer size="m" />
                  {renderAddress()}
                  <Spacer size="m" />
                  <SaveContainer>
                    <div />
                    <Button
                      onClick={() => {
                        handleSubmit();
                      }}
                      variant="Primary"
                    >
                      {clientdId
                        ? t("register_client_button_update")
                        : t("register_client_button_save")}
                    </Button>
                  </SaveContainer>
                </ContainerForm>
              )}
            </Formik>
          </ContainerClients>
        </Card>
      )}
      <Drawer
        open={addressDrawer}
        onClose={() => {
          setAddressDrawer(false);
          resetAddressForm();
        }}
        anchor="bottom"
      >
        <Formik
          initialValues={addressValues}
          validationSchema={schemaAddres}
          onSubmit={(value) => {
            console.log(value);
          }}
          enableReinitialize
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <ContainerDrawer>
              <Spacer size="l" />
              <AddressDrawer>
                <Input
                  title={t("register_client_input_house_name")}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name}
                />
                <PatternFormat
                  title={t("register_client_input_cep")}
                  name="zipcode"
                  onBlur={handleBlur}
                  onChange={(value) => {
                    const justNumber = String(value.target.value).replace(
                      /\D/g,
                      ""
                    );
                    if (justNumber.length >= 8) {
                      getZipcode(justNumber, values.name);
                    }
                    value.target.value = justNumber;
                    handleChange(value);
                  }}
                  value={values.zipcode}
                  error={errors.zipcode}
                  format="##.###-###"
                  customInput={Input}
                />
                <Input
                  title={t("register_client_input_state")}
                  name="state"
                  onBlur={handleBlur}
                  value={values.state}
                  error={errors.state}
                  onChange={(value) => {
                    if (value.target.value.length >= 3) {
                      return;
                    }
                    value.target.value = value.target.value.toUpperCase();
                    handleChange(value);
                  }}
                />
                <Input
                  title={t("register_client_input_city")}
                  name="city"
                  onBlur={handleBlur}
                  value={values.city}
                  onChange={handleChange}
                  error={errors.city}
                />
                <Input
                  title={t("register_client_input_street")}
                  name="street"
                  onBlur={handleBlur}
                  value={values.street}
                  onChange={handleChange}
                  error={errors.street}
                />
                <Input
                  title={t("register_client_input_neighborhood")}
                  name="neighborhood"
                  onBlur={handleBlur}
                  value={values.neighborhood}
                  onChange={handleChange}
                  error={errors.neighborhood}
                />
                <Input
                  title={t("register_client_input_complement")}
                  name="complement"
                  onBlur={handleBlur}
                  value={values.complement}
                  onChange={handleChange}
                  error={errors.complement}
                />
                <NumericFormat
                  title={t("register_client_input_number")}
                  name="number"
                  onBlur={handleBlur}
                  value={values.number}
                  onChange={handleChange}
                  error={errors.number}
                  customInput={Input}
                />
                <DefaultContainer>
                  <DefaultText>
                    {t("register_client_input_default_address")}
                  </DefaultText>
                  <Switch
                    checked={isDefaultAddress}
                    onClick={handleSwitchChange}
                  />
                </DefaultContainer>
              </AddressDrawer>
              <Spacer size="m" />
              <div>
                <Input
                  title={t("register_client_input_other")}
                  name="additional_information"
                  onBlur={handleBlur}
                  value={values.additional_information}
                  onChange={handleChange}
                  error={errors.additional_information}
                />
              </div>
              <Spacer size="m" />
              <Action>
                <ButtonCtn>
                  <Button
                    onClick={() => {
                      setAddressDrawer(false);
                      resetAddressForm();
                    }}
                  >
                    {t("register_client_button_close")}
                  </Button>
                </ButtonCtn>
                <ButtonCtn>
                  <Button
                    onClick={() => {
                      handleAddressSubmit(values);
                      resetAddressForm();
                    }}
                    variant="Primary"
                  >
                    {clientdId
                      ? t("register_client_button_update")
                      : t("register_client_button_save")}
                  </Button>
                </ButtonCtn>
              </Action>
              <Spacer size="l" />
            </ContainerDrawer>
          )}
        </Formik>
        {loading && addressDrawer && <LoadingFullScreen />}
      </Drawer>
      {loading && !addressDrawer && <LoadingFullScreen />}
    </Container>
  );
};

export default RegisterClient;
