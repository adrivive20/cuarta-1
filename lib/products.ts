export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "Productos" | "Combos" | "Bebidas";
};

export const PRODUCTS: Product[] = [
  // Productos
  { id: "p1", name: "Waffle con miel de maple", price: 2000, image: "/waffle.jfif", category: "Productos" },
  { id: "p2", name: "Waffle con frutas",      price: 2500, image: "/waffle-frutas.jfif",    category: "Productos" },
  { id: "p3", name: "Waffle con nutella",     price: 3000, image: "/waffle-nutella.jfif",  category: "Productos" },

  // Combos
  { id: "c1", name: "Combo Waffle Completo",     price: 5000, image: "/waffle-combo-1.png",    category: "Combos" },
  { id: "c2", name: "Combo Waffle con Toppings",      price: 4000, image: "/waffle-combo-2.png",    category: "Combos" },
  { id: "c3", name: "Combo Waffle con Frutas",   price: 4000, image: "/waffle-combo-3.png",    category: "Combos" },

  // Bebidas
  { id: "b1", name: "Café Espresso",            price: 2000, image: "/cafe.jfif",  category: "Bebidas" },
  { id: "b2", name: "Jugo de naranja",                price: 1500, image: "/jugo.jfif",      category: "Bebidas" },
  { id: "b3", name: "Chocolate",           price: 2500, image: "/chocolate.jfif",     category: "Bebidas" },
];