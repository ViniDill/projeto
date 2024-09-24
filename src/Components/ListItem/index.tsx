import React from "react";

import { Container, ContainerTitles, Title, SubTitle, Button } from "./styles";
import TreePoints from "../../IconsSvg/Treepoints";

export interface ListItemProps {
  index?: number;
  onClick?: () => void;
  title?: string;
  description?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  index = 0,
  onClick,
  title,
  description,
}) => {
  return (
    <Container index={index}>
      <ContainerTitles>
        <Title>{title}</Title>
        {description && <SubTitle>{description}</SubTitle>}
      </ContainerTitles>
      <Button onClick={onClick} data-testid="button">
        <TreePoints />
      </Button>
    </Container>
  );
};

export default ListItem;
