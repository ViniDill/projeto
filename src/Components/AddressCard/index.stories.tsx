import React from "react";
import { Story, Meta } from "@storybook/react";
import AddressCard, { AddressCardProps } from ".";

export default {
  title: "Components/AddressCard",
  component: AddressCard,
} as Meta;

const Template: Story<AddressCardProps> = (args) => <AddressCard {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  street: "Rua Teste",
  neighborhood: "Bairro Teste",
  city: "Cidade Teste",
  state: "Estado Teste",
  complement: "Complemento Teste",
  houseName: "Casa Teste",
};

export const Selected = Template.bind({});
Selected.args = {
  ...Regular.args,
  selected: true,
};
