import React from "react";
import { Container } from "./styles";
import PaginationSelect, { PaginationProps } from "./PaginationSelect";
import PaginationSkeleton from "./PaginationSkeleton";

interface PaginationComponentProps extends PaginationProps {
  loading: boolean;
}

const Pagination: React.FC<PaginationComponentProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  loading,
  goBack,
  goForward,
}) => {
  // const handlePage = (pageNumber: number) => {
  //   onPageChange(pageNumber);
  // };

  if (loading) {
    return <PaginationSkeleton />;
  }

  return (
    <Container>
      <PaginationSelect
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        goBack={goBack}
        goForward={goForward}
      />
    </Container>
  );
};

export default Pagination;
