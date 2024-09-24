import apiClient from "../ApiClient";
import {
  IProductMonitoringTypeService,
  DefaultReturn,
  PaginationResponse,
  DefaultMessage,
} from "./IMonitoringType";

class ProductMonitoringTypeService implements IProductMonitoringTypeService {
  async fetchItems(): Promise<PaginationResponse> {
    try {
      const response = await apiClient.get<PaginationResponse>(
        "monitoring-types"
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async createTypes(monitoring_type_name: string): Promise<DefaultReturn> {
    try {
      const response = await apiClient.post<DefaultReturn>("monitoring-types", {
        monitoring_type_name,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async fetchItemTypesID(id: number | string): Promise<DefaultReturn> {
    try {
      const response = await apiClient.get<DefaultReturn>(
        `monitoring-types/${id}`
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateItemTypesID(
    id: number | string,
    monitoring_type_name: string
  ): Promise<DefaultReturn> {
    try {
      const response = await apiClient.put<DefaultReturn>(
        `monitoring-types/${id}`,
        { id, monitoring_type_name }
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteItemTypesID(id: number | string): Promise<DefaultMessage> {
    try {
      const response = await apiClient.delete<DefaultMessage>(
        `monitoring-types/${id}`
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiProductMonitoringTypeService =
  new ProductMonitoringTypeService();
