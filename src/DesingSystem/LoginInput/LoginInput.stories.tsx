import LoginInput, { LoginInputProps } from ".";

export default {
  title: "DesingSystem/LoginInput",
  component: LoginInput,
  argTypes: {
    variation: {
      control: {
        type: "select",
        options: ["email", "password"],
      },
    },
    error: {
      control: {
        type: "boolean",
      },
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

const Template = (args: LoginInputProps) => <LoginInput {...args} />;

export const Default = Template.bind({});
