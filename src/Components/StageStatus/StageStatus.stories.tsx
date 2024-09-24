import StageStatus, { StageStatusProps } from "./index";

export default {
  title: "Components/StageStatus",
  component: StageStatus,
};

const Template = (args: StageStatusProps) => (
  <StageStatus {...args}></StageStatus>
);

export const Default = Template.bind({});
