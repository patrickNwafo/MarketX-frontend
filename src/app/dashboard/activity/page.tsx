"use client";

import ActivityFeedPanel from "@/components/activity/ActivityFeedPanel";
import ActivitySummaryCards from "@/components/activity/ActivitySummaryCards";

export default function ActivityPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 pb-20 pt-14">
      <div className="mx-auto max-w-6xl py-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-700">
            User Dashboard
          </div>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            Activity Feed
          </h1>
          <p className="mt-3 max-w-2xl text-gray-500">
            See the latest marketplace actions, profile changes, and security events in a single timeline.
          </p>
        </div>

        <div className="space-y-8">
          <ActivitySummaryCards />
          <ActivityFeedPanel />
        </div>
      </div>
    </main>
  );
}
