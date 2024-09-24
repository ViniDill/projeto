import React from "react";
import { S1 as Subtitle1 } from "./styles";

export interface SubtitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  size?: "lg" | "xl";
  bold?: boolean;
  align?: "right" | "left" | "center";
}

export const Subtitle: React.FC<SubtitleProps> = ({ children, ...rest }) => {
  return <Subtitle1 {...rest}>{children}</Subtitle1>;
};
