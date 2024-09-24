import apiClient from "../ApiClient";
import {
  ConcessionaireServiceProps,
  CreateProps,
  DefaultValues,
  PaginatedResponse,
} from "./ConcessionaireProps";

class ConcessionaireService implements ConcessionaireServiceProps {
  async getConcessionaire(
    query?: string | undefined
  ): Promise<PaginatedResponse> {
    try {
      const response = await apiClient.get(
        query ? `dealerships${query}` : "dealerships"
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getConcessionaireById(id: string | number): Promise<DefaultValues> {
    try {
      const response = await apiClient.get(`dealerships/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async createConcessionaire(value: CreateProps): Promise<DefaultValues> {
    try {
      const response = await apiClient.post("dealerships", { ...value });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateConcessionaire(
    id: string | number,
    value: CreateProps
  ): Promise<DefaultValues> {
    try {
      const response = await apiClient.put(`dealerships/${id}`, { ...value });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteConcessionaire(id: string | number): Promise<void> {
    try {
      const response = await apiClient.delete(`dealerships/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiConcessionaireService = new ConcessionaireService();
