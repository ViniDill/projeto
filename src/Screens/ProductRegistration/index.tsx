import React, { useEffect } from "react";
import SelectCategory from "./SelectCategory";
import ProductMenageSkeleton from "./ProductMenage/SkeletonProductMenage";

import { Container } from "./styles";
import SkeletonSelectCategory from "./SkeletonSelectCategory";
import ProductMenage from "./ProductMenage";
import useProductRegistration from "./hooks/useProductRegistration";
import { useLocation } from "react-router-dom";
import { categoryList } from "../../utils/categoryList";

interface LocationState {
  productId?: number;
  typeOfUpdate?: number;
  category?: number;
}

const ProductRegistration: React.FC = () => {
  const {
    stage,
    handleCategory,
    category,
    handleNextStage,
    getBrands,
    loading,
    brands,
    monitoringType,
    phases,
    idCategory,
    typeOfUpdate,
    setTypeOfUpdate,
  } = useProductRegistration();

  const location = useLocation();
  // const state = location.state as LocationState;
  const type = location.state
    ? (location.state as LocationState).typeOfUpdate
    : null;
  const productId = location.state
    ? (location.state as LocationState).productId
    : null;

  const categoryId = location.state
    ? (location.state as LocationState).category
    : null;

  useEffect(() => {
    getBrands();
    setTypeOfUpdate(type || 0);
    if (categoryId) {
      handleCategory(
        categoryList.find((field) => field.id === categoryId)?.label || "",
        categoryId
      );
    }
  }, []);

  if (stage === 0 && typeOfUpdate !== 1) {
    return (
      <Container>
        {loading ? (
          <SkeletonSelectCategory />
        ) : (
          <SelectCategory
            category={category}
            setCategory={handleCategory}
            nextStage={() => {
              handleNextStage(1);
            }}
          />
        )}
      </Container>
    );
  }
  return (
    <Container>
      {loading ? (
        <ProductMenageSkeleton />
      ) : (
        <ProductMenage
          title={category || ""}
          backPage={() => {
            handleNextStage(0);
          }}
          brands={brands}
          monitoringType={monitoringType}
          phases={phases}
          idCategory={idCategory}
          typeOfUpdate={typeOfUpdate || 0}
          productId={productId}
        />
      )}
    </Container>
  );
};

export default ProductRegistration;
