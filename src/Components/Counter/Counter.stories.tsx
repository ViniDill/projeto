import React from "react";
import { Story, Meta } from "@storybook/react";
import Counter, { CounterProps } from ".";

export default {
  title: "Components/Counter",
  component: Counter,
} as Meta;

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 10,
};

export const IncrementDecrementActions = Template.bind({});
IncrementDecrementActions.args = {
  clickIncrement: () => alert("Increment Clicked"),
  clickDecrement: () => alert("Decrement Clicked"),
};
