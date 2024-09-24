import React, { useState } from "react";
import { Formik, Form } from "formik";
import SkeletonProposal from "./SkeletonProposal";
import {
  Container,
  Title,
  Content,
  BackgroundContainer,
  IdentificationContainer,
  CalculationContainer,
  InvoiceDetailContainer,
  RoofTypeContainer,
  Division,
  BottomContainer,
  TopContainer,
  BoxInput,
  BoxBottomInput,
  Desktop,
  Mobile,
  ButtonContainer,
  DropDivision,
  BackgroundContainerMobile,
} from "./styles";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Subtitle } from "../../DesingSystem/Subtitle";
import ReadOnly from "../../Components/ReadOnly";
import Input from "../../DesingSystem/Input";
import Select from "../../DesingSystem/Select";
import Spacer from "../../Components/Spacer";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "../../DesingSystem/Button";
import DropDownButton from "../../Components/DropDownButton";
import { NumericFormat } from "react-number-format";

const Proposal: React.FC = () => {
  const { t } = useTranslation();
  const [selectValue, setSelectValue] = useState("");
  const [open, setOpen] = React.useState(true);

  const initialValues = {
    distributor: "",
    system_type: "",
    client: "",
    nationality: "",

    energy_provider: "",
    type_of_network_connection: "",
    add_winch_cost: "",
    energy_receiving: "",
    add_grounding_cost: "",
    last_invoice_consumption: "",
    average_monthly_consumption: "",
    amount_paid_on_last_invoice: "",
    january: "",
    february: "",
    march: "",
    april: "",
    may: "",
    june: "",
    july: "",
    august: "",
    september: "",
    october: "",
    november: "",
    december: "",
    funding_contribuition: "",
    others: "",
    late_payment_fine: "",
  };

  const identificationSchema = Yup.object().shape({
    distributor: Yup.string().required(t("proposal_page_distributor_required")),
    system_type: Yup.string().required(t("proposal_page_system_type_required")),
    client: Yup.string().required(t("proposal_page_client_required")),
    nationality: Yup.string().required(t("proposal_page_nationality_required")),

    energy_provider: Yup.string().required(
      t("proposal_page_energy_provider_required")
    ),
    type_of_network_connection: Yup.string().required(
      t("proposal_page_type_of_network_connection_required")
    ),
    add_winch_cost: Yup.string().required(
      t("proposal_page_add_winch_cost_required")
    ),
    energy_receiving: Yup.string().required(
      t("proposal_page_energy_receiving_required")
    ),
    add_grounding_cost: Yup.string().required(
      t("proposal_page_add_grounding_cost_required")
    ),

    last_invoice_consumption: Yup.string().required(
      t("proposal_page_last_invoice_consumption_required")
    ),
    average_monthly_consumption: Yup.string().required(
      t("proposal_page_average_monthly_consumption_required")
    ),
    amount_paid_on_last_invoice: Yup.string().required(
      t("proposal_page_amount_paid_on_last_invoice_required")
    ),
    january: Yup.string().required(t("proposal_page_january_required")),
    february: Yup.string().required(t("proposal_page_february_required")),
    march: Yup.string().required(t("proposal_page_march_required")),
    april: Yup.string().required(t("proposal_page_april_required")),
    may: Yup.string().required(t("proposal_page_may_required")),
    june: Yup.string().required(t("proposal_page_june_required")),
    july: Yup.string().required(t("proposal_page_july_required")),
    august: Yup.string().required(t("proposal_page_august_required")),
    september: Yup.string().required(t("proposal_page_september_required")),
    october: Yup.string().required(t("proposal_page_october_required")),
    november: Yup.string().required(t("proposal_page_november_required")),
    december: Yup.string().required(t("proposal_page_december_required")),
    funding_contribuition: Yup.string().required(
      t("proposal_page_funding_contribuition_required")
    ),
    others: Yup.string().required(t("proposal_page_others_required")),
    late_payment_fine: Yup.string().required(
      t("proposal_page_late_payment_fine_required")
    ),
    fixing_structure: Yup.string().required(
      t("proposal_page_fixing_structure_required")
    ),
  });

  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <Container>
      {loading ? (
        <SkeletonProposal />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={identificationSchema}
          onSubmit={(values) => {}}
        >
          {({ handleSubmit }) => (
            <Form>
              <Content>
                <Title>{t("proposal_page_title")}</Title>
                <Desktop>
                  <BackgroundContainer>
                    <IdentificationContainer>
                      <Subtitle size="xl" bold={true}>
                        {t("proposal_page_identification")}
                      </Subtitle>
                      <Division />
                      <TopContainer>
                        <BoxInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_seller_label")}
                          </label>
                          <Spacer size="s" />
                          <ReadOnly align="left" value={"teste"} />
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <Select
                            className="SelectInput"
                            label={t("proposal_page_client_label")}
                          >
                            <option value={1}>Option 12</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                          </Select>
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <Select
                            className="SelectInput"
                            label={t("proposal_page_distributor_label")}
                          >
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 7</option>
                          </Select>
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <Select
                            className="SelectInput"
                            label={t("proposal_page_nacionality_label")}
                          >
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                          </Select>
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <Select
                            className="SelectInput"
                            label={t("proposal_page_system_type_label")}
                          >
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                          </Select>
                        </BoxInput>
                      </TopContainer>
                    </IdentificationContainer>
                    <CalculationContainer>
                      <Spacer size="l" />
                      <Subtitle size="xl" bold={true}>
                        {t("proposal_page_calculation")}
                      </Subtitle>
                      <Division />
                      <TopContainer>
                        <BoxInput>
                          <Spacer size="l" />
                          <Select
                            className="SelectInput"
                            label={t("proposal_page_energy_provider_label")}
                          >
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                          </Select>
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <Select
                            className="SelectInput"
                            label={t("proposal_page_energy_receiving_label")}
                          >
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                          </Select>
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <Select
                            className="SelectInput"
                            label={t(
                              "proposal_page_type_of_network_connection_label"
                            )}
                          >
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                          </Select>
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <Select
                            className="SelectInput"
                            label={t("proposal_page_add_grounding_cost_label")}
                          >
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                          </Select>
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <Select
                            className="SelectInput"
                            label={t("proposal_page_add_winch_cost_label")}
                          >
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 8</option>
                          </Select>
                        </BoxInput>
                      </TopContainer>
                    </CalculationContainer>
                    <InvoiceDetailContainer>
                      <Spacer size="l" />
                      <Subtitle size="xl" bold={true}>
                        {t("proposal_page_invoice_detail")}
                      </Subtitle>
                      <Division />
                      <TopContainer>
                        <BoxInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_last_invoice_consumption_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t(
                              "proposal_page_last_invoice_consumption_placeholder"
                            )}
                          />
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t(
                              "proposal_page_average_monthly_consumption_label"
                            )}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t(
                              "proposal_page_average_monthly_consumption_placeholder"
                            )}
                          />
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t(
                              "proposal_page_amount_paid_on_last_invoice_label"
                            )}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            prefix={"R$ "}
                            fixedDecimalScale={true}
                            decimalScale={2}
                            className="Input"
                            placeholder={t(
                              "proposal_page_amount_paid_on_last_invoice_placeholder"
                            )}
                          />
                        </BoxInput>
                      </TopContainer>

                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={t(
                          "proposal_page_automatically_update_every_month_with_this_value"
                        )}
                      />

                      <Spacer size="xl" />
                      <Box className="Box">
                        <Collapse in={open}>
                          <Alert
                            className="Alert"
                            severity="info"
                            action={
                              <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }
                          >
                            {t(
                              "proposal_page_for_a_more_accurate_result_detail_below_the_real_consumption_month_by_month_for_the_last_12_months"
                            )}
                          </Alert>
                        </Collapse>
                      </Box>
                      <Spacer size="xl" />

                      <BottomContainer>
                        <BoxBottomInput>
                          <label htmlFor="">
                            {t("proposal_page_january_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t("proposal_page_january_placeholder")}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <label htmlFor="">
                            {t("proposal_page_february_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t(
                              "proposal_page_february_placeholder"
                            )}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <label htmlFor="">
                            {t("proposal_page_march_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t("proposal_page_march_placeholder")}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_april_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t("proposal_page_april_placeholder")}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_may_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t("proposal_page_may_placeholder")}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_june_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t("proposal_page_june_placeholder")}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_july_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t("proposal_page_july_placeholder")}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_august_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t("proposal_page_august_placeholder")}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_september_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t(
                              "proposal_page_september_placeholder"
                            )}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_october_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t("proposal_page_october_placeholder")}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_november_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t(
                              "proposal_page_november_placeholder"
                            )}
                          />
                        </BoxBottomInput>
                        <BoxBottomInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_december_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            suffix={" KW/h"}
                            className="Input"
                            placeholder={t(
                              "proposal_page_december_placeholder"
                            )}
                          />
                        </BoxBottomInput>
                      </BottomContainer>
                      <TopContainer>
                        <BoxInput>
                          <Spacer size="xl" />
                          <label htmlFor="">
                            {t(
                              "proposal_page_ip_cip_costing_contribution_label"
                            )}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            prefix={"R$ "}
                            fixedDecimalScale={true}
                            decimalScale={2}
                            className="Input"
                            placeholder={t(
                              "proposal_page_ip_cip_costing_contribution_placeholder"
                            )}
                          />
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="xl" />
                          <label htmlFor="" className="LabelConsumption">
                            {t("proposal_page_fines_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            prefix={"R$ "}
                            fixedDecimalScale={true}
                            decimalScale={2}
                            className="Input"
                            placeholder={t("proposal_page_fines_placeholder")}
                          />
                        </BoxInput>
                        <BoxInput>
                          <Spacer size="l" />
                          <label htmlFor="">
                            {t("proposal_page_others_label")}
                          </label>
                          <Spacer size="s" />
                          <NumericFormat
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            prefix={"R$ "}
                            fixedDecimalScale={true}
                            decimalScale={2}
                            className="Input"
                            placeholder={t("proposal_page_others_placeholder")}
                          />
                        </BoxInput>
                      </TopContainer>
                    </InvoiceDetailContainer>
                    <RoofTypeContainer>
                      <Subtitle size="xl" bold={true}>
                        {t("proposal_page_roof_type")}
                      </Subtitle>
                      <Division />

                      <BoxInput>
                        <Spacer size="l" />
                        <Select
                          className="SelectInput"
                          label={t("proposal_page_december_placeholder")}
                        >
                          <option value={1}>Option 1</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 4</option>
                        </Select>
                      </BoxInput>
                    </RoofTypeContainer>
                    <Spacer size="xl" />
                    <ButtonContainer>
                      <Button
                        variant="Primary"
                        className="SendButton"
                        type="submit"
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        <img src="../icons/calculator.svg" alt="" />
                        {t("proposal_page_calculate_ideal_kit")}
                      </Button>
                    </ButtonContainer>
                  </BackgroundContainer>
                </Desktop>
                <Mobile>
                  <DropDivision>
                    <Subtitle size="xl" bold={true}>
                      {t("proposal_page_identification")}
                    </Subtitle>
                    <Division />
                    <DropDownButton>
                      <BoxInput>
                        <label htmlFor="">
                          {t("proposal_page_seller_label")}
                        </label>
                        <Spacer size="s" />
                        <ReadOnly align="left" value={"teste"} />
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <Select
                          className="SelectInput"
                          label={t("proposal_page_client_label")}
                        >
                          <option value={1}>Option 12</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 4</option>
                        </Select>
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <Select
                          className="SelectInput"
                          label={t("proposal_page_distributor_label")}
                        >
                          <option value={1}>Option 1</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 7</option>
                        </Select>
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <Select
                          className="SelectInput"
                          label={t("proposal_page_nacionality_label")}
                        >
                          <option value={1}>Option 1</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 4</option>
                        </Select>
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <Select
                          className="SelectInput"
                          label={t("proposal_page_system_type_label")}
                        >
                          <option value={1}>Option 1</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 4</option>
                        </Select>
                      </BoxInput>
                    </DropDownButton>
                  </DropDivision>
                  <Spacer size="m" />
                  <DropDivision>
                    <Subtitle size="xl" bold={true}>
                      {t("proposal_page_calculation")}
                    </Subtitle>
                    <Division />
                    <DropDownButton>
                      <BoxInput>
                        <Select
                          className="SelectInput"
                          label={t("proposal_page_energy_provider_label")}
                        >
                          <option value={1}>Option 1</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 4</option>
                        </Select>
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <Select
                          className="SelectInput"
                          label={t("proposal_page_energy_receiving_label")}
                        >
                          <option value={1}>Option 1</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 4</option>
                        </Select>
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <Select
                          className="SelectInput"
                          label={t(
                            "proposal_page_type_of_network_connection_label"
                          )}
                        >
                          <option value={1}>Option 1</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 4</option>
                        </Select>
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <Select
                          className="SelectInput"
                          label={t("proposal_page_add_grounding_cost_label")}
                        >
                          <option value={1}>Option 1</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 4</option>
                        </Select>
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <Select
                          className="SelectInput"
                          label={t("proposal_page_add_winch_cost_label")}
                        >
                          <option value={1}>Option 1</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 8</option>
                        </Select>
                      </BoxInput>
                    </DropDownButton>
                  </DropDivision>
                  <Spacer size="m" />

                  <DropDivision>
                    <Subtitle size="xl" bold={true}>
                      {t("proposal_page_invoice_detail")}
                    </Subtitle>
                    <Division />
                    <DropDownButton>
                      <BoxInput>
                        <label htmlFor="">
                          {t("proposal_page_last_invoice_consumption_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t(
                            "proposal_page_last_invoice_consumption_placeholder"
                          )}
                        />
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_average_monthly_consumption_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t(
                            "proposal_page_average_monthly_consumption_placeholder"
                          )}
                        />
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_amount_paid_on_last_invoice_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          className="Input"
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          prefix={"R$ "}
                          fixedDecimalScale={true}
                          decimalScale={2}
                          placeholder={t(
                            "proposal_page_amount_paid_on_last_invoice_placeholder"
                          )}
                        />
                      </BoxInput>
                      <Spacer size="m" />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={t(
                          "proposal_page_automatically_update_every_month_with_this_value"
                        )}
                      />
                      <Spacer size="l" />
                      <Box className="Box">
                        <Collapse in={open}>
                          <Alert
                            className="Alert"
                            severity="info"
                            action={
                              <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }
                          >
                            {t(
                              "proposal_page_for_a_more_accurate_result_detail_below_the_real_consumption_month_by_month_for_the_last_12_months"
                            )}
                          </Alert>
                        </Collapse>
                      </Box>
                      <Spacer size="l" />
                      <BoxBottomInput>
                        <label htmlFor="">
                          {t("proposal_page_january_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_january_placeholder")}
                        />
                      </BoxBottomInput>
                      <Spacer size="l" />
                      <BoxBottomInput>
                        <label htmlFor="">
                          {t("proposal_page_february_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_february_placeholder")}
                        />
                      </BoxBottomInput>
                      <Spacer size="l" />
                      <BoxBottomInput>
                        <label htmlFor="">
                          {t("proposal_page_march_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_march_placeholder")}
                        />
                      </BoxBottomInput>
                      <BoxBottomInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_april_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_april_placeholder")}
                        />
                      </BoxBottomInput>
                      <BoxBottomInput>
                        <Spacer size="l" />
                        <label htmlFor="">{t("proposal_page_may_label")}</label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_may_placeholder")}
                        />
                      </BoxBottomInput>
                      <BoxBottomInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_june_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_june_placeholder")}
                        />
                      </BoxBottomInput>
                      <BoxBottomInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_july_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_july_placeholder")}
                        />
                      </BoxBottomInput>
                      <BoxBottomInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_august_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_august_placeholder")}
                        />
                      </BoxBottomInput>
                      <BoxBottomInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_september_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_september_placeholder")}
                        />
                      </BoxBottomInput>
                      <BoxBottomInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_october_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_october_placeholder")}
                        />
                      </BoxBottomInput>
                      <BoxBottomInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_november_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_november_placeholder")}
                        />
                      </BoxBottomInput>
                      <BoxBottomInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_december_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_december_placeholder")}
                        />
                      </BoxBottomInput>
                      <BoxInput>
                        <Spacer size="xl" />
                        <label htmlFor="">
                          {t("proposal_page_ip_cip_costing_contribution_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t(
                            "proposal_page_ip_cip_costing_contribution_placeholder"
                          )}
                        />
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="xl" />
                        <label htmlFor="" className="LabelConsumption">
                          {t("proposal_page_fines_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          suffix={" KW/h"}
                          className="Input"
                          placeholder={t("proposal_page_fines_placeholder")}
                        />
                      </BoxInput>
                      <BoxInput>
                        <Spacer size="l" />
                        <label htmlFor="">
                          {t("proposal_page_others_label")}
                        </label>
                        <Spacer size="s" />
                        <NumericFormat
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          prefix={"R$ "}
                          fixedDecimalScale={true}
                          decimalScale={2}
                          className="Input"
                          placeholder={t("proposal_page_others_placeholder")}
                        />
                      </BoxInput>
                    </DropDownButton>
                  </DropDivision>
                  <Spacer size="m" />
                  <DropDivision>
                    <Subtitle size="xl" bold={true}>
                      {t("proposal_page_roof_type")}
                    </Subtitle>
                    <Division />
                    <DropDownButton>
                      <BoxInput>
                        <Select
                          className="SelectInput"
                          label={t("proposal_page_december_placeholder")}
                        >
                          <option value={1}>Option 1</option>
                          <option value={2}>Option 2</option>
                          <option value={3}>Option 3</option>
                          <option value={4}>Option 4</option>
                        </Select>
                      </BoxInput>
                    </DropDownButton>
                  </DropDivision>
                  <Spacer size="xl" />
                  <BackgroundContainerMobile>
                    <ButtonContainer>
                      <Button
                        variant="Primary"
                        className="SendButton"
                        type="submit"
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        <img src="../icons/calculator.svg" alt="" />
                        {t("proposal_page_calculate_ideal_kit")}
                      </Button>
                    </ButtonContainer>
                  </BackgroundContainerMobile>
                </Mobile>
              </Content>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  );
};

export default Proposal;
