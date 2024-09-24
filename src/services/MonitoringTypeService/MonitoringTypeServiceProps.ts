export interface MonitoringValue {
  id: number;
  monitoring_type_name: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationResponse {
  current_page: number;
  data: MonitoringValue[];
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
  fetchMonitoringType(): Promise<PaginationResponse>;
  fetchMonitoringTypeById(id: string | number): Promise<MonitoringValue>;
  createMonitoringType(fixation_type_name: string): Promise<MonitoringValue>;
  updateMonitoringType(
    id: string | number,
    fixation_type_name: string
  ): Promise<MonitoringValue>;
  deleteMonitoringType(id: string | number): Promise<void>;
}
