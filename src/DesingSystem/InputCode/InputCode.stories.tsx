import CodeInput, { PropsCodeInput } from ".";

export default {
  title: "DesingSystem/CodeInput",
  component: CodeInput,
  argTypes: {
    fontSize: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    error: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args: PropsCodeInput) => <CodeInput {...args} />;

export const Default = Template.bind({});
