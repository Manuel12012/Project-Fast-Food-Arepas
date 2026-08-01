export interface Product {
  id: number;
  categoriaId: string;
  nombre: string;
  descripcion: string | null;
  precio: number;
  combo: number | null;
  unidadCombo: string | null;
  image: string | null;
  category_id: number;
  category: Category
}

export interface Category {
  id: number;
  nombre: string;
  image: string | null;
}

export interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  name_snapshot: string;
  price_snapshot: string;
  quantity: number;
  subtotal: string;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: number;
  email: string;
  phone: string;
  name: string;
  delivery: string;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  total: string;
  status: string;
  scheduled_for: string | null;
  created_at: string;
  updated_at: string;
  distance_km: number | null;
  free_delivery: number;
  delivery_cost: string;
  items: OrderItem[];
}
