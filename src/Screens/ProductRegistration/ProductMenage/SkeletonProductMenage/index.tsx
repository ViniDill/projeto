import React from "react";
import { Card } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import Spacer from "../../../../Components/Spacer";
import { 
    Container,
    Title,
    Board,
    PaddingCard,
    LateralContent,
    Description,
    SpaceDimension,
    InternalTitle,
    ProduContent,
 } from "./styles";



const ProductMenageSkeleton: React.FC = () => {
  return (
    <Container>
      <Title>
        <Skeleton variant="text" width={70} height={16} />
        <Skeleton variant="text" width={120} height={36} />
        <Spacer size="s" />
      </Title>
      <Board>
        <ProduContent>
          <Card className="Card">
            <PaddingCard>
              <Skeleton variant="text" width={70} height={16} />
              <Skeleton variant="text" height={80} className="Product" />
            </PaddingCard>
            <PaddingCard >
              <Skeleton variant="text" width={70} height={16} />
              <Skeleton variant="text" className="TextArea" />
            </PaddingCard >
            <PaddingCard >
            <Skeleton variant="text" width={150} />
            <Spacer size="m" />
              <SpaceDimension className="Dimension">
                <Description className="DescriptionContainer">
                    <Skeleton variant="text" className="DescriptionTitle" />
                    <Skeleton variant="text" className="DescriptionDimension" />
                </Description>
                <Description className="DescriptionContainer">
                    <Skeleton variant="text" className="DescriptionTitle"  />
                    <Skeleton variant="text" className="DescriptionDimension"  />
                </Description>
                <Description className="DescriptionContainer">
                    <Skeleton variant="text" className="DescriptionTitle"  />
                    <Skeleton variant="text" className="DescriptionDimension"  />
                </Description>
                <Description className="DescriptionContainer">
                    <Skeleton variant="text" className="DescriptionTitle"  />
                    <Skeleton variant="text" className="DescriptionDimension"  />
                </Description>
              </SpaceDimension>
            </PaddingCard >
            <PaddingCard >
              <Skeleton variant="text" className="Title" />
              <Skeleton variant="text" height={80} />
            </PaddingCard >
            <PaddingCard >
              <Skeleton variant="text" className="Title" />
              <Skeleton variant="text" height={120} />
            </PaddingCard >
          </Card>
        </ProduContent>

        <LateralContent>

          <Card className="CardContainer">
            <PaddingCard>
              <InternalTitle>
                <Skeleton variant="text" className="LateralTitle" />
              </InternalTitle>
              <Skeleton variant="text" className="LateralBox" />
              <Skeleton variant="text" className="LateralBox" />
            </PaddingCard>
          </Card>

          <Card className="CardContainer">
            <PaddingCard>
              <InternalTitle>
                <Skeleton variant="text" className="LateralTitle" />
              </InternalTitle>
              <Skeleton variant="text" className="LateralTextArea"/>
            </PaddingCard>
          </Card>

          <Card className="CardContainer">
            <PaddingCard>
              <InternalTitle>
                <Skeleton variant="text" className="LateralTitle" />
              </InternalTitle>
              <Skeleton variant="text" className="Label"/>
              <Skeleton variant="text" className="LateralBox" />
            </PaddingCard>
          </Card>
          
        </LateralContent>

      </Board>
    </Container>
  );
};

export default ProductMenageSkeleton;
