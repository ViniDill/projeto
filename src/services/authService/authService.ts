import apiClient from "../ApiClient";
import {
  ChangePassProps,
  LogInServiceProps,
  userDetailsProps,
} from "./authServiceProps";
class logInService implements LogInServiceProps {
  async logIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<userDetailsProps> {
    try {
      const response = await apiClient.post("login", { email, password });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async changePassLogged(values: ChangePassProps): Promise<void> {
    try {
      const response = await apiClient.post("change-password", { ...values });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiLogInService = new logInService();
