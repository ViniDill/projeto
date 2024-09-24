import React from "react";
import { Meta } from "@storybook/react";
import { H1, H2, H3, H4, TitleProps } from "./index";

export default {
  title: "DesingSystem/Title",
  component: H1,
} as Meta;

export const h1: React.FC<TitleProps> = (args) => <H1 {...args}>Heading 1</H1>;

export const h2: React.FC<TitleProps> = (args) => <H2 {...args}>Heading 2</H2>;

export const h3: React.FC<TitleProps> = (args) => <H3 {...args}>Heading 3</H3>;

export const h4: React.FC<TitleProps> = (args) => <H4 {...args}>Heading 4</H4>;
