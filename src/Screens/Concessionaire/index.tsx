import React, { useState, useCallback, useEffect } from "react";
import { Card } from "@mui/material";
import { Formik } from "formik";
import Input from "../../DesingSystem/Input";
import Button from "../../DesingSystem/Button";
import { useTranslation } from "react-i18next";
import SkeletonConcessionaire from "./Skeleton";

import {
  Container,
  ContainerCard,
  Title,
  ConainterTarrif,
  ContainerTitle,
  ButtonContainer,
} from "./styles";
import { NumericFormat } from "react-number-format";
import Spacer from "../../Components/Spacer";
import { apiConcessionaireService } from "../../services/ConcessionaireService/ConcessionaireService";
import { CreateProps } from "../../services/ConcessionaireService/ConcessionaireProps";
import { useNavigate, useLocation } from "react-router-dom";

interface LocationState {
  providerId?: string | number;
}

const Concessionaire: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [initialState, setInitialState] = useState({
    title: "",
    tariffA: "",
    tariffB: "",
    ruralTension: "",
    cableValueB: "",
    TUSDG: "",
  });

  const providerId = location.state
    ? (location.state as LocationState).providerId
    : null;

  const handleSubmit = useCallback(async (value: CreateProps) => {
    try {
      setLoading(true);
      await apiConcessionaireService.createConcessionaire(value);
      navigation("/energy-provider-list");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUpdate = useCallback(
    async (id: string | number, value: CreateProps) => {
      try {
        setLoading(true);
        await apiConcessionaireService.updateConcessionaire(id, value);
        navigation("/energy-provider-list");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const getByID = useCallback(async (id: string | number) => {
    try {
      setLoading(true);
      const response = await apiConcessionaireService.getConcessionaireById(id);
      setInitialState({
        title: response.title,
        tariffA: response.group_a_voltage_tariff.toString(),
        tariffB: response.group_b_voltage_tariff.toString(),
        ruralTension: response.rural_voltage_value.toString(),
        cableValueB: response.b_wire_value.toString(),
        TUSDG: response.tusd_g_value.toString(),
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (providerId) {
      getByID(providerId);
    }
  }, []);

  if (loading) {
    return <SkeletonConcessionaire />;
  }

  return (
    <Container>
      <h1>{t("concessionaire_title")}</h1>
      <Card>
        <ContainerCard>
          <Title>{t("concessionaire_sub_title")}</Title>
          <Formik
            initialValues={initialState}
            onSubmit={(value) => {
              const format: CreateProps = {
                title: value.title,
                group_a_voltage_tariff: Number(value.tariffA),
                group_b_voltage_tariff: Number(value.tariffB),
                rural_voltage_value: Number(value.ruralTension),
                b_wire_value: Number(value.cableValueB),
                tusd_g_value: Number(value.TUSDG),
              };
              providerId
                ? handleUpdate(providerId, format)
                : handleSubmit(format);
            }}
          >
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
              <div>
                <ContainerTitle>
                  <Input
                    name="title"
                    title={t("concessionaire_input_title")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    error={errors.title}
                  />
                </ContainerTitle>
                <Spacer size="m" />
                <ConainterTarrif>
                  <NumericFormat
                    title={t("concessionaire_input_tariffA")}
                    name="tariffA"
                    value={values.tariffA}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    customInput={Input}
                    error={errors.tariffA}
                  />
                  <NumericFormat
                    title={t("concessionaire_input_tariffB")}
                    name="tariffB"
                    value={values.tariffB}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    customInput={Input}
                    error={errors.tariffB}
                  />
                  <NumericFormat
                    title={t("concessionaire_input_ruralTension")}
                    name="ruralTension"
                    value={values.ruralTension}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    customInput={Input}
                    error={errors.ruralTension}
                  />
                  <NumericFormat
                    title={t("concessionaire_input_cableValueB")}
                    name="cableValueB"
                    value={values.cableValueB}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    customInput={Input}
                    error={errors.cableValueB}
                  />
                  <NumericFormat
                    title={t("concessionaire_input_TUSDG")}
                    name="TUSDG"
                    value={values.TUSDG}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    customInput={Input}
                    error={errors.TUSDG}
                  />
                </ConainterTarrif>
                <Spacer size="m" />
                <ButtonContainer>
                  <div />
                  <Button onClick={() => handleSubmit()} variant="Primary">
                    {providerId
                      ? t("concessionaire_input_button_update")
                      : t("concessionaire_input_button_register")}
                  </Button>
                </ButtonContainer>
              </div>
            )}
          </Formik>
        </ContainerCard>
      </Card>
    </Container>
  );
};

export default Concessionaire;
