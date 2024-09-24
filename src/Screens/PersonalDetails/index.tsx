import { useState } from "react";
import PersonalDetail from "./PersonalDetail";
import SkeletonSelectCategory from "../PersonalDetails/SkeletonSelectCategory";
import { Container } from "./styles";

const PersonalDetails: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <Container>
      {loading ? <SkeletonSelectCategory /> : <PersonalDetail />}
    </Container>
  );
};

export default PersonalDetails;
