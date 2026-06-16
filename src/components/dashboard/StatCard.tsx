import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}

export default function StatCard({ label, value, sub, accent = false }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4",
        accent ? "bg-emerald-50 border-emerald-200" : "bg-white border-gray-200"
      )}
    >
      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p
        className={cn(
          "text-2xl font-black tracking-tight",
          accent ? "text-emerald-700" : "text-gray-900"
        )}
      >
        {value}
      </p>
      {sub && (
        <p className="text-[11px] text-gray-400 mt-0.5 font-semibold">{sub}</p>
      )}
    </div>
  );
}
