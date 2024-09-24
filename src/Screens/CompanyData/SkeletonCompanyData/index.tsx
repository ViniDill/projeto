import React from "react";
import { Skeleton } from "@mui/material";
import Bones from "@mui/material/Skeleton";
import Spacer from "../../../Components/Spacer";
import {
  Container,
  Background,
  InputContent,
  LeftContainer,
  RigthContainer,
} from "./styles";

const SkeletonCompanyData: React.FC = () => {
  return (
    <Container>
      <Skeleton variant="text" className="Title" />
      <Background>
        <LeftContainer>
          <Skeleton variant="text" className="SubTitle" />
          <InputContent>
            <Skeleton variant="text" className="Label" />
            <Bones className="Input" />
          </InputContent>
          <InputContent>
            <Skeleton variant="text" className="Label" />
            <Bones className="Input" />
          </InputContent>
          <InputContent>
            <Skeleton variant="text" className="Label" />
            <Bones className="Input" />
          </InputContent>
          <InputContent>
            <Skeleton variant="text" className="Label" />
            <Bones className="Input" />
          </InputContent>
          <InputContent>
            <Skeleton variant="text" className="Label" />
            <Bones className="Phone" />
          </InputContent>
          <Bones className="Button" />
        </LeftContainer>
        <RigthContainer>
          <Bones width={449} height={381} />
        </RigthContainer>
      </Background>
    </Container>
  );
};

export default SkeletonCompanyData;
