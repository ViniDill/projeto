import React, { useCallback } from "react";
import { Container, Arrow, PageNumber } from "./styles";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  goBack?: () => void;
  goForward?: () => void;
  onPageChange: (n: number) => void;
}

const PaginationSelect: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  goBack,
  goForward,
  onPageChange,
}) => {
  const renderPageNumbers = useCallback(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PageNumber
          key={i}
          isSelected={currentPage === i}
          onClick={() => onPageChange(i)}
          data-testid={"page-number"}
        >
          {i}
        </PageNumber>
      );
    }
    return pages;
  }, [currentPage, onPageChange, totalPages]);

  return (
    <Container data-testid="pagination-container">
      <Arrow
        src="/icons/LeftArrow.svg"
        alt="Left Arrow"
        data-testid="left-arrow"
        onClick={goBack}
      />
      {renderPageNumbers()}
      <Arrow
        src="/icons/RightArrow.svg"
        alt="Right Arrow"
        data-testid="right-arrow"
        onClick={goForward}
      />
    </Container>
  );
};

export default PaginationSelect;
