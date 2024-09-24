import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";
import theme from "../../../theme";

export const Container = styled.div``;

export const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerButton = styled.div`
`;

export const ContainerCard = styled.div`
  padding: 20px;
`;

export const SkeletonMobile = styled(Skeleton)`
  width: 274px;
  height: 271px !important;
  margin: ${theme.spacing.m};
`;