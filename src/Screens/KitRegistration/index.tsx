import React, { useState } from "react";
import { Container } from "./styles";
import KitCreation from "./KitCreation";
import SkeletonKitCreation from "./SkeletonKitCreation";

const KitRegistration: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <Container>{loading ? <SkeletonKitCreation /> : <KitCreation />}</Container>
  );
};

export default KitRegistration;
