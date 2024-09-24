import MenuButton, { MenuButtonProps } from "./index";

export default {
  title: "Components/MenuButton",
  component: MenuButton,
  argTypes: {
    iconName: {
      control: {
        type: "text",
      },
    },
    label: {
      constrol: {
        type: "text",
      },
    },
  },
};

const Template = (args: MenuButtonProps) => (
  <MenuButton {...args} />
);

export const Default = Template.bind({});