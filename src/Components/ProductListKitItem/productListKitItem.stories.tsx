import React from "react";
import { Story, Meta } from "@storybook/react";
import ProductListKitItem, { ProductListKitItemprops } from ".";

export default {
  title: "Components/ProductListKitItem",
  component: ProductListKitItem,
} as Meta;

const Template: Story<ProductListKitItemprops> = (args) => (
  <ProductListKitItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Example Product",
  brand: "Example Brand",
  category: "Example Category",
  inversor: "Example Inversor",
  totalItem: 2,
  priceValue: "R$ 100,00",
};

export const WithoutCategory = Template.bind({});
WithoutCategory.args = {
  ...Default.args,
  category: undefined,
};

export const WithoutInversor = Template.bind({});
WithoutInversor.args = {
  ...Default.args,
  inversor: undefined,
};

export const ZeroTotalItem = Template.bind({});
ZeroTotalItem.args = {
  ...Default.args,
  totalItem: 0,
};
