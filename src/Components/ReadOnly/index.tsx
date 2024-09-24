import React from "react";

import { Container, ReadContainer, SubTitle } from "./styles";
import Spacer from "../Spacer";

export interface ReadOnlyProps {
  align?: "left" | "right" | "center";
  title?: string;
  value: string | number;
}

const ReadOnly: React.FC<ReadOnlyProps> = ({
  align = "center",
  title,
  value,
}) => {
  return (
    <Container>
      {title && (
        <>
          <div>
            <SubTitle>{title}</SubTitle>
            <Spacer size="s" />
          </div>
        </>
      )}

      <ReadContainer align={align}>
        <span>{value}</span>
      </ReadContainer>
    </Container>
  );
};

export default ReadOnly;
