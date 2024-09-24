import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import { Container } from "./styles";
import SkeletonSelectCategory from "./SkeletonSelectCategory";

const DashboardScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <Container>
      {loading ? <SkeletonSelectCategory /> : <SelectCategory />}
    </Container>
  );
};

export default DashboardScreen;
