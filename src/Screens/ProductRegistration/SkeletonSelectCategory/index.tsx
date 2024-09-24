import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import Spacer from "../../../Components/Spacer";

import {
  Container,
  ContainerContent,
  ContainerButton,
  ContainerCard,
  SkeletonMobile,
} from "./styles";

const SkeletonSelectCategory: React.FC = () => {
  return (
    <Container>
      <Skeleton variant="text" width={200} height={16} />
      <Spacer size="l" />
      <Card>
        <ContainerCard>
          <ContainerContent>
            <SkeletonMobile />
            <SkeletonMobile />
            <SkeletonMobile />
            <SkeletonMobile />
            <SkeletonMobile />
          </ContainerContent>
          <Spacer size="l" />
          <ContainerButton>
            <Skeleton variant="rectangular" width={200} height={25} />
          </ContainerButton>
          <Spacer size="l" />
        </ContainerCard>
      </Card>
    </Container>
  );
};

export default SkeletonSelectCategory;
