export interface FixingValue {
  id: number;
  fixation_type_name: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationResponse {
  current_page: number;
  data: FixingValue[];
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

export interface TypeOfFixingprops {
  fetchTypeOfFixing(): Promise<PaginationResponse>;
  fetchTypeOfFixingQuery(query: string): Promise<PaginationResponse>;
  fetchTypeOfFixingById(id: string | number): Promise<FixingValue>;
  createTypeOfFixing(fixation_type_name: string): Promise<FixingValue>;
  updateTypeOfFixing(
    id: string | number,
    fixation_type_name: string
  ): Promise<FixingValue>;
  deleteTypeOfFixing(id: string | number): Promise<void>;
}
