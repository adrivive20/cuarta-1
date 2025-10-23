export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "Productos" | "Combos" | "Bebidas";
};

export const PRODUCTS: Product[] = [
  // Productos
  { id: "p1", name: "Croissant", price: 1900, image: "https://picsum.photos/seed/croissant/640/400", category: "Productos" },
  { id: "p2", name: "Queque de Zanahoria",      price: 2200, image: "https://picsum.photos/seed/queque/640/400",    category: "Productos" },
  { id: "p3", name: "Galletas Artesanales",     price: 1200, image: "https://picsum.photos/seed/galletas/640/400",  category: "Productos" },

  // Combos
  { id: "c1", name: "Combo Desayuno Dulce",     price: 4800, image: "https://picsum.photos/seed/combo1/640/400",    category: "Combos" },
  { id: "c2", name: "Combo Café + Queque",      price: 4300, image: "https://picsum.photos/seed/combo2/640/400",    category: "Combos" },
  { id: "c3", name: "Combo Tostada Francesa",   price: 5200, image: "https://picsum.photos/seed/combo3/640/400",    category: "Combos" },

  // Bebidas
  { id: "b1", name: "Café Espresso",            price: 2500, image: "https://picsum.photos/seed/espresso/640/400",  category: "Bebidas" },
  { id: "b2", name: "Capuccino",                price: 3000, image: "https://picsum.photos/seed/capu/640/400",      category: "Bebidas" },
  { id: "b3", name: "Latte Vainilla",           price: 3200, image: "https://picsum.photos/seed/latte/640/400",     category: "Bebidas" },
];
