import React from "react";

import { Container } from "./styles";

interface PropsSpacer {
  size?: "none" | "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const Spacer: React.FC<PropsSpacer> = ({ size = "m" }) => {
  return <Container size={size} />;
};

export default Spacer;
