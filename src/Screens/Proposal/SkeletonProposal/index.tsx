import React from "react";
import { Skeleton } from "@mui/material";
import Bones from "@mui/material/Skeleton";
import Spacer from "../../../Components/Spacer";
import {
  Container,
  BackGroundContainer,
  TwoColumnsContainer,
  ThreeColumnsContainer,
  BonesContent,
  Checkbox,
  FinalContainer,
  ButtonContainer,
  BackgroundContainerMobile,
  ButtonContainerMobile,
} from "./styles";

const SkeletonProposal: React.FC = () => {
  return (
    <Container>
      <Skeleton variant="text" width={250} height={45} />
      <Spacer size="s" />
      <BackGroundContainer>
        <Skeleton variant="text" width={153} height={18} />
        <Spacer size="s" />
        <Bones className="Division" />
        <Spacer size="l" />
        <TwoColumnsContainer>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
        </TwoColumnsContainer>
        <Spacer size="l" />
        <Skeleton variant="text" width={88} height={18} />
        <Spacer size="s" />
        <Bones className="Division" />
        <Spacer size="l" />
        <TwoColumnsContainer>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
        </TwoColumnsContainer>
        <Spacer size="l" />
        <Skeleton variant="text" width={266} height={18} />
        <Spacer size="s" />
        <Bones className="Division" />
        <Spacer size="l" />
        <TwoColumnsContainer>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
        </TwoColumnsContainer>
        <Checkbox>
          <Bones width={18} height={18} />
          <Skeleton width={266} height={18} />
        </Checkbox>
        <Spacer size="l" />
        <Bones className="Middle" />
        <Spacer size="l" />
        <ThreeColumnsContainer>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="ThreeBones" />
          </BonesContent>
        </ThreeColumnsContainer>
        <Spacer size="l" />
        <TwoColumnsContainer>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones className="TwoBones" />
          </BonesContent>
        </TwoColumnsContainer>
        <Spacer size="l" />
        <Skeleton variant="text" width={176} height={18} />
        <Spacer size="s" />
        <Bones className="Division" />
        <Spacer size="l" />
        <FinalContainer>
          <BonesContent>
            <Skeleton variant="text" width={85} height={9} />
            <Bones height={41} />
          </BonesContent>
        </FinalContainer>
        <Spacer size="l" />
        <ButtonContainer>
          <Bones width={264} height={49} />
        </ButtonContainer>
      </BackGroundContainer>

      <BackgroundContainerMobile>
        <Bones height={12} width={100} />
        <Spacer size="s" />
        <Bones height={2} />
      </BackgroundContainerMobile>
      <Spacer size="m" />
      <BackgroundContainerMobile>
        <Bones height={12} width={100} />
        <Spacer size="s" />
        <Bones height={2} />
      </BackgroundContainerMobile>
      <Spacer size="m" />
      <BackgroundContainerMobile>
        <Bones height={12} width={100} />
        <Spacer size="s" />
        <Bones height={2} />
      </BackgroundContainerMobile>
      <Spacer size="m" />
      <BackgroundContainerMobile>
        <Bones height={12} width={100} />
        <Spacer size="s" />
        <Bones height={2} />
        <Spacer size="m" />
        <Bones height={12} width={100} />
        <Spacer size="s" />
        <Bones height={41} />
      </BackgroundContainerMobile>
      <Spacer size="xl" />
      <ButtonContainerMobile>
        <Bones height={49} width={264} className="Button" />
      </ButtonContainerMobile>
    </Container>
  );
};

export default SkeletonProposal;
