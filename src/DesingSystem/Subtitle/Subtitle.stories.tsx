import React from "react";
import { Meta } from "@storybook/react";
import { Subtitle, SubtitleProps } from "./index";

export default {
  title: "DesingSystem/Subtitle",
  component: Subtitle,
} as Meta;

export const s1: React.FC<SubtitleProps> = (args) => (
  <Subtitle {...args}>Subtitle 1</Subtitle>
);
