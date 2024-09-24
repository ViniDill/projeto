import apiClient from "../ApiClient";

import {
  TypeOfFixingprops,
  FixingValue,
  PaginationResponse,
} from "./TypeOfFixingServiceProps";

class typeOfFixingService implements TypeOfFixingprops {
  async fetchTypeOfFixing(): Promise<PaginationResponse> {
    try {
      const reponse = await apiClient.get<PaginationResponse>("fixation-types");
      return reponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async fetchTypeOfFixingQuery(query: string): Promise<PaginationResponse> {
    try {
      const reponse = await apiClient.get<PaginationResponse>(
        `fixation-types${query}`
      );
      return reponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async fetchTypeOfFixingById(id: number | string): Promise<FixingValue> {
    try {
      const reponse = await apiClient.get<FixingValue>(`fixation-types/${id}`);
      return reponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async createTypeOfFixing(fixation_type_name: string): Promise<FixingValue> {
    try {
      const reponse = await apiClient.post<FixingValue>("fixation-types", {
        fixation_type_name,
      });
      return reponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateTypeOfFixing(
    id: string | number,
    fixation_type_name: string
  ): Promise<FixingValue> {
    try {
      const reponse = await apiClient.put<FixingValue>(`fixation-types/${id}`, {
        fixation_type_name,
      });
      return reponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteTypeOfFixing(id: string | number): Promise<void> {
    try {
      const response = await apiClient.delete(`fixation-types/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiTypeOfFixingService = new typeOfFixingService();
