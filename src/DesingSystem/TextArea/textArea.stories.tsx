import React from "react";
import { Story, Meta } from "@storybook/react";

import TextArea, { TextAreaProps } from "./index";

export default {
  title: "DesingSystem/TextArea",
  component: TextArea,
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Textarea Label",
};
