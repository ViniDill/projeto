export interface IFetchBrand {
  id: number;
  brand_name: String;
}

export interface Brand {
  id: number;
  brand_name: string;
  created_at: string;
  updated_at: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationBrandResponse {
  current_page: number;
  data: Brand[];
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

export interface BrandResponseDefault {
  id: number;
  brand_name: string;
  created_at: string;
  updated_at: string;
}

export interface MessageApi {
  message: string;
}

export interface IProductBrandService {
  fetchBrand(): Promise<PaginationBrandResponse>;
  fetchBrandById(id: string | number): Promise<BrandResponseDefault>;
  updateBrandById(
    id: string | number,
    brand_name: string
  ): Promise<BrandResponseDefault>;
  createBrand(brand_name: string): Promise<BrandResponseDefault>;
  deleteBrand(id: string | number): Promise<MessageApi>;
}
