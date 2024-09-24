import Input, { InputProps } from ".";

export default {
  title: "DesingSystem/Input",
  component: Input,
  argTypes: {
    fontSize: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    title: {
      control: {
        type: "text",
        description: "Input title",
      },
    },
    error: {
      control: {
        type: "boolean",
        labels: { true: "Error", false: "No Error" },
      },
    },
  },
};

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({ title: "huehuehe" });
