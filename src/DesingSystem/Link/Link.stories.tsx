import Link, { LinkProps } from "./index";

export default {
  title: "DesingSystem/Link",
  component: Link,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["Primary", "Secondary", "Tertiary"],
      },
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

const Template = (args: LinkProps) => <Link {...args}>Valor teste</Link>;

export const Default = Template.bind({});

// export const
