const KEY = "cart_items_v1";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

export function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
  catch { return []; }
}

export function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
}
