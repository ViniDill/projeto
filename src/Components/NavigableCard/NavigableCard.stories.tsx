import NavigableCard, { NavigableCardProps } from "./index";

export default {
    title: "Components/NavigableCard",
    component: NavigableCard,
  };
  
  const Template = (args: NavigableCardProps) => (
    <NavigableCard {...args}></NavigableCard>
  );
  
  export const Default = Template.bind({});
  