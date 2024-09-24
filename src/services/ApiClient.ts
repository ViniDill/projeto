import axios from "axios";
import useAuthStore from "../Store/authStore";

// Crie uma função para obter o token do estado Zustand
const getToken = () => {
  const token = useAuthStore.getState().token;
  return token ? `Bearer ${token}` : "";
};

// Crie uma instância do axios
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Adicione um interceptor para todas as requisições
apiClient.interceptors.request.use(
  (config) => {
    // Obtenha o token e adicione ao cabeçalho Authorization
    config.headers.Authorization = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      useAuthStore.getState().logOut();
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

export default apiClient;
