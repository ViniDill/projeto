import Pagination, { PaginationProps } from "./index";

export default {
    title: "Components/Pagination",
    component: Pagination,
  };
  
  const Template = (args: PaginationProps) => (
    <Pagination {...args}></Pagination>
  );
  
  export const Default = Template.bind({});