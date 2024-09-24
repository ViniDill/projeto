import React from "react";
import { Story, Meta } from "@storybook/react";
import AddButton, { AddButtonProps } from ".";

export default {
  title: "Components/AddButton",
  component: AddButton,
} as Meta;

const Template: Story<AddButtonProps> = (args) => <AddButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Add Item",
};
