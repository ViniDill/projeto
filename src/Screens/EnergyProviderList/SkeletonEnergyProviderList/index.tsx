import React from "react";
import {
  Container,
  HeaderContainer,
  Content,
  Pagination,
  TitleContainer,
} from "./styles";
import { Skeleton } from "@mui/material";
import Bones from "@mui/material/Skeleton";
import Spacer from "../../../Components/Spacer";

const SkeletonEnergyProviderList: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Skeleton variant="text" width={222} height={42} />
        <Skeleton
          variant="rectangular"
          height={22}
          width={70}
          className="Rectangle"
        />
      </TitleContainer>
      <Spacer size="l" />
      <Content>
        <HeaderContainer>
          <Skeleton variant="text" height={40} width={`100%`} />
          <Bones width={85} className="Button" />
        </HeaderContainer>
        <Skeleton variant="text" className="Filter" />
        <Spacer size="xs" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Skeleton variant="rectangular" height={40} className="Rectangle" />
        <Spacer size="l" />
        <Pagination>
          <Bones width={24} height={34} />
          <Bones width={24} height={34} />
          <Bones width={24} height={34} />
          <Bones width={24} height={34} />
          <Bones width={24} height={34} />
        </Pagination>
      </Content>
    </Container>
  );
};

export default SkeletonEnergyProviderList;
