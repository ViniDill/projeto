export interface CreateProps {
  title: string;
  group_a_voltage_tariff: number;
  group_b_voltage_tariff: number;
  rural_voltage_value: number;
  b_wire_value: number;
  tusd_g_value: number;
}

export interface DefaultValues {
  id: number;
  title: string;
  group_a_voltage_tariff: number;
  group_b_voltage_tariff: number;
  rural_voltage_value: number;
  b_wire_value: number;
  tusd_g_value: number;
  deleted_at: String | null;
  created_at: string;
  updated_at: string;
}

export interface PaginatedResponse {
  current_page: number;
  data: DefaultValues[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface ConcessionaireServiceProps {
  getConcessionaire(query?: string): Promise<PaginatedResponse>;
  getConcessionaireById(id: number | string): Promise<DefaultValues>;
  createConcessionaire(value: CreateProps): Promise<DefaultValues>;
  updateConcessionaire(
    id: string | number,
    value: CreateProps
  ): Promise<DefaultValues>;
  deleteConcessionaire(id: number | string): Promise<void>;
}
