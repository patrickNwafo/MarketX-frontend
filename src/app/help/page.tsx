"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  HelpCircle,
  Shield,
  Wallet,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    id: "1",
    category: "Getting Started",
    question: "What is MarketXpress?",
    answer:
      "MarketXpress is a decentralized peer-to-peer marketplace built on the Stellar Network. It uses Soroban Smart Contracts to provide secure escrow services, ensuring safe transactions between buyers and sellers without intermediaries.",
  },
  {
    id: "2",
    category: "Getting Started",
    question: "How do I connect my wallet?",
    answer:
      "Install the Freighter Wallet browser extension, then click the 'Connect Wallet' button in the top navigation. Approve the connection request in Freighter, and you'll be ready to start trading.",
  },
  {
    id: "3",
    category: "Escrow",
    question: "How does the escrow system work?",
    answer:
      "When a buyer purchases an item, funds are locked in a Soroban smart contract. The seller ships the item and submits proof of delivery. Once the buyer confirms receipt, funds are automatically released to the seller. If there's a dispute, the escrow remains frozen pending resolution.",
  },
  {
    id: "4",
    category: "Escrow",
    question: "What happens if I don't confirm receipt?",
    answer:
      "If you don't confirm receipt within the specified timeframe, the funds will be automatically released to the seller. This protects sellers from buyers who receive items but don't confirm. Always review your orders promptly.",
  },
  {
    id: "5",
    category: "Escrow",
    question: "Can I open a dispute?",
    answer:
      "Yes, if you haven't received your item or there's an issue with the delivery, you can open a dispute before the deadline. This freezes the escrow and initiates an arbitration process.",
  },
  {
    id: "6",
    category: "Payments",
    question: "What cryptocurrencies are supported?",
    answer:
      "Currently, MarketXpress supports XLM (Stellar Lumens) as the primary payment method. We're working on adding support for other Stellar-based assets in the future.",
  },
  {
    id: "7",
    category: "Payments",
    question: "Are there any fees?",
    answer:
      "MarketXpress charges a small platform fee (typically 1-2%) on completed transactions. Additionally, standard Stellar network fees apply (usually less than 0.00001 XLM per transaction).",
  },
  {
    id: "8",
    category: "Selling",
    question: "How do I list an item for sale?",
    answer:
      "Navigate to the Dashboard, click 'Start Selling', and follow the multi-step form to add item details, pricing, and media. Once submitted, your listing will be visible to buyers on the marketplace.",
  },
  {
    id: "9",
    category: "Selling",
    question: "What types of items can I sell?",
    answer:
      "You can sell digital goods (software, licenses, NFTs), physical items (electronics, collectibles), and services (consulting, development work). All transactions are protected by our escrow system.",
  },
  {
    id: "10",
    category: "Security",
    question: "Is my wallet secure?",
    answer:
      "Your wallet keys never leave your device. MarketXpress uses Freighter Wallet, which stores your private keys locally. We never have access to your funds - all transactions are executed through smart contracts.",
  },
  {
    id: "11",
    category: "Security",
    question: "What if I lose access to my wallet?",
    answer:
      "Always backup your wallet's secret key or recovery phrase. If you lose access, MarketXpress cannot recover your funds. Store your backup securely offline.",
  },
];

const categories = [
  "All",
  "Getting Started",
  "Escrow",
  "Payments",
  "Selling",
  "Security",
];

const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "Getting Started": HelpCircle,
  Escrow: Shield,
  Payments: Wallet,
  Selling: Package,
  Security: Shield,
};

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-3">
            Help & FAQ
          </h1>
          <p className="text-gray-500 text-base">
            Find answers to common questions about MarketX
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 text-sm"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-bold transition-all",
                selectedCategory === category
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFAQs.length === 0 ? (
            <div className="p-12 bg-white border border-gray-200 rounded-2xl text-center">
              <p className="text-gray-400">No FAQs match your search.</p>
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const Icon = categoryIcons[faq.category] || HelpCircle;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                    }
                    className="w-full p-5 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                            {faq.category}
                          </span>
                          <h3 className="text-sm font-bold text-gray-900 mt-0.5">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-gray-400 transition-transform shrink-0",
                            openFAQ === faq.id && "rotate-180",
                          )}
                        />
                      </div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-13">
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-10 p-8 bg-emerald-50 border border-emerald-100 rounded-2xl text-center">
          <h2 className="text-xl font-black text-gray-900 mb-2">Still need help?</h2>
          <p className="text-gray-500 text-sm mb-5">
            Can&apos;t find what you&apos;re looking for? Reach out to our
            support team.
          </p>
          <a
            href="mailto:support@marketx.com"
            className="inline-block px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-bold transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}
