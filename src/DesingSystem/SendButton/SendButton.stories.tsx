import React from "react";
import { Story, Meta } from "@storybook/react";
import SendButton, { PropsButton } from "./index";

// Definindo a configuração meta do componente
export default {
  title: "Components/SendButton",
  component: SendButton,
} as Meta;

// Template para criar diferentes variantes do componente
const Template: Story<PropsButton> = (args) => <SendButton {...args} />;

// Variante padrão do componente
export const Default = Template.bind({});
Default.args = {
  children: "Enviar",
};

// Outra variante do componente
export const Disabled = Template.bind({});
Disabled.args = {
  children: "Enviar",
  disabled: true,
};
