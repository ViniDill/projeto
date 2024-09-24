// Switch.stories.js

import React from "react";
import { Story, Meta } from "@storybook/react";
import Switch, { SwitchProps } from "./index";

export default {
  title: "DesingSystem/Switch",
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  checked: false,
  onClick: () => alert("Switch clicked"),
};
