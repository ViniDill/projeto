import React from "react";

import { Container, Controller, MainContainer, SubTitle } from "./styles";
import MinusIcon from "./minusIcon";
import PlusIcon from "./plusIcon";
import Spacer from "../Spacer";

export interface CounterProps {
  clickIncrement?: () => void;
  clickDecrement?: () => void;
  value?: number;
  title?: string;
}

const Counter: React.FC<CounterProps> = ({
  clickDecrement,
  clickIncrement,
  value = 0,
  title,
}) => {
  return (
    <MainContainer>
      {title && (
        <>
          <div>
            <SubTitle>{title}</SubTitle>
          </div>
          <Spacer size="s" />
        </>
      )}
      <Container>
        <Controller onClick={clickDecrement} data-testid="decrement">
          <MinusIcon />
        </Controller>
        <div>
          <span>{value}</span>
        </div>
        <Controller onClick={clickIncrement} data-testid="increment">
          <PlusIcon />
        </Controller>
      </Container>
    </MainContainer>
  );
};

export default Counter;
