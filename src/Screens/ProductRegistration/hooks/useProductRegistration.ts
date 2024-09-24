import { useState, useCallback } from "react";
import { apiProductService } from "../../../services/ProductBrandService/ProductBrandService";
import { apiMonitoringTypeService } from "../../../services/MonitoringTypeService/MonitoringTypeService";
import { apiProductPhaseTypeService } from "../../../services/ProductPhaseTypeService/ProductPhaseTypeService";
import { Brand } from "../../../services/ProductBrandService/IProductBrandService";
import { MonitoringValue } from "../../../services/MonitoringTypeService/MonitoringTypeServiceProps";
import { PhaseTypeProps } from "../../../services/ProductPhaseTypeService/IProductPhaseTypeService";

const useProductRegistration = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [stage, setStage] = useState<number>(0);
  const [category, setCategory] = useState<string>();
  const [idCategory, setIdCategory] = useState<number>(0);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [monitoringType, setMonitoringType] = useState<MonitoringValue[]>([]);
  const [phases, setPhasesTypes] = useState<PhaseTypeProps[]>([]);
  const [typeOfUpdate, setTypeOfUpdate] = useState<number>(0);

  const handleCategory = (value: string, idCategory: number) => {
    setCategory(value);
    setIdCategory(idCategory);
  };

  const handleNextStage = (number: number) => {
    if (category) {
      setStage(number);
    }
  };

  const getBrands = useCallback(async () => {
    try {
      const result = await apiProductService.fetchBrand();
      const resultMonitoring =
        await apiMonitoringTypeService.fetchMonitoringType();
      const resultPhases = await apiProductPhaseTypeService.fetchItems();
      setBrands(result.data);
      setMonitoringType(resultMonitoring.data);
      setPhasesTypes(resultPhases.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    stage,
    setStage,
    category,
    setCategory,
    handleCategory,
    handleNextStage,
    getBrands,
    loading,
    brands,
    monitoringType,
    phases,
    idCategory,
    setTypeOfUpdate,
    typeOfUpdate,
  };
};

export default useProductRegistration;
