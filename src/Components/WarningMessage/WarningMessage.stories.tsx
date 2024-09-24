import React from "react";
import { Story, Meta } from "@storybook/react";
import WarningMessage, { warningProps } from "./index";

export default {
  title: "Components/WarningMessage",
  component: WarningMessage,
} as Meta;

const Template: Story<warningProps> = (args) => <WarningMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  descrition: "This is a warning message",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  descrition: "This is an error message",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  descrition: "This is a warning message",
};

export const Help = Template.bind({});
Help.args = {
  type: "help",
  descrition: "This is a help message",
};
