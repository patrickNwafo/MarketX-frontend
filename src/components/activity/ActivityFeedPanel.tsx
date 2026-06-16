"use client";

import Link from "next/link";
import {
  Clock3,
  HeartPulse,
  Package,
  ShieldCheck,
  Settings2,
  BadgeCheck,
  type LucideIcon,
  Sparkles,
  Bell,
} from "lucide-react";
import { useActivityFeed } from "@/context/ActivityFeedContext";
import { cn } from "@/lib/utils";
import type { ActivityItem, ActivitySeverity, ActivityType } from "@/lib/activityFeed";

const ICONS: Record<ActivityType, LucideIcon> = {
  listing: Package,
  order: BadgeCheck,
  profile: Settings2,
  payment: Sparkles,
  notification: Bell,
  security: ShieldCheck,
};

function severityTone(severity: ActivitySeverity) {
  switch (severity) {
    case "success":
      return "border-emerald-200 bg-emerald-50 text-emerald-600";
    case "warning":
      return "border-amber-200 bg-amber-50 text-amber-600";
    default:
      return "border-blue-200 bg-blue-50 text-blue-600";
  }
}

function timeAgo(timestamp: string) {
  const diff = Date.now() - new Date(timestamp).getTime();
  const minutes = Math.max(1, Math.floor(diff / 60000));
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function ActivityFeedPanel({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { activities, unreadCount, markAllAsRead, clearActivities } = useActivityFeed();

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-700">
            <HeartPulse className="h-3.5 w-3.5" />
            Activity Feed
          </div>
          <h2 className="mt-3 text-xl font-black tracking-tight text-gray-900 md:text-2xl">
            Recent user activity
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-500">
            Keep track of listings, order updates, profile changes, and security events in one place.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Unread
            </p>
            <p className="mt-1 text-xl font-black text-gray-900">{unreadCount}</p>
          </div>
          <button
            type="button"
            onClick={markAllAsRead}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Mark all read
          </button>
          <button
            type="button"
            onClick={clearActivities}
            className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold text-gray-500 transition-colors hover:bg-gray-100"
          >
            Clear feed
          </button>
        </div>
      </div>

      <div className={cn("space-y-3", compact && "space-y-2")}>
        {activities.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 py-12 text-center">
            <p className="text-sm font-medium text-gray-400">
              No recent activity yet. Actions you take across the app will appear here.
            </p>
          </div>
        ) : (
          activities.map((activity: ActivityItem) => {
            const Icon = ICONS[activity.type];
            return (
              <article
                key={activity.id}
                className={cn(
                  "group flex gap-4 rounded-xl border p-4 transition-all hover:border-gray-300 hover:bg-gray-50",
                  activity.isRead ? "border-gray-200 bg-white" : "border-blue-200 bg-blue-50",
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                    severityTone(activity.severity),
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{activity.title}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                        {activity.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                      <Clock3 className="h-3.5 w-3.5" />
                      {timeAgo(activity.timestamp)}
                    </div>
                  </div>

                  {activity.href ? (
                    <Link
                      href={activity.href}
                      className="mt-2 inline-flex text-xs font-bold text-emerald-600 transition-colors hover:text-emerald-700"
                    >
                      View related page
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
