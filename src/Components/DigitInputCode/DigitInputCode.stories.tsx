import DigitInputCode from "./index";

export default {
  title: "Components/DigitInputCode",
  component: DigitInputCode,
  argTypes: {
    error: {
      control: {
        type: "boolean",
      },
    },
  },
}

const Template: React.FC = () => <DigitInputCode error={false} />;

export const Default = Template.bind({});
