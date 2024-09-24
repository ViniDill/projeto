import React from "react";

import { Container, ContainerCard } from "./styles";
import Bones from "@mui/material/Skeleton";
import { Card } from "@mui/material";
import Spacer from "../../../Components/Spacer";

const Skeleton: React.FC = () => {
  return (
    <Container>
      <Bones variant="text" height={35} />
      <Spacer size="l" />
      <Card>
        <ContainerCard>
          <Bones variant="rectangular" height={50} />
          <Spacer size="l" />
          <Bones variant="rectangular" height={50} />
          <Spacer size="l" />
          <Bones variant="rectangular" height={50} />
          <Spacer size="l" />
          <Bones variant="rectangular" height={50} />
          <Spacer size="l" />
          <Bones variant="rectangular" height={50} />
          <Spacer size="l" />
          <Bones variant="rectangular" height={50} />
          <Spacer size="l" />
          <Bones variant="rectangular" height={50} />
          <Spacer size="l" />
          <Bones variant="rectangular" height={50} />
          <Spacer size="l" />
          <Bones variant="rectangular" height={50} />
        </ContainerCard>
      </Card>
    </Container>
  );
};

export default Skeleton;
