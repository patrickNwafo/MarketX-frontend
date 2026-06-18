# feat: Product Detail Page (`/product/[id]`)

## Summary

Implements the full product detail page at route `/product/[id]`, resolving the missing page that `ProductCard` links were pointing to. Also enriches the mock data layer and connects the card grid to the detail route.

---

## Changes

### `src/app/product/[id]/page.tsx` *(new)*

Full product detail view built as a `"use client"` page. Sections include:

- **Image Gallery** — main image area with badge overlays (Flash / Hot / New / discount %), thumbnail strip for multi-image products, image counter pill, and wishlist / share action buttons
- **Pricing Block** — USD price (large), original USD strikethrough, savings badge, and XLM equivalent with Stellar Network label
- **Escrow Trust Strip** — shield icon callout explaining Stellar smart contract escrow protection
- **CTAs** — primary **"Buy with Escrow"** button and secondary **"Add to Cart"** button
- **Guarantee Chips** — Buyer Protection, Fast Shipping, Secure Payment
- **Description** — rendered when `product.description` is present
- **Seller Card** — avatar initial, verified checkmark, seller name, star rating, total sales count, and a Contact button
- **Related Products** — horizontal grid of up to 4 same-category products (excludes current), each linking to their own detail page
- **Breadcrumb + Back link** — Home → Category → Product Name, plus a back-to-listings chevron link
- **404 handling** — calls `notFound()` for any unrecognised product ID

---

### `src/lib/mockData.ts`

Extended `ProductMock` interface with four new optional fields:

```ts
description?: string;
images?: string[];
sellerRating?: number;
sellerSales?: number;
```

All 10 mock products (`p1`–`p10`) enriched with realistic descriptions, image path arrays, seller ratings, and sales counts.

---

### `src/components/marketplace/ProductCard.tsx`

Wrapped the card root element in a `<Link href={`/product/${product.id}`}>` so every card on the homepage, flash sale section, and wishlist page navigates to the detail page on click.

---

## Screenshots

> _Attach screenshots of the product detail page (desktop + mobile) before merging._

---

## Testing Checklist

- [ ] Navigate to `/product/p1` — full page renders correctly
- [ ] Navigate to `/product/invalid` — returns 404
- [ ] Clicking any `ProductCard` on the homepage routes to the correct detail page
- [ ] XLM and USD prices display correctly for all 10 products
- [ ] Discount badge and savings label appear only when `discountPercent > 0`
- [ ] Flash / Hot / New badges render per product
- [ ] Wishlist heart toggles fill state on click
- [ ] Related products strip shows only same-category items, excludes current product
- [ ] Seller card displays `sellerRating` and `sellerSales` where available
- [ ] Responsive layout on mobile (stacked) and desktop (two-column grid)

---

## Related

- Closes #59
- Branch: `feat/product-detail-page`
