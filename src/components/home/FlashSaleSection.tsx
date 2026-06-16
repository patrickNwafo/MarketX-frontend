"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/marketplace/ProductCard";
import { mockProducts } from "@/lib/mockData";

function useCountdown(targetSeconds: number) {
  const [seconds, setSeconds] = useState(targetSeconds);
  useEffect(() => {
    const t = setInterval(
      () => setSeconds((s) => (s > 0 ? s - 1 : targetSeconds)),
      1000
    );
    return () => clearInterval(t);
  }, [targetSeconds]);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return { h, m, s };
}

export default function FlashSaleSection() {
  const { h, m, s } = useCountdown(4 * 3600 + 23 * 60 + 11);
  const flashProducts = mockProducts.filter((p) => p.badge === "flash").slice(0, 5);

  return (
    <section>
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-black text-gray-900">⚡ Flash Sale</h2>
          <span className="text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-full animate-pulse">
            LIVE
          </span>
          <div className="flex items-center gap-1">
            {[h, m, s].map((unit, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="bg-gray-900 text-white text-xs font-black px-1.5 py-0.5 rounded">
                  {unit}
                </span>
                {i < 2 && <span className="text-gray-400 text-xs font-bold">:</span>}
              </span>
            ))}
          </div>
        </div>
        <Link href="/" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">
          View All →
        </Link>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {flashProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
