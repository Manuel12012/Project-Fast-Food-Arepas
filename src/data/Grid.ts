import type { Product } from "@/types";

const products: Product[] = [
  // AREPAS

  {
    id: 1,
    categoriaId: "arepas",
    nombre: "La Reina Pepiada",
    emoji: "🍗",
    descripcion: "Poulet effiloché + mayonnaise + avocat + coriandre",
    precio: 10,
    combo: 48,
    unidadCombo: "6 unid.",
    image: "/products/Arepa1.png",
  },

  {
    id: 2,
    categoriaId: "arepas",
    nombre: "La Pelúa",
    emoji: "🥩",
    descripcion: "Viande effilochée + légumes + fromage blanc ou jaune râpé",
    precio: 10,
    combo: 48,
    unidadCombo: "6 unid.",
    image: "/products/Arepa2.png",
  },
  {
    id: 3,
    categoriaId: "arepas",
    nombre: "La Dominó",
    emoji: "🥩",
    descripcion: "Haricots noirs et + fromage blanc râpé",
    precio: 8,
    combo: 36,
    unidadCombo: "6 unid.",
    image: "/products/Arepa3.png",
  },
  {
    id: 4,
    categoriaId: "arepas",
    nombre: "La Viuda",
    emoji: "🥩",
    descripcion: "Fromage blanc, fromage jaune ou beurre",
    precio: 6,
    combo: 30,
    unidadCombo: "6 unid.",
    image: "/products/Arepa4.png",
  },
  {
    id: 5,
    categoriaId: "arepas",
    nombre: "La Pernil",
    emoji: "🥩",
    descripcion: "Porc rôti au vin",
    precio: 10,
    combo: 48,
    unidadCombo: "6 unid.",
    image: "/products/Arepa5.png",
  },
  {
    id: 6,
    categoriaId: "arepas",
    nombre: "La Catira",
    emoji: "🥩",
    descripcion: "Poulet râpé avec légumes + fromage blanc ou jaune râpé",
    precio: 10,
    combo: 48,
    unidadCombo: "6 unid.",
    image: "/products/Arepa6.png",
  },
  {
    id: 7,
    categoriaId: "arepas",
    nombre: "La de Asado negro",
    emoji: "🥩",
    descripcion: "Médaillon de viande dans sa sauce aigre-douce",
    precio: 12,
    combo: 60,
    unidadCombo: "6 unid.",
    image: "/products/Arepa7.png",
  },
  {
    id: 8,
    categoriaId: "arepas",
    nombre: "La de Pabellón Criollo",
    emoji: "🥩",
    descripcion:
      "Viande effilochée avec des légumes + haricots noirs + fromage râpé + tranches de banane frite",
    precio: 10,
    combo: 48,
    unidadCombo: "6 unid.",
    image: "/products/Arepa8.png",
  },

  // EMPANADAS

  {
    id: 20,
    categoriaId: "empanadas",
    nombre: "Empanadas",
    emoji: "🥟",
    descripcion: "à la farine de blé – cuites au four / à la farine de maïs – frites",
    precio: 4.5,
    combo: 24,
    unidadCombo: "6 unid. + Salsa Tártara",
    image: "/products/Empanada1.png",
  },

  // PASTELITOS

  {
    id: 30,
    categoriaId: "pastelitos",
    nombre: "Frits/Au four",
    emoji: "🥐",
    descripcion: "Combo de 10 unités + sauce tartare",
    precio: 20,
    combo: 35,
    unidadCombo: "Combo de 20 unités + sauce tartare à",
    image: "/products/Pastelito1.png",
  },

  // TEQUEÑOS

  {
    id: 40,
    categoriaId: "tequeños",
    nombre: "Double Fromage",
    emoji: "🧀",
    descripcion: "Combo de 8 pièces + sauce tartare",
    precio: 18,
    combo: 30,
    unidadCombo: "Combo de 20 pièces + sauce tartare a",
    image: "/products/Tequeño1.png",
  },

  // CACHITOS

  {
    id: 50,
    categoriaId: "cachitos",
    nombre: "Cachitos",
    emoji: "🥐",
    descripcion: "Jambon + bacon / jambon + mozzarella",
    precio: 2.5,
    combo: null,
    unidadCombo: null,
    image: "/products/Cachito1.png",
  },

  // PAN DE JAMON

  {
    id: 60,
    categoriaId: "pan-de-jamon",
    nombre: "Pan de Jamón",
    emoji: "🍞",
    descripcion: "Jambon fumé, bacon, raisins secs, olives, câpres, sucre de canne",
    precio: 28,
    combo: null,
    unidadCombo: "40cm",
    image: "/products/Cachito1.png",
  },

  // NOËL

  {
    id: 70,
    categoriaId: "noel",
    nombre: "Le pain au jambon vénézuélien (de Noël) (40cm)",
    emoji: "🍃",
    descripcion: "Jambon fumé, bacon -optionnel-, raisins secs, olives, câpres, sucre de canne",
    precio: 28,
    combo: null,
    unidadCombo: null,
    image: "/products/Noel1.png",
  },
  {
    id: 71,
    categoriaId: "noel",
    nombre: "Les hallacas vénézuéliennes  (Disponibles toute l'année sur commande)",
    emoji: "🍃",
    descripcion: "Poulet / Poulet et Porc/  Végétariennes",
    precio: 10,
    combo: null,
    unidadCombo: null,
    image: "/products/Noel2.png",
  },

  // SAUCES

  {
    id: 80,
    categoriaId: "sauces",
    nombre: "Salsa tártara",
    emoji: "🥫",
    descripcion: "Salsa tártara",
    precio: 3,
    combo: null,
    unidadCombo: null,
    image: "/products/Sauce1.png",
  },
  {
    id: 81,
    categoriaId: "sauces",
    nombre: "Guasacaca",
    emoji: "🥫",
    descripcion: "Guasacaca",
    precio: 3,
    combo: null,
    unidadCombo: null,
    image: "/products/Sauce2.png",
  },

  // DESSERTS

  {
    id: 90,
    categoriaId: "desserts",
    nombre: "Gâteau 3 Laits",
    emoji: "🍰",
    descripcion: "1Kg / 4Kg",
    precio: 45,
    combo: 85,
    unidadCombo: "4Kg",
    image: "/products/Dessert1.png",
  },
  {
    id: 91,
    categoriaId: "desserts",
    nombre: "TARTE AU CITRON OU FRUIT DE LA PASSION ",
    emoji: "🍰",
    descripcion: null,
    precio: 35,
    combo: null,
    unidadCombo: null,
    image: "/products/Dessert2.png",
  },
  {
    id: 92,
    categoriaId: "desserts",
    nombre: "GÂTEAU AUX CAROTTES",
    emoji: "🍰",
    descripcion: "1Kg / 2Kg",
    precio: 45,
    combo: null,
    unidadCombo: null,
    image: "/products/Dessert3.png",
  },
  {
    id: 93,
    categoriaId: "desserts",
    nombre: "GÂTEAU NOIR",
    emoji: "🍰",
    descripcion: "1Kg / 2Kg",
    precio: 49,
    combo: null,
    unidadCombo: null,
    image: "/products/Dessert4.png",
  },
  {
    id: 94,
    categoriaId: "desserts",
    nombre: "FLAN",
    emoji: "🍰",
    descripcion: "1Kg",
    precio: 35,
    combo: null,
    unidadCombo: null,
    image: "/products/Dessert5.png",
  },
  {
    id: 95,
    categoriaId: "desserts",
    nombre: "CHOCOFLAN",
    emoji: "🍰",
    descripcion: "1Kg",
    precio: 45,
    combo: null,
    unidadCombo: null,
    image: "/products/Dessert6.png",
  },
  {
    id: 96,
    categoriaId: "desserts",
    nombre: "BISCUIT ROULÉ (pionono)",
    emoji: "🍰",
    descripcion: "pionono",
    precio: 30,
    combo: null,
    unidadCombo: null,
    image: "/products/Dessert7.png",
  },

  // MINI BOUCHEES

  {
    id: 100,
    categoriaId: "mini-bouchees",
    nombre: "100 pièces en version mini",
    emoji: "🍢",
    descripcion: "gâteaux, tequeños, empanadas, arepas",
    precio: 120,
    combo: null,
    unidadCombo: null,
    image: "/products/MiniVouchee1.png",
  },

  // MINI DESSERTS

  {
    id: 105,
    categoriaId: "mini-desserts",
    nombre: "En version mini",
    emoji: "🍢",
    descripcion:
      "3 laits, tarte au citron ou fruit de la passion, cheesecake à la fraise, gâteau froid à la pêche, tartelettes à la crème pâtissière et aux fruits, flan, chocoflan",
    precio: 120,
    combo: null,
    unidadCombo: null,
    image: "/products/MiniDessert1.png",
  },

  // MENU

  {
    id: 110,
    categoriaId: "menu",
    nombre: "Pabellon Criollo",
    emoji: "🍽️",
    descripcion:
      "Viande effilochée avec des légumes + haricots noirs + riz + fromage râpé + tranches de banane frites",
    precio: 18,
    combo: null,
    unidadCombo: null,
    image: "/products/Menu1.png",
  },
  {
    id: 111,
    categoriaId: "menu",
    nombre: "Asado Noir",
    emoji: "🍽️",
    descripcion: "viande mijotée aigre-douce, riz et tranches de banane plantain",
    precio: 18,
    combo: null,
    unidadCombo: null,
    image: "/products/Menu2.png",
  },
];

export default products;
