export interface DefaultReturn {
  id: number;
  monitoring_type_name: string;
  updated_at: string;
  created_at: string;
}

interface MonitoringType {
  id: number;
  monitoring_type_name: string;
  created_at: string;
  updated_at: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationResponse {
  current_page: number;
  data: MonitoringType[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface DefaultMessage {
  message: string;
}

export interface IProductMonitoringTypeService {
  fetchItems(): Promise<PaginationResponse>;
  createTypes(monitoring_type_name: string): Promise<DefaultReturn>;
  fetchItemTypesID(id: string | number): Promise<DefaultReturn>;
  updateItemTypesID(
    id: number | string,
    monitoring_type_name: string
  ): Promise<DefaultReturn>;
  deleteItemTypesID(id: number | string): Promise<DefaultMessage>;
}
