import React from "react";

import { Container, Header } from "./styles";
import Skeleton from "@mui/material/Skeleton";
import Spacer from "../../../Components/Spacer";

const SkeletonPass: React.FC = () => {
  return (
    <Container>
      <Header>
        <Skeleton variant="rounded" width="100%" height={30} />
        <Skeleton variant="rounded" width="100%" height={30} />
      </Header>
      <Spacer size="l" />
      <Skeleton variant="rounded" width="100%" height={600} />
    </Container>
  );
};

export default SkeletonPass;
