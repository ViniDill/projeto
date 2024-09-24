// TableSwitch.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";
import TableSwitch, { TableSwitchProps } from "./index";

export default {
  title: "Components/TableSwitch",
  component: TableSwitch,
} as Meta;

const Template: Story<TableSwitchProps> = (args) => <TableSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  index: 1,
  name: "Test",
  onClickPencil: () => alert("Pencil clicked"),
  onClickSwitch: () => alert("Switch clicked"),
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  active: true,
};
