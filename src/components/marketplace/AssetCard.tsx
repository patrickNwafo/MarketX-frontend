"use client";

import { motion } from "framer-motion";
import { Package, Image as ImageIcon, Code, Briefcase, Camera, Clock, Star } from "lucide-react";
import { MockAsset } from "@/lib/mockData";
import { ScrollReveal } from "../animations/ScrollReveal";
import { cn } from "@/lib/utils";

const IconMap = {
  Package,
  Image: ImageIcon,
  Code,
  Briefcase,
  Camera,
};

export default function AssetCard({ asset, delay = 0 }: { asset: MockAsset; delay?: number }) {
  const Icon = IconMap[asset.imageFallbackIcon] || Package;
  const titleId = `asset-card-title-${asset.id}`;
  const descriptionId = `asset-card-desc-${asset.id}`;

  return (
    <ScrollReveal delay={delay}>
      <article
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="group relative rounded-2xl bg-white border border-gray-200 overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
      >
        <div className="h-48 bg-gray-100 relative overflow-hidden shrink-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center opacity-10"
            aria-hidden="true"
          >
            <Icon className="w-16 h-16 text-gray-400" aria-hidden="true" />
          </motion.div>
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <div className={cn(
              "px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase",
              asset.assetType === "Digital" ? "bg-purple-100 text-purple-700" :
              asset.assetType === "Physical" ? "bg-emerald-100 text-emerald-700" :
              "bg-indigo-100 text-indigo-700"
            )}>
              {asset.assetType}
            </div>
          </div>
          <div className={cn(
            "absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase z-10",
            asset.escrowStatus === "Active" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"
          )}>
            {asset.escrowStatus === "Active" ? "In Escrow" : "Completed"}
          </div>
        </div>

        <div className="p-5 grow flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
              <h3 id={titleId} className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors uppercase tracking-tight line-clamp-2">{asset.name}</h3>
              <span className="text-base font-black text-emerald-600 shrink-0">{asset.priceAmount} {asset.priceCurrency}</span>
            </div>
            <p id={descriptionId} className="sr-only">
              {asset.assetType} asset priced at {asset.priceAmount} {asset.priceCurrency}. {asset.escrowStatus === "Active" ? "In escrow." : "Escrow completed."} Seller {asset.sellerName} has a {asset.sellerRating.toFixed(1)} star rating. Listed {asset.timeStr}.
            </p>
            <div className="flex items-center gap-1 text-sm font-bold text-yellow-500 mb-4">
              <Star className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>{asset.sellerRating.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400 font-bold tracking-wide mt-auto">
            <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-100"><Clock className="w-3.5 h-3.5" aria-hidden="true" /> {asset.timeStr}</span>
            <span className="flex items-center gap-1.5">Seller: <span className="text-gray-600 uppercase">{asset.sellerName}</span></span>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
