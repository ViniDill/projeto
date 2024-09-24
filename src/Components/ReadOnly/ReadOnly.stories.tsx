import React from "react";
import { Story, Meta } from "@storybook/react";

import ReadOnly, { ReadOnlyProps } from "./index";

export default {
  title: "Components/ReadOnly",
  component: ReadOnly,
  argTypes: {
    align: {
      control: { type: "select", options: ["left", "right", "center"] },
    },
  },
} as Meta;

const Template: Story<ReadOnlyProps> = (args) => <ReadOnly {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "Example Value",
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "Example Title",
  value: "Example Value",
};

export const AlignRight = Template.bind({});
AlignRight.args = {
  align: "right",
  value: "Example Value",
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {
  align: "left",
  value: "Example Value",
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  align: "center",
  value: "Example Value",
};
