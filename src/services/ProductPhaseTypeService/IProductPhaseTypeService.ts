export interface PhaseTypeProps {
  id: number;
  phase_type_name: string;
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
  data: PhaseTypeProps[];
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

export interface IProductPhaseTypeService {
  fetchItems(): Promise<PaginationResponse>;
  createPhase(phase_type_name: string): Promise<PhaseTypeProps>;
  fetchItemPhasesID(id: string | number): Promise<PhaseTypeProps>;
  updateItemPhasesID(
    id: number | string,
    phase_type_name: string
  ): Promise<PhaseTypeProps>;
  deleteItemPhasesID(id: number | string): Promise<DefaultMessage>;
}
