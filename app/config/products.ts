/**
 * config/products.ts
 *
 * Single source of truth for all product data.
 *
 * ── To add a product ──────────────────────────────────────────────
 *   1. Add the image URL to assets/images/index.ts
 *   2. Push a new entry to MEN_PRODUCTS or WOMEN_PRODUCTS below
 *
 * ── To add a filter pill label ────────────────────────────────────
 *   Add to MEN_FILTERS or WOMEN_FILTERS
 *
 * ── Fields ───────────────────────────────────────────────────────
 *   id            — unique number within the array
 *   name          — display name on the card
 *   price         — formatted price string e.g. "PKR 4,500"
 *   originalPrice — (optional) shown as strikethrough
 *   badge         — (optional) "Sale" → white badge top-left on card
 *   tag           — (optional) "New Arrival" → orange tag bottom-left
 *   image         — URL from assets/images/index.ts (or any CDN URL)
 *   href          — product detail page path
 */

// import images from "@/assets/images";

// ── Product type ──────────────────────────────────────────────────
export interface Product {
  id:             number;
  name:           string;
  price:          string;
  originalPrice?: string;
  badge?:         "Sale";
  inStock:       boolean;
  tag?:           "New Arrival";
  image:          string;
  href:           string;
}

// ── Filter pill labels ────────────────────────────────────────────
export const MEN_FILTERS = [
  "New Arrival",
  "Sale",
  "Unstitched",
  "Shalwaar Kameez",
  "Kurtas",
  "Waist Coats",
  "3-Piece Suits",
  "Blazers",
] as const;

export const WOMEN_FILTERS = [
  "New Arrival",
  "Sale",
  "Unstitched",
  "Shalwaar Kameez",
  "Kurtas",
] as const;

// ── Men's products ────────────────────────────────────────────────
export const MEN_PRODUCTS: Product[] = [
  {
    id:            1,
    name:          "Classic White Shalwar Kameez",
    price:         "PKR 4,500",
    originalPrice: "PKR 6,000",
    badge:         "Sale",
    tag:           "New Arrival",
    inStock:       true,
    image:         "/men1.png",
    href:          "/men/classic-white-shalwar-kameez",
  },
  {
    id:    2,
    name:  "Red Shalwaar Kameez Suite",
    price: "PKR 3,500",
    tag:   "New Arrival",
    inStock:       true,
    image: "/men2.png",
    href:  "/men/red-shalwaar-kameez",
  },
  {
    id:            3,
    name:          "Blue Banarsi Kameez",
    price:         "PKR 2,500",
    originalPrice: "PKR 4,500",
    badge:         "Sale",
    inStock:       true,
    image:         "/men3.png",
    href:          "/men/blue-banarsi-kameez",
  },
  {
    id:    4,
    name:  "Classic White Shalwar Kameez",
    price: "PKR 10,500",
    inStock:       true,
    image: "/men4.png",
    href:  "/men/classic-white-shalwar-kameez-2",
  },
  {
    id:    5,
    name:  "Beige Linen Kurta",
    price: "PKR 5,200",
    tag:   "New Arrival",
    inStock:       true,
    image: "/men1.png",
    href:  "/men/beige-linen-kurta",
  },
];

// ── Women's products ──────────────────────────────────────────────
export const WOMEN_PRODUCTS: Product[] = [
  {
    id:            1,
    name:          "Classic White Shalwar Kameez",
    price:         "PKR 4,500",
    originalPrice: "PKR 6,000",
    badge:         "Sale",
    tag:           "New Arrival",
    inStock:       true,
    image:         "/men1.png",
    href:          "/women/classic-white-shalwar-kameez",
  },
  {
    id:    2,
    name:  "Red Shalwaar Kameez Suite",
    price: "PKR 3,500",
    tag:   "New Arrival",
    inStock:       true,
    image: "/men1.png",
    href:  "/women/red-shalwaar-kameez",
  },
  {
    id:            3,
    name:          "Blue Banarsi Kameez",
    price:         "PKR 2,500",
    originalPrice: "PKR 4,500",
    badge:         "Sale",
    inStock:       true,
    image:         "/men1.png",
    href:          "/women/blue-banarsi-kameez",
  },
  {
    id:    4,
    name:  "Classic White Shalwar Kameez",
    price: "PKR 10,500",
    inStock:       true,
    image: "/men1.png",
    href:  "/women/classic-white-shalwar-kameez-2",
  },
  {
    id:    5,
    name:  "Floral Printed Lawn Suit",
    price: "PKR 6,800",
    tag:   "New Arrival",
    inStock:       true,
    image: "/men1.png",
    href:  "/women/floral-printed-lawn-suit",
  },
];