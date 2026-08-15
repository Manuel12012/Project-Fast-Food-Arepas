export interface Product {
  id: number;
  categoriaId: string;
  nombre: string;
  descripcion: string | null;
  precio: number;
  combo: number | null;
  unidadCombo: string | null;
  image: string;
  category_id: number;
  category: Category;
  offer_id: number,
  offer: Offer
}

export interface Category {
  id: number;
  nombre: string;
  image: string;
}


export interface Offer {
  id: number;
  inicio: Date;
  fin: Date;
  descuento: number;
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
