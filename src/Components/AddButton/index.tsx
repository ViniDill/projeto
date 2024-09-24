import React from "react";

import { Container, Text } from "./styles";
import PlusIcon from "./Icons/PlusIcon";

export interface AddButtonProps {
  text: string;
  onClick?: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ text, onClick }) => {
  return (
    <Container onClick={onClick} data-testid="container_button">
      <div>
        <PlusIcon />
      </div>
      <div>
        <Text>{text}</Text>
      </div>
    </Container>
  );
};

export default AddButton;
