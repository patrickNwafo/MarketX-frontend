import DashboardSubnav from "@/components/dashboard/DashboardSubnav";
import StatCard from "@/components/dashboard/StatCard";
import MultiStepForm from "@/components/selling/MultiStepForm";

export default function SellingDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-14">
        <DashboardSubnav title="My Account" />

        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <StatCard label="Active Listings" value="3" />
            <StatCard label="Total Sales" value="$2,840" accent />
            <StatCard label="Pending Payout" value="$420" />
            <StatCard label="Seller Rating" value="4.8 ★" />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-base font-black text-gray-900 mb-1">List a New Item</h2>
            <p className="text-xs text-gray-500 mb-6">
              Configure your item details, escrow terms, and pricing.
            </p>
            <MultiStepForm />
          </div>
        </div>
      </div>
    </div>
  );
}
