import React from "react";
import { Story, Meta } from "@storybook/react";
import UserDetailsMenu, { UserDetailsProps } from "./index";

export default {
  title: "Components/UserDetailsMenu",
  component: UserDetailsMenu,
} as Meta;

const Template: Story<UserDetailsProps> = (args) => (
  <UserDetailsMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "John Doe",
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  name: "Jane Doe",
  title: "Software Engineer",
};
