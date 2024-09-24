import React from "react";

import { Container, Title, ContainerImage } from "./styles";

export interface CheckBoxCategoryProps {
  name: string;
  selected?: boolean;
  onClick?: () => void;
  image?: string;
  testid?: string;
}

const CheckBoxCategory: React.FC<CheckBoxCategoryProps> = ({
  name,
  selected,
  onClick,
  image,
  testid,
}) => {
  return (
    <Container
      selected={selected}
      onClick={onClick}
      data-testid={testid || "CheckBoxCategoryButton"}
    >
      <ContainerImage>
        <img src={image || "/icons/strings.svg"} alt={name} />
      </ContainerImage>
      <div>
        <Title>{name}</Title>
      </div>
    </Container>
  );
};

export default CheckBoxCategory;
