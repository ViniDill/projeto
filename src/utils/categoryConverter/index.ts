import { CategoryEnum } from "../../Interfaces/enumCategoryProduct";
export const ConverterCategory = (category: number) => {
  switch (category) {
    case CategoryEnum.inversor:
      return "Inversor";
    case CategoryEnum.modulos:
      return "Modulos";
    case CategoryEnum.acessorios:
      return "Acessorios";
    case CategoryEnum.cabos:
      return "Cabos";
    case CategoryEnum.string:
      return "String";
    default:
      break;
  }
};
