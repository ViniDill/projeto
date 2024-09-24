import React from "react";
import { Container, HeaderContainer, Content, Pagination } from "./styles";
import { Skeleton } from "@mui/material";
import Bones from "@mui/material/Skeleton";
import Spacer from "../../../Components/Spacer";

const SkeletonRegisterPrice: React.FC = () => {
  return (
    <Container>
      <Skeleton variant="text" width={222} height={22} />
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

export default SkeletonRegisterPrice;
