"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { items } = useCart();
  const count = items.reduce((acc, i) => acc + i.qty, 0);

  return (
    <header className="bg-white/90 backdrop-blur border-b border-brand-sage/40">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Coloca /public/logo.png si tenés el archivo */}
          <Image src="/logo.png" alt="My Sweet Time" width={150} height={150} priority />
          <span className="font-bold text-lg text-brand-olive">My Sweet Time</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-brand-olive hover:text-brand-mocha transition">Productos</Link>
          <Link href="/carrito" className="relative text-brand-olive hover:text-brand-mocha transition">
            Carrito
            <span className="ml-2 inline-flex items-center justify-center text-sm px-2 py-0.5 rounded-full bg-brand-olive text-white">
              {count}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
