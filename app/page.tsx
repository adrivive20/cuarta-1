import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

// 🔹 Obtener las categorías únicas dinámicamente
const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));

export default function Home() {
  return (
    <section className="space-y-12">
      {categories.map(category => (
        <div key={category}>
          {/* 🔸 Título de categoría */}
          <h2 className="text-2xl font-bold text-brand-olive mb-3">{category}</h2>

          {/* 🔸 Línea separadora */}
          <div className="h-0.5 bg-brand-olive mb-6"></div>

          {/* 🔸 Productos filtrados por categoría */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PRODUCTS.filter(p => p.category === category).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}