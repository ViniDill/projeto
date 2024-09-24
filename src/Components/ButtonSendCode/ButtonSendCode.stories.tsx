import ButtonSendCode, { ButtonSendCodeProps } from "./index";

export default {
  title: "Components/ButtonSendCode",
  component: ButtonSendCode,
};

const Template = (args: ButtonSendCodeProps) => (
  <ButtonSendCode {...args} />
);

export const Default = Template.bind({});