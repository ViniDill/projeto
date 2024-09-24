import DropdownButton, { DropdownButtonProps } from "./index";
import InternalButton from "../InternalButton";
import { Story } from "@storybook/react";

export default {
  title: "Components/DropdownButton",
  component: DropdownButton,
  argTypes: {
    iconName: {
      control: {
        type: "select",
        options: ["handshake", "apartment", "gear"],
      },
    },
    header: { control: "text" },
  },
};

const Template: Story<DropdownButtonProps> = (args: DropdownButtonProps) => (
  <DropdownButton {...args}>
    <InternalButton label="Botão interno" />
  </DropdownButton>
);

export const Default = Template.bind({});
Default.args = {
  header: "Button",
};
