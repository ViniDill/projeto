import React from "react";
import { Story, Meta } from "@storybook/react";
import InternalButton, { InternalButtonProps } from "./index";

export default {
  title: "Components/InternalButton",
  component: InternalButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<InternalButtonProps> = (args) => (
  <InternalButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
