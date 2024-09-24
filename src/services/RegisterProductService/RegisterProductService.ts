import apiClient from "../ApiClient";
import {
  RegisterProductProps,
  PaginationResponse,
  DeleteProps,
  FechProductProps,
  ReponseRegister,
} from "./IRegisterProductService";

class RegisterProductService implements RegisterProductProps {
  async fetchItems(query?: string): Promise<PaginationResponse> {
    try {
      const response = await apiClient.get<PaginationResponse>(
        query ? `products${query}` : "products"
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async fetchItemsById(id: number | string): Promise<FechProductProps> {
    try {
      const response = await apiClient.get<FechProductProps>(`products/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteProduct(id: number | string): Promise<DeleteProps> {
    try {
      const response = await apiClient.delete<DeleteProps>(`products/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async registerProduct(productData: FormData): Promise<ReponseRegister> {
    try {
      const response = await apiClient.post<ReponseRegister>(
        `products`,
        productData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateProduct(
    id: number | string,
    productData: FormData
  ): Promise<ReponseRegister> {
    try {
      const data: { [key: string]: any } = {};
      productData.forEach((value, key) => {
        data[key] = value;
      });
      const response = await apiClient.put<ReponseRegister>(
        `products/${id}`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async registerPrice(id: string | number, price: number): Promise<void> {
    try {
      const response = await apiClient.put<void>(`product-price-update/${id}`, {
        price: price,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiRegisterProductService = new RegisterProductService();
