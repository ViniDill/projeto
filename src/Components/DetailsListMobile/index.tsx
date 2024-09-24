import React from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  Footer,
  Title,
  Description,
  ContainerDescription,
  ImageContainer,
} from "./styles";
import Divider from "./Divider";
import Button from "../../DesingSystem/Button";
import Spacer from "../Spacer";

export interface DetailsListMobileProps {
  image?: string;
  product?: string;
  brand?: string;
  type?: string;
  onEdit?: () => void;
  onDelet?: () => void;
}

const DetailsListMobile: React.FC<DetailsListMobileProps> = ({
  image,
  product,
  brand,
  type,
  onDelet,
  onEdit,
}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <ImageContainer>
        <Divider />
        <Spacer size="m" />
        <div>
          <img src={image ?? "/productModel.jpg"} alt="product model" />
        </div>
      </ImageContainer>

      <div>
        <ContainerDescription>
          <Title>{t("details_list_mobile_name_of_product")}</Title>
          <Description>{product}</Description>
        </ContainerDescription>
        <ContainerDescription>
          <Title>{t("details_list_mobile_name_of_brand")}</Title>
          <Description>{brand}</Description>
        </ContainerDescription>
        <ContainerDescription>
          <Title>{t("details_list_mobile_name_of_type")}</Title>
          <Description>{type}</Description>
        </ContainerDescription>
      </div>
      <Spacer size="m" />
      <Footer>
        <Button variant="Primary" onClick={onEdit} data-testid="button-edit">
          {t("details_list_mobile_name_of_edit")}
        </Button>
        <Button
          variant="Secundary"
          onClick={onDelet}
          data-testid="button-delete"
        >
          {t("details_list_mobile_name_of_delete")}
        </Button>
      </Footer>
    </Container>
  );
};

export default DetailsListMobile;
