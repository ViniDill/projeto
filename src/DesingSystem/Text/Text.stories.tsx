import React from "react";
import Text, { TextProps } from "./index";
import { Meta } from "@storybook/react";

export default {
  title: "DesingSystem/Text",
  component: Text,
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
        options: ["md", "lg"],
      },
    },
    bold: {
      control: "boolean",
    },
    align: {
      control: {
        type: "inline-radio",
        options: ["left", "center", "right"],
      },
    },
  },
} as Meta;

export const TextComponent: React.FC<TextProps> = (args) => (
  <Text {...args}>Text Component</Text>
);
