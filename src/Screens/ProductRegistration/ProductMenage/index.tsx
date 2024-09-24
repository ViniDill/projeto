import React, { useCallback, useState, useEffect } from "react";
import { Card } from "@mui/material";
import Select from "../../../DesingSystem/Select";

import BackButtonTop from "../../../Components/BackButtonTop";
import Button from "../../../DesingSystem/Button";
import Spacer from "../../../Components/Spacer";
import Input from "../../../DesingSystem/Input";
import TextArea from "../../../DesingSystem/TextArea";
import { useTranslation } from "react-i18next";
import { Brand } from "../../../services/ProductBrandService/IProductBrandService";
import { MonitoringValue } from "../../../services/MonitoringTypeService/MonitoringTypeServiceProps";
import { PhaseTypeProps } from "../../../services/ProductPhaseTypeService/IProductPhaseTypeService";
import { Formik } from "formik";
import { NumericFormat } from "react-number-format";
import { CategoryEnum } from "../../../Interfaces/enumCategoryProduct";
import * as Yup from "yup";
import { RegisterProductValues } from "../ProductRegistrationProps";
import LoadingFullScreen from "../../../Components/LoadingFullScreen";
import { useNavigate } from "react-router-dom";
import UploadImage from "../../../Components/UploadImage";

import {
  Container,
  Title,
  Board,
  PaddingCard,
  LateralContent,
  SpaceFase,
  SpaceDimension,
  InternalTitle,
  ProduContet,
  ImageContainer,
} from "./styles";
import { apiRegisterProductService } from "../../../services/RegisterProductService/RegisterProductService";

interface ProductMenageProps {
  backPage?: () => void;
  title: string;
  brands: Brand[];
  monitoringType: MonitoringValue[];
  phases: PhaseTypeProps[];
  idCategory: number;
  typeOfUpdate: number;
  productId?: number | null;
}

const ProductMenage: React.FC<ProductMenageProps> = ({
  backPage,
  title,
  brands = [],
  monitoringType = [],
  phases = [],
  idCategory,
  typeOfUpdate,
  productId = null,
}) => {
  const [fullLoading, setFullLoading] = useState<boolean>(false);
  const [productImage, setProductImage] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [image_path, setImage_path] = useState<string | null>(null);
  const [initValue, setInitValue] = useState({
    title: "",
    description: "",
    height: "",
    width: "",
    length: "",
    weight: "",
    attachment: "",
    typePhase: "",
    phase: "",
    monitoring: "",
    brand: "",
    microinversor: "",
    power: "",
    additional_information: "",
  });

  const { t } = useTranslation();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    title: Yup.string().required(t("product_registration_title_is_required")),
    brand: Yup.string().required(t("product_registration_brand_is_required")),
    additional_information: Yup.string(),
  });

  const shemaInversor = Yup.object().shape({
    typePhase: Yup.string().required(
      t("product_registration_type_phase_is_required")
    ),
    phase: Yup.string().required(t("product_registration_phase_is_required")),
    monitoring: Yup.string().required(
      t("product_registration_monitoring_is_required")
    ),
    microinversor: Yup.string().required(
      t("product_registration_inverter_is_required")
    ),
  });

  const shcemaModule = Yup.object().shape({
    power: Yup.string().required(t("product_registration_power_is_required")),
  });

  const dynamicScheema = (idCategory: number) => {
    const schemaItem = Yup.object().concat(schema);
    if (idCategory === CategoryEnum.inversor) {
      return schemaItem.concat(shemaInversor);
    }
    if (idCategory === CategoryEnum.modulos) {
      return schemaItem.concat(shcemaModule);
    }
    return schemaItem;
  };

  const handleRegister = useCallback(
    async (obj: RegisterProductValues, id: number) => {
      try {
        setFullLoading(true);
        const formData = new FormData();
        formData.append("product_name", obj.title);
        formData.append("description", obj.description);
        formData.append("brand_id", obj.brand);
        formData.append("height", obj.height);
        formData.append("width", obj.width);
        formData.append("length", obj.length);
        formData.append("weight", obj.weight);
        formData.append("category_id", id.toString());
        formData.append("product_type_id", "1");
        formData.append(
          "additional_information",
          obj.additional_information || ""
        );
        if (productImage) {
          formData.append("product_image", productImage);
        }
        if (id === CategoryEnum.inversor) {
          formData.append("phase_type_id", obj.typePhase);
          formData.append("phase_value", obj.phase);
          formData.append("monitoring_type_id", obj.monitoring);
          formData.append("microInverter", obj.microinversor);
        }
        if (id === CategoryEnum.modulos || id === CategoryEnum.inversor) {
          formData.append("potency", obj.power);
        }

        await apiRegisterProductService.registerProduct(formData);
        navigate("/product-list");
      } catch (error) {
      } finally {
        setFullLoading(false);
      }
    },
    [productImage]
  );

  const handleUpdate = useCallback(
    async (
      obj: RegisterProductValues,
      id: number | string,
      idCategory: number | string
    ) => {
      try {
        setFullLoading(true);
        const formData = new FormData();
        formData.append("id", id.toLocaleString());
        formData.append("product_name", obj.title);
        formData.append("description", obj.description);
        formData.append("brand_id", obj.brand);
        formData.append("height", obj.height);
        formData.append("width", obj.width);
        formData.append("length", obj.length);
        formData.append("weight", obj.weight);
        formData.append("category_id", idCategory.toString());
        formData.append("product_type_id", "1");
        formData.append(
          "additional_information",
          obj.additional_information || ""
        );
        if (productImage) {
          formData.append("product_image", productImage);
        }
        if (idCategory === CategoryEnum.inversor) {
          formData.append("phase_type_id", obj.typePhase);
          formData.append("phase_value", obj.phase);
          formData.append("monitoring_type_id", obj.monitoring);
          formData.append("microInverter", obj.microinversor);
        }
        if (
          idCategory === CategoryEnum.modulos ||
          idCategory === CategoryEnum.inversor
        ) {
          formData.append("potency", obj.power);
        }
        await apiRegisterProductService.updateProduct(
          id.toLocaleString(),
          formData
        );
        navigate("/product-list");
      } catch (error) {
        console.error(error);
      } finally {
        setFullLoading(false);
      }
    },
    [productImage]
  );

  const handleGetProduct = useCallback(async () => {
    if (!productId) return;
    try {
      setFullLoading(true);
      const response = await apiRegisterProductService.fetchItemsById(
        productId
      );

      setImage_path(response.image_path || "");

      setInitValue({
        title: response?.product_name ? response?.product_name : "",
        description: response?.description ? response?.description : "",
        height: response?.height ? response?.height.toString() : "",
        width: response?.width ? response?.width.toString() : "",
        length: response?.length ? response?.length.toString() : "",
        weight: response.weight ? response.weight.toString() : "",
        attachment: "",
        typePhase: response?.phase_type_id
          ? response?.phase_type_id.toString()
          : "",
        phase: response?.phase_value ? response?.phase_value : "",
        monitoring: response?.monitoring_type_id
          ? response?.monitoring_type_id.toString()
          : "",
        brand: response?.brand_id ? response?.brand_id.toString() : "",
        microinversor: response?.microInverter
          ? response?.microInverter.toString()
          : "",
        power: response?.potency ? response.potency?.toString() : "",
        additional_information: response?.additional_information
          ? response.additional_information.toString()
          : "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setFullLoading(false);
    }
  }, []);

  const handleDelete = useCallback(async () => {
    try {
      setFullLoading(true);
      if (productId) {
        await apiRegisterProductService.deleteProduct(productId);
      }
    } catch (error) {
    } finally {
      setFullLoading(false);
    }
  }, []);

  useEffect(() => {
    if (typeOfUpdate == 1) {
      handleGetProduct();
    }
  }, []);

  return (
    <Container>
      {typeOfUpdate !== 1 && <BackButtonTop onClick={backPage} />}
      <Title>{title}</Title>
      <Formik
        validationSchema={dynamicScheema(idCategory)}
        initialValues={initValue}
        onSubmit={(value) => {
          if (typeOfUpdate === 1) {
            if (productId) {
              handleUpdate(value, productId, idCategory);
            }
          } else {
            handleRegister(value, idCategory);
          }
        }}
        enableReinitialize
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <Board>
            <ProduContet>
              <Card>
                <PaddingCard>
                  <Input
                    placeholder={t(`product_registration_product_name`)}
                    title={t(`product_registration_product_name`)}
                    name="title"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                    error={errors.title}
                  />
                  <Spacer size="s" />
                  <TextArea
                    label={t("product_registration_description_text")}
                    placeholder={t("product_registration_description_text")}
                    name="description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    error={errors.description}
                  />
                  <Spacer size="s" />
                  {idCategory === CategoryEnum.inversor && (
                    <SpaceFase>
                      <div>
                        <Select
                          label={t("product_registration_type_of_fase")}
                          name="typePhase"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.typePhase}
                          error={errors.typePhase}
                        >
                          <option value="">
                            {t("product_registration_select_an_option")}
                          </option>
                          {phases.map((field) => (
                            <option key={field.id} value={field.id}>
                              {field.phase_type_name}
                            </option>
                          ))}
                        </Select>
                      </div>
                      <div>
                        <Select
                          name="phase"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phase}
                          label={t("product_registration_value_of_fase")}
                          error={errors.phase}
                        >
                          <option value="">
                            {t("product_registration_select_an_option")}
                          </option>
                          <option value="110v">110v</option>
                          <option value="220v">120v</option>
                        </Select>
                      </div>
                    </SpaceFase>
                  )}

                  {idCategory === CategoryEnum.inversor && (
                    <>
                      <Spacer size="s" />
                      <div>
                        <Select
                          name="monitoring"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.monitoring}
                          label={t("product_registration_monitoring")}
                          error={errors.monitoring}
                        >
                          <option value="">
                            {t("product_registration_select_an_option")}
                          </option>
                          {monitoringType.map((field) => (
                            <option key={field.id} value={field.id}>
                              {field.monitoring_type_name}
                            </option>
                          ))}
                        </Select>
                      </div>
                    </>
                  )}
                  {(idCategory === CategoryEnum.modulos ||
                    idCategory === CategoryEnum.inversor) && (
                    <>
                      <Spacer size="m" />
                      <NumericFormat
                        placeholder={t(`product_registration_power`)}
                        title={t(`product_registration_power`)}
                        name="power"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.power}
                        error={errors.power}
                        customInput={Input}
                        suffix={" watts"}
                      />
                      <Spacer size="s" />
                    </>
                  )}
                  <Spacer size="s" />
                  <div>
                    <InternalTitle>
                      {t("product_registration_dimension_title")}
                    </InternalTitle>
                    <Spacer size="s" />
                    <SpaceDimension>
                      <div>
                        <NumericFormat
                          placeholder={t(
                            "product_registration_dimension_height"
                          )}
                          title={t("product_registration_dimension_height")}
                          name="height"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.height}
                          error={errors.height}
                          customInput={Input}
                          decimalScale={2}
                          decimalSeparator=","
                          suffix={" cm"}
                        />
                      </div>
                      <div>
                        <NumericFormat
                          placeholder={t(
                            "product_registration_dimension_width"
                          )}
                          title={t("product_registration_dimension_width")}
                          name="width"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.width}
                          error={errors.width}
                          customInput={Input}
                          decimalScale={2}
                          decimalSeparator=","
                          suffix={" cm"}
                        />
                      </div>
                      <div>
                        <NumericFormat
                          placeholder={t(
                            "product_registration_dimension_length"
                          )}
                          title={t("product_registration_dimension_length")}
                          name="length"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.length}
                          error={errors.length}
                          customInput={Input}
                          decimalScale={2}
                          decimalSeparator=","
                          suffix={" cm"}
                        />
                      </div>
                      <div>
                        <NumericFormat
                          placeholder={t(
                            "product_registration_dimension_weight"
                          )}
                          title={t("product_registration_dimension_weight")}
                          name="weight"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.weight}
                          error={errors.weight}
                          customInput={Input}
                          decimalScale={3}
                          decimalSeparator=","
                          suffix={" KG"}
                        />
                      </div>
                    </SpaceDimension>
                  </div>
                  <Spacer size="s" />
                  <div>
                    <Input
                      placeholder={t(
                        "product_registration_dimension_attachment"
                      )}
                      title={t("product_registration_dimension_attachment")}
                      name="additional_information"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.additional_information}
                      error={errors.additional_information}
                    />
                  </div>
                </PaddingCard>
              </Card>
            </ProduContet>
            <LateralContent>
              <Card>
                <PaddingCard>
                  <h4>{t("product_registration_title_status")}</h4>
                  <Button
                    variant="Primary"
                    type="submit"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    {t("product_registration_btn_save")}
                  </Button>
                  {typeOfUpdate === 1 && (
                    <>
                      <Spacer size="s" />
                      <Button onClick={handleDelete}>
                        {t("product_registration_btn_delete")}
                      </Button>
                    </>
                  )}
                </PaddingCard>
              </Card>
              <Spacer size="l" />
              <Card>
                <PaddingCard>
                  <h4>{t("product_registration_product_image_title")}</h4>
                  <ImageContainer>
                    <UploadImage
                      setFile={setProductImage}
                      setImage={setImage}
                      imageSrc={image || image_path}
                      setUrlFile={setImage_path}
                    />
                  </ImageContainer>
                </PaddingCard>
              </Card>
              <Spacer size="l" />
              <Card>
                <PaddingCard>
                  <h4>{t("product_registration_product_brand_title")}</h4>
                  <div>
                    <Select
                      name="brand"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.brand}
                      label={t("product_registration_product_brand")}
                      error={errors.brand}
                    >
                      <option value="">
                        {t("product_registration_select_an_option")}
                      </option>
                      {brands.map((field) => (
                        <option key={field.id} value={field.id}>
                          {field.brand_name}
                        </option>
                      ))}
                    </Select>
                  </div>
                </PaddingCard>
              </Card>
              {idCategory === CategoryEnum.inversor && (
                <>
                  <Spacer size="l" />
                  <Card>
                    <PaddingCard>
                      <h4>{t("product_registration_kind_of_inversor")}</h4>
                      <div>
                        <Select
                          name="microinversor"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.microinversor}
                          label={t("product_registration_microinversor")}
                          error={errors.microinversor}
                        >
                          <option value="">
                            {t("product_registration_select_an_option")}
                          </option>
                          <option value={"0"}>Inversor</option>
                          <option value={"1"}>Microinversor</option>
                        </Select>
                      </div>
                    </PaddingCard>
                  </Card>
                </>
              )}
            </LateralContent>
          </Board>
        )}
      </Formik>
      {fullLoading && <LoadingFullScreen />}
    </Container>
  );
};
export default ProductMenage;
