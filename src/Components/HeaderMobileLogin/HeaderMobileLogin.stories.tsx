import HeaderMobileLogin, { PropsHeader } from ".";

export default {
  title: "Components/HeaderMobile",
  component: HeaderMobileLogin,
  argTypes: {
    image: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args: PropsHeader) => (
  <div style={{ marginTop: 200 }}>
    <HeaderMobileLogin {...args} />
  </div>
);

export const Default = Template.bind({});
