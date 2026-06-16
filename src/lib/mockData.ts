export type AssetType = "Digital" | "Physical" | "Service";
export type EscrowStatus = "Active" | "Completed";

export interface MockAsset {
  id: string;
  name: string;
  priceAmount: number;
  priceCurrency: "XLM" | "USDC";
  assetType: AssetType;
  escrowStatus: EscrowStatus;
  sellerName: string;
  sellerRating: number;
  timeStr: string;
  imageFallbackIcon: "Package" | "Image" | "Code" | "Briefcase" | "Camera";
}

export const mockAssets: MockAsset[] = [
  {
    id: "1",
    name: "Digital Artwork #042",
    priceAmount: 240,
    priceCurrency: "XLM",
    assetType: "Digital",
    escrowStatus: "Active",
    sellerName: "art_node",
    sellerRating: 4.8,
    timeStr: "2h ago",
    imageFallbackIcon: "Image"
  },
  {
    id: "2",
    name: "SaaS Enterprise License",
    priceAmount: 1200,
    priceCurrency: "USDC",
    assetType: "Digital",
    escrowStatus: "Completed",
    sellerName: "cloud_soft",
    sellerRating: 4.9,
    timeStr: "5h ago",
    imageFallbackIcon: "Code"
  },
  {
    id: "3",
    name: "Vintage Camera Collection",
    priceAmount: 850,
    priceCurrency: "XLM",
    assetType: "Physical",
    escrowStatus: "Active",
    sellerName: "retro_shop",
    sellerRating: 4.5,
    timeStr: "1d ago",
    imageFallbackIcon: "Camera"
  },
  {
    id: "4",
    name: "Smart Contract Audit",
    priceAmount: 5000,
    priceCurrency: "USDC",
    assetType: "Service",
    escrowStatus: "Active",
    sellerName: "rust_sec",
    sellerRating: 5.0,
    timeStr: "2d ago",
    imageFallbackIcon: "Briefcase"
  },
  {
    id: "5",
    name: "Limited Edition Sneakers",
    priceAmount: 300,
    priceCurrency: "USDC",
    assetType: "Physical",
    escrowStatus: "Completed",
    sellerName: "hype_kicks",
    sellerRating: 4.2,
    timeStr: "3d ago",
    imageFallbackIcon: "Package"
  },
  {
    id: "6",
    name: "3D Character Models",
    priceAmount: 150,
    priceCurrency: "XLM",
    assetType: "Digital",
    escrowStatus: "Active",
    sellerName: "poly_crafter",
    sellerRating: 4.7,
    timeStr: "4h ago",
    imageFallbackIcon: "Image"
  },
  {
    id: "7",
    name: "Marketing Strategy Consultation",
    priceAmount: 400,
    priceCurrency: "USDC",
    assetType: "Service",
    escrowStatus: "Completed",
    sellerName: "growth_guru",
    sellerRating: 4.9,
    timeStr: "5d ago",
    imageFallbackIcon: "Briefcase"
  },
  {
    id: "8",
    name: "Custom Mechanical Keyboard",
    priceAmount: 250,
    priceCurrency: "USDC",
    assetType: "Physical",
    escrowStatus: "Active",
    sellerName: "keeb_maker",
    sellerRating: 4.6,
    timeStr: "1w ago",
    imageFallbackIcon: "Package"
  },
  {
    id: "9",
    name: "Stellar Network Workshop",
    priceAmount: 100,
    priceCurrency: "XLM",
    assetType: "Service",
    escrowStatus: "Active",
    sellerName: "stellar_edu",
    sellerRating: 4.8,
    timeStr: "1h ago",
    imageFallbackIcon: "Code"
  },
  {
    id: "10",
    name: "Exclusive Music Track (Stem Files)",
    priceAmount: 50,
    priceCurrency: "XLM",
    assetType: "Digital",
    escrowStatus: "Completed",
    sellerName: "beats_by_dre",
    sellerRating: 3.9,
    timeStr: "3w ago",
    imageFallbackIcon: "Image"
  }
];

export interface ProductMock {
  id: string;
  name: string;
  usdPrice: number;
  originalUsdPrice: number;
  xlmPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  category: string;
  seller: string;
  badge?: "flash" | "new" | "hot";
}

export const mockProducts: ProductMock[] = [
  { id: "p1", name: "Samsung Galaxy A55 5G", usdPrice: 299, originalUsdPrice: 459, xlmPrice: 1450, discountPercent: 35, rating: 4.5, reviewCount: 312, category: "Electronics", seller: "TechHub NG", badge: "flash" },
  { id: "p2", name: "Nike Air Max 270", usdPrice: 88, originalUsdPrice: 110, xlmPrice: 427, discountPercent: 20, rating: 4.7, reviewCount: 198, category: "Fashion", seller: "SoleKing", badge: "hot" },
  { id: "p3", name: "Sony WH-1000XM5", usdPrice: 193, originalUsdPrice: 350, xlmPrice: 936, discountPercent: 45, rating: 4.8, reviewCount: 540, category: "Electronics", seller: "AudioWorld", badge: "flash" },
  { id: "p4", name: "Levi's 501 Original Jeans", usdPrice: 45, originalUsdPrice: 60, xlmPrice: 218, discountPercent: 25, rating: 4.3, reviewCount: 87, category: "Fashion", seller: "DenimCo" },
  { id: "p5", name: "Anker 65W GaN Charger", usdPrice: 28, originalUsdPrice: 40, xlmPrice: 136, discountPercent: 30, rating: 4.6, reviewCount: 231, category: "Electronics", seller: "PowerDeals" },
  { id: "p6", name: "JBL Flip 6 Speaker", usdPrice: 99, originalUsdPrice: 130, xlmPrice: 480, discountPercent: 24, rating: 4.4, reviewCount: 175, category: "Electronics", seller: "SoundZone", badge: "new" },
  { id: "p7", name: "Adidas Ultraboost 22", usdPrice: 120, originalUsdPrice: 180, xlmPrice: 582, discountPercent: 33, rating: 4.6, reviewCount: 94, category: "Fashion", seller: "SoleKing" },
  { id: "p8", name: "Xiaomi Smart Band 9", usdPrice: 35, originalUsdPrice: 50, xlmPrice: 170, discountPercent: 30, rating: 4.2, reviewCount: 412, category: "Electronics", seller: "TechHub NG" },
  { id: "p9", name: "Legendary NFT #0042", usdPrice: 450, originalUsdPrice: 450, xlmPrice: 2183, discountPercent: 0, rating: 5.0, reviewCount: 12, category: "NFTs", seller: "art_node", badge: "hot" },
  { id: "p10", name: "iPhone 15 Case (MagSafe)", usdPrice: 19, originalUsdPrice: 25, xlmPrice: 92, discountPercent: 24, rating: 4.1, reviewCount: 63, category: "Electronics", seller: "CaseWorld" },
];
