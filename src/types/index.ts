export interface Product {
  id: number;
  categoriaId: string;
  nombre: string;
  emoji: string;
  descripcion: string | null;
  precio: number;
  combo: number | null;
  unidadCombo: string | null;
  image: string;
}

export interface Category {
  id: string;
  nombre: string;
}

export interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}