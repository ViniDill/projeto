import React, { useState, useCallback } from "react";
import {
  Container,
  Table,
  TableContent,
  ContainerTable,
  Content,
  HeaderContainer,
  Title,
  ContainerFilter,
  ContainerInput,
  PaginationContainer,
  DrawerComponents,
  DrawerComponentsContainer,
  DrawerPrice,
  DrawerPadding,
  DrawerButtons,
  MobileContainer,
  MobileContent,
  MobileSwitch,
  MobileIcon,
  IconBody,
  DrawerImage,
} from "./styles";
import Switch from "../../../DesingSystem/Switch";
import Input from "../../../DesingSystem/Input";
import Button from "../../../DesingSystem/Button";
import { useTranslation } from "react-i18next";
import Spacer from "../../../Components/Spacer";
import Pagination from "../../../Components/Pagination";
import Text from "../../../DesingSystem/Text";
import { Drawer } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FechProductProps } from "../../../services/RegisterProductService/IRegisterProductService";
import { NumericFormat } from "react-number-format";
import { Formik } from "formik";
import {
  parseCurrencyToNumber,
  formatToBrazilianCurrency,
} from "../../../utils/formatToBraszilianCurrency";

interface PaginationProps {
  from: number;
  last_page: number;
  current_page: number;
}

interface RegisterPriceProps {
  data: FechProductProps[];
  paginationValues: PaginationProps;
  searchText: string;
  loading: boolean;
  handlePagination: (n: number) => void;
  handlePaginationNavigation: (n: number) => void;
  setSearchText: (e: string) => void;
  handleSearchText: (e: string) => void;
  handlePrice: (id: number | string, price: number) => void;
}

const RegisterPrice: React.FC<RegisterPriceProps> = ({
  data,
  paginationValues,
  handlePagination,
  handlePaginationNavigation,
  searchText,
  setSearchText,
  handleSearchText,
  loading,
  handlePrice,
}) => {
  const { t } = useTranslation();

  const [selectedProductId, setselectedProductId] = useState<number | null>(
    null
  );
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (priceId: number | null) => () => {
    setselectedProductId(priceId);
    setOpen(!open);
  };

  const renderPriceList = useCallback(
    () => (
      <Table>
        <thead>
          <tr>
            <th className="Name">{t("product_price_name_of_product")}</th>
            <th className="Capacity">{t("product_price_capacity")}</th>
            <th className="Price">{t("product_price_price")}</th>
            <th className="TableSwitch">{t("product_price_activity")}</th>
            <th className="SaveButton"></th>
          </tr>
        </thead>
        <TableContent>
          {data.map((price) => (
            <Formik
              key={price.id}
              initialValues={{ valuePrice: price.price }}
              onSubmit={(value) => {
                handlePrice(
                  price.id,
                  parseCurrencyToNumber(value.valuePrice?.toString())
                );
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit }) => (
                <tr>
                  <td className="Name">{price.product_name}</td>
                  <td className="Capacity">{price.potency}</td>
                  <td className="Price">
                    <NumericFormat
                      name="valuePrice"
                      placeholder="R$ 0,00"
                      value={values.valuePrice}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"R$ "}
                      fixedDecimalScale={true}
                      decimalScale={2}
                      customInput={Input}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </td>
                  <td className="TableSwitch">
                    <Switch />
                  </td>
                  <td className="SaveButton">
                    <Button
                      variant="Primary"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      {t("product_price_save")}
                    </Button>
                  </td>
                </tr>
              )}
            </Formik>
          ))}
        </TableContent>
      </Table>
    ),
    [data]
  );

  const selectedProduct = data.find((price) => price.id === selectedProductId);

  return (
    <Container>
      <Title>{t("product_price_title")}</Title>
      <Content>
        <ContainerFilter>
          <ContainerInput>
            <Input
              placeholder={t("product_price_placeholder")}
              className="SearchInput"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </ContainerInput>
          <Button
            variant="Neutral"
            className="SearchButton"
            onClick={() => {
              handleSearchText(searchText);
            }}
          >
            {t("product_price_button_search")}
          </Button>
        </ContainerFilter>
        <Spacer size="l" />

        <HeaderContainer></HeaderContainer>
        <ContainerTable>{renderPriceList()}</ContainerTable>
        {data.map((price) => (
          <MobileContainer key={price.id}>
            <MobileContent>
              <Text size="lg">{price.product_name}</Text>
              <Text size="md">
                {formatToBrazilianCurrency(price.price || 0)}
              </Text>
            </MobileContent>
            <MobileSwitch>
              <IconBody>
                <Switch />
              </IconBody>
              <MobileIcon onClick={toggleDrawer(price.id)}>
                <MoreHorizIcon className="IconRotated" />
              </MobileIcon>
            </MobileSwitch>
          </MobileContainer>
        ))}
        <Spacer size="xl" />
        <PaginationContainer>
          <Pagination
            loading={loading}
            totalPages={paginationValues.last_page}
            currentPage={paginationValues.current_page}
            onPageChange={handlePagination}
            goBack={() => {
              handlePaginationNavigation(paginationValues.current_page - 1);
            }}
            goForward={() => {
              handlePaginationNavigation(paginationValues.current_page + 1);
            }}
          />
        </PaginationContainer>
      </Content>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        className="Drawer"
      >
        {selectedProduct && (
          <DrawerComponentsContainer>
            <Formik
              initialValues={{ valuePrice: selectedProduct.price }}
              onSubmit={(value) => {
                handlePrice(
                  selectedProduct.id,
                  parseCurrencyToNumber(value.valuePrice?.toString())
                );
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit }) => (
                <>
                  <DrawerPadding>
                    <DrawerImage>
                      <img src="./inversor.webp" alt="Imagem do produto" />
                    </DrawerImage>
                    <Spacer size="l" />
                    <DrawerComponents>
                      <Text size="md" bold={true}>
                        {t("product_price_Product_name")}
                      </Text>
                      <Text size="md">{selectedProduct.product_name}</Text>
                    </DrawerComponents>
                    <DrawerComponents>
                      <Text size="md" bold={true}>
                        {t("product_price_inverter_capacity")}
                      </Text>
                      <Text size="md">{selectedProduct.potency}</Text>
                    </DrawerComponents>
                    <DrawerComponents>
                      <Text size="md" bold={true}>
                        {t("product_price_stats")}
                      </Text>
                      <Switch />
                    </DrawerComponents>
                    <Spacer size="l" />
                    <DrawerPrice>
                      <label>{t("product_price_price")}</label>
                      <Spacer size="s" />
                      <NumericFormat
                        name="valuePrice"
                        placeholder="R$ 0,00"
                        value={values.valuePrice}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"R$ "}
                        fixedDecimalScale={true}
                        decimalScale={2}
                        customInput={Input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </DrawerPrice>
                  </DrawerPadding>
                  <Spacer size="l" />
                  <DrawerButtons>
                    <Button
                      variant="Secundary"
                      className="DrawerButton"
                      onClick={() => setOpen(false)}
                    >
                      {t("product_price_close")}
                    </Button>
                    <Button
                      variant="Primary"
                      className="DrawerButton"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      {t("product_price_save")}
                    </Button>
                  </DrawerButtons>
                </>
              )}
            </Formik>
          </DrawerComponentsContainer>
        )}
      </Drawer>
    </Container>
  );
};

export default RegisterPrice;
