"use client";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col border border-brand-sage/30">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl aspect-square object-cover mb-3 w-full"
      />
      <h3 className="font-semibold text-lg text-brand-olive">{product.name}</h3>
      <p className="text-sm text-brand-olive/80 mb-4">₡{product.price.toLocaleString("es-CR")}</p>
      <button
        onClick={() => addItem(product)}
        className="mt-auto rounded-xl px-4 py-2 bg-brand-olive text-white hover:bg-brand-sage transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
