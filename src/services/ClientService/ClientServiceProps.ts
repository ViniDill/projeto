export interface ResponseGetClient {
  current_page: number;
  data: fullInformationProps[];
  from: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface fullInformationProps {
  id: number;
  client_type: string;
  document: "cpf" | "cnpj" | string;
  full_name: string;
  email: string;
  phone: string;
  birth_date: string;
  state_registration: string;
  trade_name: string;
  addresses: ClientAddress[];
}

export interface ClientAddress {
  id: number;
  name: string;
  zipcode: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
  complement: string;
  number: number;
  additional_information: string;
  main: boolean;
}

export interface RegistrationfullInformationClientProps {
  id?: string | number;
  client_type: string;
  document: "cpf" | "cnpj" | string;
  full_name?: string;
  email: string;
  phone: string;
  birth_date?: string;
  state_registration?: string;
  trade_name?: string;
  addresses?: ClientAddress[];
  stateIncrition?: string;
  socialRazon?: string;
}

export interface ClientProps {
  createClient(
    value: RegistrationfullInformationClientProps
  ): Promise<fullInformationProps>;
  getClients(value?: string): Promise<ResponseGetClient>;
  getClientsById(
    id: string | number
  ): Promise<RegistrationfullInformationClientProps>;
  updateClientById(
    id: string | number,
    value: RegistrationfullInformationClientProps
  ): Promise<fullInformationProps>;
}
