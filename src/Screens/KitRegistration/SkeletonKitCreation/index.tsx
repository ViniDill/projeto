import React from "react";
import Bones from "@mui/material/Skeleton";
import Skeleton from "@mui/material/Skeleton";
import Spacer from "../../../Components/Spacer";

import {
  Container,
  HeaderContainer,
  DivisionContainer,
  Divisions,
  SubDivisions,
  ComponentsSubdivisions,
  MiddleContainer,
  Observation,
  Amount,
  Finish,
  ItensContainer,
} from "./styles";

const SkeletonKitCreation: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Skeleton variant="text" width={464} height={37} />
        <Skeleton variant="text" width={509} height={14} />
      </HeaderContainer>
      <DivisionContainer>
        <Divisions>
          <Skeleton variant="text" className="label" />
          <Bones variant="rectangular" className="Bones" />
          <Skeleton variant="text" className="label" />
          <Bones variant="rectangular" className="Bones" />
          <SubDivisions>
            <ComponentsSubdivisions>
              <Skeleton variant="text" className="label" />
              <Bones variant="rectangular" className="Bones" />
            </ComponentsSubdivisions>
            <ComponentsSubdivisions>
              <Skeleton variant="text" className="label" />
              <Bones variant="rectangular" className="Bones" />
            </ComponentsSubdivisions>
            <ComponentsSubdivisions>
              <Skeleton variant="text" className="label" />
              <Bones variant="rectangular" className="Bones" />
            </ComponentsSubdivisions>
            <ComponentsSubdivisions>
              <Skeleton variant="text" className="label" />
              <Bones variant="rectangular" className="Bones" />
            </ComponentsSubdivisions>
          </SubDivisions>
        </Divisions>
        <Divisions>
          <Skeleton variant="text" className="label" />
          <Bones variant="rectangular" className="Bones" />
          <SubDivisions>
            <ComponentsSubdivisions>
              <Skeleton variant="text" className="label" />
              <Bones variant="rectangular" className="Bones" />
            </ComponentsSubdivisions>
            <ComponentsSubdivisions>
              <Skeleton variant="text" className="label" />
              <Bones variant="rectangular" className="Bones" />
            </ComponentsSubdivisions>
            <ComponentsSubdivisions>
              <Skeleton variant="text" className="label" />
              <Bones variant="rectangular" className="Bones" />
            </ComponentsSubdivisions>
            <ComponentsSubdivisions>
              <Skeleton variant="text" className="label" />
              <Bones variant="rectangular" className="Bones" />
            </ComponentsSubdivisions>
            <ComponentsSubdivisions>
              <Skeleton variant="text" className="label" />
              <Bones variant="rectangular" className="Bones" />
            </ComponentsSubdivisions>
            <ComponentsSubdivisions>
              <Skeleton variant="text" className="label" />
              <Bones variant="rectangular" className="Bones" />
            </ComponentsSubdivisions>
          </SubDivisions>
        </Divisions>
      </DivisionContainer>
      <MiddleContainer>
        <Skeleton variant="text" width={243} height={19} />
        <Spacer size="s" />
        <Skeleton variant="text" width={100} height={9} />
        <Bones
          variant="rectangular"
          className="Bones"
          width={535}
          height={41}
        />
        <Spacer size="xl" />
        <Skeleton variant="text" width={202} height={19} />
      </MiddleContainer>
      <Spacer size="xl" />
      <ItensContainer>
        <Bones variant="rectangular" className="Bones" height={186} />
        <Bones variant="rectangular" className="Bones" height={186} />
        <Bones variant="rectangular" className="Bones" height={186} />
        <Bones variant="rectangular" className="Bones" height={186} />
        <Bones variant="rectangular" className="Bones" height={186} />
        <Bones variant="rectangular" className="Bones" height={186} />
      </ItensContainer>
      <Spacer size="xl" />
      <Amount>
        <Skeleton variant="text" width={204} height={23} />
      </Amount>
      <Observation>
        <Skeleton variant="text" width={220} height={19} />
        <Skeleton variant="text" height={94} />
      </Observation>
      <Finish>
        <Skeleton variant="text" width={145} height={49} />
      </Finish>
    </Container>
  );
};

export default SkeletonKitCreation;
