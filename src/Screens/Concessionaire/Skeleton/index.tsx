import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Card } from "@mui/material";
import Spacer from "../../../Components/Spacer";

import { Container, InternalContainer, Fields } from "./styles";

const SkeletonConcessionaire: React.FC = () => {
  return (
    <Container>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Spacer size="m" />
      <Card>
        <InternalContainer>
          <Skeleton variant="rectangular" width={"50%"} height={24} />
          <Spacer size="m" />
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Spacer size="m" />
          <Fields>
            <div>
              <Skeleton variant="rectangular" width={"50%"} height={24} />
              <Spacer size="m" />
              <Skeleton variant="rectangular" width={"100%"} height={24} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={"50%"} height={24} />
              <Spacer size="m" />
              <Skeleton variant="rectangular" width={"100%"} height={24} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={"50%"} height={24} />
              <Spacer size="m" />
              <Skeleton variant="rectangular" width={"100%"} height={24} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={"50%"} height={24} />
              <Spacer size="m" />
              <Skeleton variant="rectangular" width={"100%"} height={24} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={"50%"} height={24} />
              <Spacer size="m" />
              <Skeleton variant="rectangular" width={"100%"} height={24} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={"50%"} height={24} />
              <Spacer size="m" />
              <Skeleton variant="rectangular" width={"100%"} height={24} />
            </div>
          </Fields>
        </InternalContainer>
      </Card>
    </Container>
  );
};

export default SkeletonConcessionaire;
