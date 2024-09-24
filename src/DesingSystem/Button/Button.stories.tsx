import Button, { PropsButton } from "./index";

export default {
  title: "DesingSystem/Button",
  component: Button,
  argTypes: {
    variantStyle: {
      control: {
        type: "select",
        options: ["text", "contain", "border"],
      },
    },
    disable: {
      constrol: {
        type: "boolean",
      },
    },
  },
};

const Template = (args: PropsButton) => (
  <Button {...args}>Component button</Button>
);

export const Default = Template.bind({});
