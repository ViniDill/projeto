import { PaginatedResponseDefault } from "../InterfaceDedefault";
export interface Item {
  id?: number;
  product_id: number;
  quantity: number;
  solar_kit_id: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  product_name: string;
  brand: string;
  type: string;
  microInverter: number;
  price: number | null;
}

export interface SolarKit {
  id?: string | number;
  title: string;
  inverter_power: number;
  solar_kit_power: number;
  system_type: string;
  nationality: string;
  labor_cost: number;
  project_cost: number;
  installation_days: number;
  grounding_cost: number;
  accessories_cost: number;
  electrical_grid_cost: number;
  winch_rate_hour: number;
  expansion: number;
  observation: string;
  items: Item[];
}

export interface ResponseSolarKit extends PaginatedResponseDefault {
  data: SolarKit[];
}

export interface SolarKitProps {
  createSolarKit(value: SolarKit): Promise<SolarKit>;
  getSolarKit(query?: string): Promise<ResponseSolarKit>;
  getSolarKitById(id: number | string): Promise<SolarKit>;
  updateSolarKit(id: number | string, value: SolarKit): Promise<SolarKit>;
  deleteSolarKit(id: number | string): Promise<SolarKit>;
}
