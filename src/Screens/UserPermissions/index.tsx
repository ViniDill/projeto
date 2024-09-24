import { useState } from "react";
import SelectCategory from "../UserPermissions/SelectCategory"
import SkeletonSelectCategory from "../UserPermissions/SkeletonSelectCategory"
import { Container } from "./styles"

const UserPermissions: React.FC = () => {
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

export default UserPermissions;