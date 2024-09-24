import apiClient from "../ApiClient";
import {
  IProductBrandService,
  PaginationBrandResponse,
  BrandResponseDefault,
  MessageApi,
} from "./IProductBrandService";

class ProductBrandService implements IProductBrandService {
  async fetchBrand(query?: string): Promise<PaginationBrandResponse> {
    try {
      const response = await apiClient.get<PaginationBrandResponse>(
        query ? `brands${query}` : "brands"
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async fetchBrandById(id: string | number): Promise<BrandResponseDefault> {
    try {
      const response = await apiClient.get<BrandResponseDefault>(
        `brands/${id}`
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateBrandById(
    id: string | number,
    brand_name: string
  ): Promise<BrandResponseDefault> {
    try {
      const response = await apiClient.put<BrandResponseDefault>(
        `brands/${id}`,
        {
          id,
          brand_name,
        }
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async createBrand(brand_name: string): Promise<BrandResponseDefault> {
    try {
      const response = await apiClient.post<BrandResponseDefault>(`brands`, {
        brand_name,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteBrand(id: string | number): Promise<MessageApi> {
    try {
      const response = await apiClient.delete<MessageApi>(`brands/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiProductService = new ProductBrandService();
