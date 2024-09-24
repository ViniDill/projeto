import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";
import media from "styled-media-query";

export const Container = styled.div``;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 42px;
  flex-wrap: wrap;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
`;

export const ContainerCard = styled.div`
  padding: 20px;
`;

export const SkeletonMobile = styled(Skeleton)`
  width: 220px;
  height: 220px !important;
  ${media.lessThan("medium")`
    width: 130px;
    height: 130px;
  `}
`;
