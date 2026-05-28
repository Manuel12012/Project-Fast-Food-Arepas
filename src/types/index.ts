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


export interface Categorie {
  id: string,
  nombre: string
}
