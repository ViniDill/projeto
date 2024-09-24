import UploadImage, { UploadImageProps } from "./index";
import { Story } from "@storybook/react";

export default {
  title: "Components/UploadImage",
  component: UploadImage,
};

const Template: Story<UploadImageProps> = (args) => (
  <UploadImage {...args} />
);

export const Default = Template.bind({});
  