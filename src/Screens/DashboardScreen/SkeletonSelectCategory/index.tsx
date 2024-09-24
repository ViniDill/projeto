import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import Spacer from "../../../Components/Spacer";
import { Container, ContainerContent, SkeletonMobile, ContainerCard } from "./styles";

const SelectCategory: React.FC = () => {
    return (
        <Container>
          <Skeleton variant="text" width={300} height={20} />
          <Spacer size="l" />
          <Card>
            <ContainerCard>
              <ContainerContent>
                <SkeletonMobile />
                <SkeletonMobile />
                <SkeletonMobile />
                <SkeletonMobile />
                <SkeletonMobile />
                <SkeletonMobile />
              </ContainerContent>
              <Spacer size="l" />
            </ContainerCard>
          </Card>
        </Container>
      );
};

export default SelectCategory;