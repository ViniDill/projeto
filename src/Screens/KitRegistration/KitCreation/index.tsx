import React, { useCallback, useEffect, useState, useMemo } from "react";
import {
  Container,
  BackgroundContainer,
  Division,
  HeaderContainer,
  MiddleContainer,
  SelectedItems,
  SelectedItemsContent,
  Amount,
  Observation,
  Finish,
  ObservationTitle,
  MiddleContainerLabel,
  GridContent,
} from "./styles";
import { H3 } from "../../../DesingSystem/Title";
import { Subtitle } from "../../../DesingSystem/Subtitle";
import Text from "../../../DesingSystem/Text";
import { Formik } from "formik";
import AsyncSelect from "react-select/async";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import ReadOnly from "../../../Components/ReadOnly";
import Counter from "../../../Components/Counter";
import ProductListKitItem from "../../../Components/ProductListKitItem";
import Button from "../../../DesingSystem/Button";
import TextArea from "../../../DesingSystem/TextArea";
import { apiRegisterProductService } from "../../../services/RegisterProductService/RegisterProductService";
import { apiKitService } from "../../../services/KitService/KitService";
import LoadingFullScreen from "../../../Components/LoadingFullScreen";
import { FechProductProps } from "../../../services/RegisterProductService/IRegisterProductService";
import { SolarKit } from "../../../services/KitService/KitServiceProps";
import {
  formatToBrazilianCurrency,
  parseCurrencyToNumber,
} from "../../../utils/formatToBraszilianCurrency";
import queryString from "query-string";
import Input from "../../../DesingSystem/Input";
import Select from "../../../DesingSystem/Select";
import { NumericFormat } from "react-number-format";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface OptionType {
  label: string;
  value: string;
}

interface productProps extends FechProductProps {
  quantity: number;
}

interface LocationState {
  kitID?: string | number;
}

const KitCreation: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigation = useNavigate();
  const [internalLoading, setInternalLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<productProps[]>([]);
  const [options, setOptions] = useState<OptionType | null>(null);
  const [inverter_power, setInverter_power] = useState<number>(0);
  const [electrical_grid_cost, setElectrical_grid_cost] = useState<number>(0);
  const [grounding_cost, setGrounding_cost] = useState<number>(0);
  const [labor_cost, setLabor_cost] = useState<number>(0);
  const [project_cost, setProject_cost] = useState<number>(0);
  const [accessories_cost, setAccessories_cost] = useState<number>(0);

  const kitID = location.state ? (location.state as LocationState).kitID : null;

  const [initialValues, setInitialValues] = useState({
    title: "",
    inverter_power: "",
    solar_kit_power: "3",
    system_type: "tipo modelo",
    nationality: "",
    labor_cost: "",
    project_cost: "",
    installation_days: "",
    grounding_cost: "",
    accessories_cost: "",
    electrical_grid_cost: "",
    winch_rate_hour: "",
    expansion: "",
    observation: "",
  });

  const total = useMemo(() => {
    return products.reduce(
      (total, items) =>
        total +
        (items.price ? items.price * items.quantity : 0) +
        grounding_cost +
        electrical_grid_cost +
        labor_cost +
        project_cost +
        accessories_cost,
      0
    );
  }, [
    products,
    grounding_cost,
    electrical_grid_cost,
    labor_cost,
    project_cost,
    accessories_cost,
  ]);

  const loadOptions = async (inputValue: string): Promise<OptionType[]> => {
    const result = queryString.stringifyUrl({
      url: "",
      query: { product: inputValue },
    });
    const response = await apiRegisterProductService.fetchItems(result);

    // Mapeia os dados para o formato esperado pelo AsyncSelect
    const options = response.data.map((item: any) => ({
      label: `${item.product_name} - ${item.category.category_name}`,
      value: item.id,
    }));

    return options;
  };

  const handleChangeSelect = async (option: any | null) => {
    try {
      setInternalLoading(true);
      const response = await apiRegisterProductService.fetchItemsById(
        option.value
      );

      setProducts((prev) => [...prev, { ...response, quantity: 1 } as any]);
    } catch (error) {
      console.error(error);
    } finally {
      setInternalLoading(false);
    }
  };

  const handleRemove = useCallback(
    (index: number, products: productProps[]) => {
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    },
    []
  );

  const handleQuantity = useCallback(
    (index: number, quantity: number, products: productProps[]) => {
      if (products[index].quantity <= 1 && quantity === -1) return;
      products[index].quantity = products[index].quantity + quantity;
      setProducts([...products]);
    },
    []
  );

  const getSolarKitById = useCallback(async (id: string | number) => {
    try {
      setInternalLoading(true);
      const response = await apiKitService.getSolarKitById(id);
      setInitialValues({ ...response } as any);
      setElectrical_grid_cost(response.electrical_grid_cost);
      setGrounding_cost(response.grounding_cost);
      setLabor_cost(response.labor_cost);
      setProject_cost(response.project_cost);
      setAccessories_cost(response.accessories_cost);
    } catch (error) {
      console.error(error);
    } finally {
      setInternalLoading(false);
    }
  }, []);

  const handleUpdateSolarKit = useCallback(
    async (value: SolarKit, id: string | number) => {
      try {
        setInternalLoading(true);
        await apiKitService.updateSolarKit(id, value);
        navigation("/kit-list");
      } catch (error) {
        console.error(error);
      } finally {
        setInternalLoading(false);
      }
    },
    []
  );

  const getProducts = useCallback(async () => {
    try {
      setInternalLoading(true);
      const response = await apiRegisterProductService.fetchItems();
      const result = response.data.map((e) => {
        return {
          label: `${e.product_name} - ${e.category.category_name}`,
          value: e.id,
        };
      });
      setOptions(result as any);
    } catch (error) {
      console.error(error);
    } finally {
      setInternalLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
    if (kitID) {
      getSolarKitById(kitID);
    }
  }, []);

  const renderItems = useCallback(() => {
    return (
      <>
        {products.map((e, index) => (
          <ProductListKitItem
            key={e.id}
            title={e.product_name}
            brand={e.brand.brand_name}
            priceValue={formatToBrazilianCurrency(e?.price || 0)}
            totalItem={e.quantity}
            close={() => {
              handleRemove(index, products);
            }}
            category={e.category.category_name}
            inversor={e?.microInverter === 1 ? "vardeiro" : "falso"}
            increment={() => {
              handleQuantity(index, +1, products);
            }}
            decrement={() => {
              handleQuantity(index, -1, products);
            }}
          />
        ))}
      </>
    );
  }, [products]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(
      t("Kit_Registration_error_message_kit_name_required")
    ),
    nationality: Yup.string().required(
      t("Kit_Registration_error_message_nacionality_required")
    ),
    inverter_power: Yup.string().required(
      t("Kit_Registration_error_message_inverter_capacity_required")
    ),
    solar_kit_power: Yup.string(),
    system_type: Yup.string(),
    labor_cost: Yup.string().required(t("Kit_Registration_field_required")),
    project_cost: Yup.string().required(t("Kit_Registration_field_required")),
    installation_days: Yup.string(),
    grounding_cost: Yup.string().required(t("Kit_Registration_field_required")),
    accessories_cost: Yup.string().required(
      t("Kit_Registration_field_required")
    ),
    electrical_grid_cost: Yup.string().required(
      t("Kit_Registration_field_required")
    ),
    winch_rate_hour: Yup.string().required(
      t("Kit_Registration_field_required")
    ),
    expansion: Yup.string(),
    observation: Yup.string(),
  });

  const handleRegisterSubmit = useCallback(async (value: SolarKit) => {
    try {
      setInternalLoading(false);
      await apiKitService.createSolarKit(value);
      navigation("/kit-list");
    } catch (error) {
      console.error(error);
    } finally {
      setInternalLoading(false);
    }
  }, []);

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (kitID) {
            handleUpdateSolarKit(values as any, kitID);
          } else {
            handleRegisterSubmit(values as any);
          }
        }}
        enableReinitialize
      >
        {({ values, handleBlur, handleChange, errors, handleSubmit }) => (
          <BackgroundContainer>
            <GridContent>
              <Input
                title={t("Kit_Registration_kit_name")}
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.title}
                placeholder={t("Kit_Registration_kit_name_placeholder")}
              />
              <Input
                title={t("Kit_Registration_inverter_capacity")}
                name="inverter_power"
                value={values.inverter_power}
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: "inverter_power",
                      value: e.target.value,
                    },
                  });
                  setInverter_power(Number(e.target.value));
                }}
                onBlur={handleBlur}
                error={errors.inverter_power}
                placeholder={t(
                  "Kit_Registration_inverter_capacity_placeholder"
                )}
              />
              <Select
                label={t("Kit_Registration_nacionality")}
                value={values.nationality}
                name="nationality"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.nationality}
              >
                <option value="">
                  {t("Kit_Registration_select_nationality")}
                </option>
                <option value="nacional">
                  {t("Kit_Registration_national")}
                </option>
                <option value="importado">
                  {t("Kit_Registration_international")}
                </option>
              </Select>
              <GridContent>
                <ReadOnly
                  value={values.solar_kit_power || "0"}
                  title={t("Kit_Registration_solar_kit_capacity")}
                />

                <ReadOnly
                  value={values.system_type || "0"}
                  title={t("Kit_Registration_system_type")}
                />
              </GridContent>
              <GridContent>
                <NumericFormat
                  name="electrical_grid_cost"
                  placeholder="R$ 0,00"
                  value={values.electrical_grid_cost}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={"R$ "}
                  fixedDecimalScale={true}
                  decimalScale={2}
                  customInput={Input}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: "electrical_grid_cost",
                        value: parseCurrencyToNumber(e.target.value),
                      },
                    });
                    setElectrical_grid_cost(
                      parseCurrencyToNumber(e.target.value)
                    );
                  }}
                  onBlur={handleBlur}
                  title={t("Kit_Registration_power_grid")}
                  error={errors.electrical_grid_cost}
                />

                <NumericFormat
                  name="grounding_cost"
                  placeholder="R$ 0,00"
                  value={values.grounding_cost}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={"R$ "}
                  fixedDecimalScale={true}
                  decimalScale={2}
                  customInput={Input}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: "grounding_cost",
                        value: parseCurrencyToNumber(e.target.value),
                      },
                    });
                    setGrounding_cost(parseCurrencyToNumber(e.target.value));
                  }}
                  onBlur={handleBlur}
                  title={t("Kit_Registration_grounding_resistance")}
                  error={errors.grounding_cost}
                />
              </GridContent>
              <GridContent>
                <NumericFormat
                  name="labor_cost"
                  placeholder="R$ 0,00"
                  value={values.labor_cost}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={"R$ "}
                  fixedDecimalScale={true}
                  decimalScale={2}
                  customInput={Input}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: "labor_cost",
                        value: parseCurrencyToNumber(e.target.value),
                      },
                    });
                    setLabor_cost(parseCurrencyToNumber(e.target.value));
                  }}
                  onBlur={handleBlur}
                  title={t("Kit_Registration_labor")}
                  error={errors.labor_cost}
                />

                <NumericFormat
                  name="project_cost"
                  placeholder="R$ 0,00"
                  value={values.project_cost}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={"R$ "}
                  fixedDecimalScale={true}
                  decimalScale={2}
                  customInput={Input}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: "project_cost",
                        value: parseCurrencyToNumber(e.target.value),
                      },
                    });
                    setProject_cost(parseCurrencyToNumber(e.target.value));
                  }}
                  onBlur={handleBlur}
                  title={t("Kit_Registration_project_value")}
                  error={errors.project_cost}
                />
              </GridContent>
              <GridContent>
                <NumericFormat
                  customInput={Input}
                  title={t("Kit_Registration_tow_truck_schedule")}
                  name="winch_rate_hour"
                  value={values.winch_rate_hour}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.winch_rate_hour}
                />

                <div>
                  <Counter
                    value={Number(values.installation_days || 0)}
                    title={t("Kit_Registration_daily_installation_rates")}
                    clickIncrement={() => {
                      handleChange({
                        target: {
                          name: "installation_days",
                          value: Number(values.installation_days) + 1,
                        },
                      });
                    }}
                    clickDecrement={() => {
                      if (Number(values.installation_days) <= 0) return;
                      handleChange({
                        target: {
                          name: "installation_days",
                          value: Number(values.installation_days) - 1,
                        },
                      });
                    }}
                  />
                </div>
              </GridContent>
              <GridContent>
                <NumericFormat
                  name="accessories_cost"
                  placeholder="R$ 0,00"
                  value={values.accessories_cost}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={"R$ "}
                  fixedDecimalScale={true}
                  decimalScale={2}
                  customInput={Input}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: "accessories_cost",
                        value: parseCurrencyToNumber(e.target.value),
                      },
                    });
                    setAccessories_cost(parseCurrencyToNumber(e.target.value));
                  }}
                  onBlur={handleBlur}
                  title={t("Kit_Registration_others_acessories")}
                  error={errors.accessories_cost}
                />
                <div>
                  <Counter
                    title={t("Kit_Registration_enlargement")}
                    value={Number(values.expansion) || 0}
                    clickIncrement={() => {
                      handleChange({
                        target: {
                          name: "expansion",
                          value: Number(values.expansion) + 1,
                        },
                      });
                    }}
                    clickDecrement={() => {
                      if (Number(values.expansion) <= 0) return;
                      handleChange({
                        target: {
                          name: "expansion",
                          value: Number(values.expansion) - 1,
                        },
                      });
                    }}
                  />
                </div>
              </GridContent>
            </GridContent>
            <MiddleContainer>
              <HeaderContainer>
                <H3 className="H3">
                  {t("Kit_Registration_choose_the_item_for_assembling_the_kit")}
                </H3>
                <Division />
                <Text>
                  {t(
                    "Kit_Registration_search_and_select_the_name_of_the_item_that_will_go_into_the_kit_using_the_search_engine"
                  )}
                </Text>
              </HeaderContainer>

              <MiddleContainerLabel>
                <label className="Label">
                  {t("Kit_Registration_item_selection")}
                </label>
                <AsyncSelect
                  cacheOptions
                  defaultOptions
                  loadOptions={loadOptions}
                  onChange={handleChangeSelect}
                  value={options}
                />
              </MiddleContainerLabel>
            </MiddleContainer>
            <SelectedItems>
              <Subtitle>{t("Kit_Registration_selected_items")}</Subtitle>
              <SelectedItemsContent>{renderItems()}</SelectedItemsContent>
            </SelectedItems>
            <Division className="DivisionBottom" />

            <Amount>
              <Text>{t("Kit_Registration_total_value")}</Text>
              <span className="Price">{total}</span>
            </Amount>
            <Observation>
              <ObservationTitle>
                <img src="./icons/TextArea.svg" alt="Text Icon" />
                <Subtitle size="lg">
                  {t("Kit_Registration_observation")}
                </Subtitle>
              </ObservationTitle>
              <TextArea
                name="observation"
                value={values.observation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.observation}
              />
            </Observation>
            <Finish>
              <Button
                variant="Primary"
                onClick={() => handleSubmit()}
                type="submit"
              >
                {t("Kit_Registration_finish")}
              </Button>
            </Finish>
          </BackgroundContainer>
        )}
      </Formik>
      {internalLoading && <LoadingFullScreen />}
    </Container>
  );
};

export default KitCreation;
