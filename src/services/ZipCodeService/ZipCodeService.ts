import apiClient from "../ApiClient";
import { ZipCodeDetailsProps, IZipCodeService } from "./IZipCodeService";

class ZipCodeService implements IZipCodeService  {
  async getZipCodeDetails(zipcode: string): Promise<ZipCodeDetailsProps> {
    try {
      const response = await apiClient.get<ZipCodeDetailsProps>(`zipcode/${zipcode}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiZipCodeService = new ZipCodeService();
