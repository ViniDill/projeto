import React from "react";
import { Story, Meta } from "@storybook/react";

import Select, { SelectProps } from "./index";

export default {
  title: "DesingSystem/Select",
  component: Select,
  argTypes: {
    label: { control: "text" },
    data: { control: "array" }, // Permite editar a array de dados no Storybook
  },
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <Select {...args}>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  label: "Select Label",
};
