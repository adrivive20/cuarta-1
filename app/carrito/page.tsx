"use client";
import { useCart } from "@/context/CartContext";

export default function CarritoPage() {
  const { items, inc, dec, removeItem, clear, total } = useCart();

  if (!items.length) {
    return <p className="mt-6">Tu carrito está vacío. Volvé a la tienda para agregar productos.</p>;
  }

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Carrito</h1>

      <div className="bg-white rounded-2xl shadow p-4 divide-y">
        {items.map(item => (
          <div key={item.id} className="py-4 flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-24 h-16 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">₡{item.price.toLocaleString("es-CR")}</p>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => dec(item.id)} className="px-3 py-1 rounded bg-gray-200">-</button>
              <span className="w-6 text-center">{item.qty}</span>
              <button onClick={() => inc(item.id)} className="px-3 py-1 rounded bg-gray-200">+</button>
            </div>

            <button onClick={() => removeItem(item.id)} className="text-red-600 hover:underline">Quitar</button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button onClick={clear} className="text-sm hover:underline">Vaciar carrito</button>
        <div className="text-lg font-semibold">Total: ₡{total.toLocaleString("es-CR")}</div>
      </div>

      <button
        className="rounded-xl px-4 py-2 bg-brand-olive text-white hover:bg-brand-sage transition"
        onClick={() => {
          alert("Compra simulada con éxito. ¡Gracias por elegir My Sweet Time! ☕");
          clear(); // 🧹 vacía el carrito después de la alerta
        }}
      >
        Finalizar compra
      </button>

    </section>
  );
}
