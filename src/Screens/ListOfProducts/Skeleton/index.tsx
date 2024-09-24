import React from "react";

import { Container, InternalCard, SearchSpace, Search, Button } from "./styles";
import Bones from "@mui/material/Skeleton";
import { Card } from "@mui/material";
import Spacer from "../../../Components/Spacer";

const Skeleton: React.FC = () => {
  return (
    <Container>
      <Bones variant="text" height={33} />
      <Card>
        <InternalCard>
          <SearchSpace>
            <Search>
              <Bones variant="rectangular" height={33} width={"100%"} />
            </Search>
            <Button>
              <Bones variant="rectangular" height={33} />
            </Button>
          </SearchSpace>
          <Spacer size="m" />
          <Bones variant="rectangular" height={33} />
          <Spacer size="s" />
          <Bones variant="rectangular" height={600} />
        </InternalCard>
      </Card>
    </Container>
  );
};

export default Skeleton;
