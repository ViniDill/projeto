import { useEffect } from "react";
import RegisterPrice from "./RegisterPrice";
import SkeletonRegisterPrice from "./SkeletonRegisterPrice";
import { Container } from "./styles";
import useProductPriceRegistration from "./hooks/useProductPriceRegistration";

const ProductPrice: React.FC = () => {
  const {
    getProcuts,
    loading,
    data,
    paginationValues,
    searchText,
    handlePagination,
    handlePaginationNavigation,
    setSearchText,
    handleSearchText,
    handlePrice,
  } = useProductPriceRegistration();

  useEffect(() => {
    getProcuts();
  }, []);

  return (
    <Container>
      {loading ? (
        <SkeletonRegisterPrice />
      ) : (
        <RegisterPrice
          data={data}
          paginationValues={paginationValues}
          handlePagination={handlePagination}
          handlePaginationNavigation={handlePaginationNavigation}
          searchText={searchText || ""}
          setSearchText={setSearchText}
          handleSearchText={handleSearchText}
          loading={loading}
          handlePrice={handlePrice}
        />
      )}
    </Container>
  );
};

export default ProductPrice;
