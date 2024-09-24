import React from "react";
import { Meta, Story } from "@storybook/react";
import TypeOfPersonCard, { TypeOfPersonCardProps } from ".";

export default {
  title: "Components/TypeOfPersonCard",
  component: TypeOfPersonCard,
} as Meta;

const Template: Story<TypeOfPersonCardProps> = (args) => (
  <TypeOfPersonCard {...args} />
);

export const PersonType = Template.bind({});
PersonType.args = {
  type: "person",
  active: false,
};

export const CompanyType = Template.bind({});
CompanyType.args = {
  type: "company",
  active: false,
};
