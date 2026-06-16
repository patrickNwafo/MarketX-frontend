"use client";

import { BarChart3, Bell, ShieldCheck, TrendingUp } from "lucide-react";
import { useActivityFeed } from "@/context/ActivityFeedContext";

const cardStyles = [
  {
    label: "Total events",
    icon: BarChart3,
    valueKey: "total",
  },
  {
    label: "Unread items",
    icon: Bell,
    valueKey: "unread",
  },
  {
    label: "Listing actions",
    icon: TrendingUp,
    valueKey: "listing",
  },
  {
    label: "Security events",
    icon: ShieldCheck,
    valueKey: "security",
  },
] as const;

export default function ActivitySummaryCards() {
  const { activities, unreadCount } = useActivityFeed();

  const totals = {
    total: activities.length,
    unread: unreadCount,
    listing: activities.filter((item) => item.type === "listing").length,
    security: activities.filter((item) => item.type === "security").length,
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cardStyles.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                  {card.label}
                </p>
                <p className="mt-3 text-3xl font-black text-gray-900">
                  {totals[card.valueKey]}
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600">
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
