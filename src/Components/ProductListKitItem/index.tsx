import React from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  Title,
  ContainerSubTitles,
  ContainerTitle,
  ButtonClose,
  ContainerPrice,
  Price,
  CounterCont,
  SubTitle,
  MiniTitle,
} from "./styles";
import Spacer from "../Spacer";
import CloseIcon from "./CloseIcon";
import ReadOnly from "../ReadOnly";
import Counter from "../Counter";

export interface ProductListKitItemprops {
  priceValue?: string | number;
  title: string;
  brand: string;
  category?: string;
  inversor?: string | number;
  totalItem: number;
  increment?: () => void;
  decrement?: () => void;
  close?: () => void;
}

const ProductListKitItem: React.FC<ProductListKitItemprops> = ({
  priceValue = "R$ 0,00",
  title,
  brand,
  category,
  inversor,
  totalItem = 1,
  increment,
  decrement,
  close,
}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <ContainerTitle>
        <Title>{title}</Title>
        <ButtonClose onClick={close}>
          <CloseIcon />
        </ButtonClose>
      </ContainerTitle>
      <ContainerSubTitles>
        <div>
          <SubTitle>{brand}</SubTitle>
          {category && (
            <>
              <span> | </span>
              <SubTitle>{category}</SubTitle>
            </>
          )}
        </div>
        <Spacer size="s" />
        {inversor && (
          <div>
            <MiniTitle>{inversor}</MiniTitle>
          </div>
        )}
        <Spacer size="m" />
        <ContainerPrice>
          <Price>
            <ReadOnly
              value={priceValue}
              title={t("product_list_kit_item_unit_value")}
            />
          </Price>
          <CounterCont>
            <Counter
              value={totalItem || 1}
              clickIncrement={increment}
              clickDecrement={decrement}
              title={t("product_list_kit_item_quantity")}
            />
          </CounterCont>
        </ContainerPrice>
        <Spacer size="s" />
      </ContainerSubTitles>
    </Container>
  );
};

export default ProductListKitItem;
