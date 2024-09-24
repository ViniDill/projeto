import apiClient from "../ApiClient";

import {
  TypeOfFixingprops,
  MonitoringValue,
  PaginationResponse,
} from "./MonitoringTypeServiceProps";

class monitoringTypeService implements TypeOfFixingprops {
  async fetchMonitoringType(query?: string): Promise<PaginationResponse> {
    try {
      const reponse = await apiClient.get<PaginationResponse>(
        query ? `monitoring-types${query}` : "monitoring-types"
      );
      return reponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async fetchMonitoringTypeById(id: number | string): Promise<MonitoringValue> {
    try {
      const reponse = await apiClient.get<MonitoringValue>(
        `monitoring-types/${id}`
      );
      return reponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async createMonitoringType(
    monitoring_type_name: string
  ): Promise<MonitoringValue> {
    try {
      const reponse = await apiClient.post<MonitoringValue>(
        "monitoring-types",
        {
          monitoring_type_name,
        }
      );
      return reponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateMonitoringType(
    id: string | number,
    monitoring_type_name: string
  ): Promise<MonitoringValue> {
    try {
      const reponse = await apiClient.put<MonitoringValue>(
        `monitoring-types/${id}`,
        {
          monitoring_type_name,
        }
      );
      return reponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteMonitoringType(id: string | number): Promise<void> {
    try {
      const response = await apiClient.delete(`monitoring-types/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiMonitoringTypeService = new monitoringTypeService();
