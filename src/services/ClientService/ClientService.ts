import apiClient from "../ApiClient";

import {
  ClientAddress,
  ClientProps,
  RegistrationfullInformationClientProps,
  fullInformationProps,
  ResponseGetClient,
} from "./ClientServiceProps";

class clientService implements ClientProps {
  async createClient(
    value: RegistrationfullInformationClientProps
  ): Promise<fullInformationProps> {
    try {
      const response = await apiClient.post("clients", { ...value });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getClients(value?: string | undefined): Promise<ResponseGetClient> {
    try {
      const response = await apiClient.get(
        value ? `clients${value}` : "clients"
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getClientsById(
    id: string | number
  ): Promise<RegistrationfullInformationClientProps> {
    try {
      const response = await apiClient.get(`clients/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateClientById(
    id: string | number,
    value: RegistrationfullInformationClientProps
  ): Promise<fullInformationProps> {
    try {
      const response = await apiClient.put(`clients/${id}`, { ...value });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiClientService = new clientService();
