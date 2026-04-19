/**
 * app/(shop)/women/page.tsx
 *
 * Women's collection listing page.
 *
 * To change:
 *   Products  → config/products.ts → WOMEN_PRODUCTS
 *   Filters   → config/filters.ts  → WOMEN_FILTER_GROUPS
 *   Heading   → strings.ts         → strings.womensCollection
 *   Pills     → the `pills` array below
 */

import ProductListingPage from "@/components/ProductsListing";
import { WOMEN_PRODUCTS } from "@/config/products";
import { WOMEN_FILTER_GROUPS } from "@/config/filters";

const PILLS = [
  { label: "All",            value: "all"            },
  { label: "New Arrival",    value: "new-arrival"    },
  { label: "Sale",           value: "sale"           },
  { label: "Shalwaar Kameez",value: "shalwaar-kameez"},
  { label: "Kurtas",         value: "kurtas"         },
  { label: "Unstitched",     value: "unstitched"     },
];

// Extract category options for filter
const FILTER_OPTIONS = WOMEN_FILTER_GROUPS[0].options || [];

export const metadata = {
  title:       "Women's Collection | Unique Collection",
  description: "Shop premium women's clothing — Shalwaar Kameez, Kurtas, Unstitched fabrics & more.",
};

export default function WomenPage() {
  return (
    <ProductListingPage
      title="Women's Collection"
      description="Elegant women's clothing crafted with premium fabrics — ready-made & custom stitched."
      products={WOMEN_PRODUCTS}
      filterOptions={FILTER_OPTIONS}
      pills={PILLS}
    />
  );
}
