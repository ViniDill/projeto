import React from "react";
import Arrow from "./Arrow";

import { Container, Text } from "./styles";
import { useTranslation } from "react-i18next";

export interface BackButtonTopProps {
  onClick?: () => void;
}

const BackButtonTop: React.FC<BackButtonTopProps> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <Container onClick={onClick}>
      <Arrow />
      <Text>{t("Back_button_top_title")}</Text>
    </Container>
  );
};

export default BackButtonTop;
