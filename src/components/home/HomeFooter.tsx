import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-sm font-black text-gray-900">MarketXpress</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              The safest way to trade anything, peer-to-peer. Every purchase secured by Stellar smart contract escrow.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-[10px] bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">
                ⚡ Stellar Network
              </span>
              <span className="text-[10px] bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">
                🔐 Escrow
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-black text-gray-900 mb-2">Marketplace</p>
              {["Browse All", "Flash Sale", "New Arrivals", "Top Sellers"].map((l) => (
                <Link key={l} href="/" className="block text-xs text-gray-500 hover:text-emerald-600 py-0.5">
                  {l}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-black text-gray-900 mb-2">Account</p>
              {(
                [
                  ["My Orders", "/dashboard/orders"],
                  ["Sell on MX", "/dashboard/selling"],
                  ["Wallet", "/dashboard/wallet"],
                  ["Help", "/help"],
                ] as [string, string][]
              ).map(([label, href]) => (
                <Link key={href} href={href} className="block text-xs text-gray-500 hover:text-emerald-600 py-0.5">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-black text-gray-900 mb-2">Connect</p>
            {["Twitter / X", "Telegram", "Discord"].map((s) => (
              <p key={s} className="text-xs text-gray-500 py-0.5">{s}</p>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 text-center">
          <p className="text-[11px] text-gray-400">© 2026 MarketXpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
