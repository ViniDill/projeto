import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Container } from "./styles";

const PaginationSkeleton: React.FC = () => {
    return (
        <Container>
          <Skeleton className="Skeleton"/>
          <Skeleton className="Skeleton"/>
          <Skeleton className="Skeleton"/>
          <Skeleton className="Skeleton"/>
          <Skeleton className="Skeleton"/>
        </Container>
      );
};

export default PaginationSkeleton;