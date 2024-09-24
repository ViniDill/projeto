import React from "react";
import { Story, Meta } from "@storybook/react";
import CheckBoxCategory, { CheckBoxCategoryProps } from "./index";

export default {
  title: "Components/CheckBoxCategory",
  component: CheckBoxCategory,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<CheckBoxCategoryProps> = (args) => (
  <CheckBoxCategory {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Category 1",
};

export const Selected = Template.bind({});
Selected.args = {
  name: "Category 2",
  selected: true,
};
