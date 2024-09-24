interface monitoring_typeProps {
  id: number;
  monitoring_type_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

interface product_typeProps {
  id: number;
  product_type_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface DeleteProps {
  success: string;
}

export interface FechProductProps {
  id: number;
  product_type_id: number;
  product_name: string;
  description: string;
  brand_id: number;
  category_id: number;
  phase_type_id: number;
  monitoring_type_id: number;
  height: number;
  width: number;
  length: number;
  weight: number;
  microInverter: number;
  image_path: string;
  additional_information: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  monitoring_type: monitoring_typeProps;
  phase_value: string;
  potency: string | null;
  category: CategoryProps;
  brand: BrandsProps;
  product_type: ProductTypeProps;
  price?: number | null;
}

interface ProductTypeProps {
  id: number;
  product_type_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

interface BrandsProps {
  id: number;
  brand_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

interface CategoryProps {
  id: number;
  category_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationResponse {
  current_page: number;
  data: FechProductProps[];
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

export interface ReponseRegister {
  product_type_id: number;
  product_name: string;
  description: string;
  brand_id: number;
  category_id: number;
  phase_type_id?: number;
  phase_value: string;
  potency: string;
  monitoring_type_id: number;
  additional_information: string;
  height: string;
  width: string;
  length: string;
  weight: string;
  microInverter: number;
  updated_at: Date;
  created_at: Date;
  id: number;
  price?: number | null;
}

export interface RegisterProductProps {
  fetchItems: () => Promise<PaginationResponse>;
  fetchItemsById: (id: number | string) => Promise<FechProductProps>;
  deleteProduct: (id: number | string) => Promise<DeleteProps>;
  registerProduct: (productData: FormData) => Promise<ReponseRegister>;
  updateProduct: (
    id: number | string,
    productData: FormData
  ) => Promise<ReponseRegister>;
  registerPrice(id: number | string, price: number): Promise<void>;
}
