import React from "react";
import { Story, Meta } from "@storybook/react";
import BackButtonTop, { BackButtonTopProps } from "../BackButtonTop";

export default {
  title: "Components/BackButtonTop",
  component: BackButtonTop,
} as Meta;

const Template: Story<BackButtonTopProps> = (args) => (
  <BackButtonTop {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  onClick: () => alert("Button clicked!"),
};
