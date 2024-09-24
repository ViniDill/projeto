import apiClient from "../ApiClient";
import {
  IProductPhaseTypeService,
  PhaseTypeProps,
  PaginationResponse,
  DefaultMessage,
} from "./IProductPhaseTypeService";

class ProductPhaseTypeService implements IProductPhaseTypeService {
  async fetchItems(query?: string): Promise<PaginationResponse> {
    try {
      const response = await apiClient.get<PaginationResponse>(
        query ? `phase-types${query}` : "phase-types"
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async createPhase(phase_type_name: string): Promise<PhaseTypeProps> {
    try {
      const response = await apiClient.post<PhaseTypeProps>("phase-types", {
        phase_type_name,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async fetchItemPhasesID(id: number | string): Promise<PhaseTypeProps> {
    try {
      const response = await apiClient.get<PhaseTypeProps>(`phase-types/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateItemPhasesID(
    id: number | string,
    phase_type_name: string
  ): Promise<PhaseTypeProps> {
    try {
      const response = await apiClient.put<PhaseTypeProps>(
        `phase-types/${id}`,
        {
          id,
          phase_type_name,
        }
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteItemPhasesID(id: number | string): Promise<DefaultMessage> {
    try {
      const response = await apiClient.delete<DefaultMessage>(
        `phase-types/${id}`
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiProductPhaseTypeService = new ProductPhaseTypeService();
