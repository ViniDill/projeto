import apiClient from "../ApiClient";
import { ResponseSolarKit, SolarKit, SolarKitProps } from "./KitServiceProps";

class KitService implements SolarKitProps {
  async createSolarKit(value: SolarKit): Promise<SolarKit> {
    try {
      const response = await apiClient.post("solar-kits", { ...value });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getSolarKit(query?: string | undefined): Promise<ResponseSolarKit> {
    try {
      const response = await apiClient.get(
        query ? `solar-kits${query}` : `solar-kits`
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getSolarKitById(id: string | number): Promise<SolarKit> {
    try {
      const response = await apiClient.get(`solar-kits/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateSolarKit(
    id: string | number,
    value: SolarKit
  ): Promise<SolarKit> {
    try {
      const response = await apiClient.put(`solar-kits/${id}`, { ...value });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteSolarKit(id: string | number): Promise<SolarKit> {
    try {
      const response = await apiClient.delete(`solar-kits/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiKitService = new KitService();
