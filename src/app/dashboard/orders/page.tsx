"use client";

import { useState, useMemo } from "react";
import DashboardSubnav from "@/components/dashboard/DashboardSubnav";
import StatCard from "@/components/dashboard/StatCard";
import { mockTransaction, EscrowTransaction } from "@/lib/escrowData";
import { OrderFilters, filterOrders } from "@/lib/orderFilters";

const STATUS_STYLES: Record<string, string> = {
  in_escrow: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  funded: "bg-blue-50 text-blue-700 border border-blue-200",
  in_transit: "bg-amber-50 text-amber-700 border border-amber-200",
  released: "bg-gray-100 text-gray-600 border border-gray-200",
  disputed: "bg-red-50 text-red-700 border border-red-200",
};

function OrderRow({ order }: { order: EscrowTransaction }) {
  const statusKey = order.currentState.toLowerCase().replace(/\s+/g, "_");

  return (
    <div className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-gray-100 shrink-0 flex items-center justify-center">
        <span className="text-lg">📦</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-gray-900 truncate">
          {order.assetName}
        </p>
        <p className="text-xs text-gray-500">
          {order.seller.name} ·{" "}
          {new Date(order.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-black text-gray-900">
          {order.priceXLM.toLocaleString()} XLM
        </p>
        <p className="text-[11px] text-gray-400">
          ≈ ${Math.round(order.priceXLM * 0.206)}
        </p>
      </div>
      <span
        className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
          STATUS_STYLES[statusKey] ?? STATUS_STYLES["in_escrow"]
        }`}
      >
        {statusKey.replace(/_/g, " ")}
      </span>
    </div>
  );
}

export default function OrdersPage() {
  const [filters, setFilters] = useState<OrderFilters>({
    category: "all",
    state: "all",
    sortBy: "newest",
    searchQuery: "",
  });

  const allOrders = useMemo(() => [mockTransaction], []);
  const filteredOrders = useMemo(
    () => filterOrders(allOrders, filters),
    [allOrders, filters]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-14">
        <DashboardSubnav title="My Account" />

        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <StatCard label="Total Orders" value="24" />
            <StatCard label="In Escrow" value="$1,240" sub="≈ 6,012 XLM" accent />
            <StatCard label="Completed" value="18" />
            <StatCard label="Wallet Balance" value="4,200 XLM" sub="≈ $866" />
          </div>

          {/* Orders table */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="text-sm font-black text-gray-900">Order History</h2>
              <input
                type="search"
                placeholder="Search orders…"
                value={filters.searchQuery}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, searchQuery: e.target.value }))
                }
                className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 placeholder:text-gray-400 outline-none focus:border-emerald-400 w-48"
              />
            </div>

            {filteredOrders.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-sm text-gray-400">No orders match your filters.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {filteredOrders.map((order) => (
                  <OrderRow key={order.id} order={order} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
