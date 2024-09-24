import React from "react";
import {
  H1 as Titleh1,
  H2 as TitleH2,
  H3 as TitleH3,
  H4 as TitleH4,
} from "./styles";

export interface TitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const H1: React.FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <Titleh1 {...rest}>
      {children}
    </Titleh1>
  );
};

export const H2: React.FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <TitleH2 {...rest}>
      {children}
    </TitleH2>
  );
};

export const H3: React.FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <TitleH3 {...rest}>
      {children}
    </TitleH3>
  );
};

export const H4: React.FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <TitleH4 {...rest}>
      {children}
    </TitleH4>
  );
};
