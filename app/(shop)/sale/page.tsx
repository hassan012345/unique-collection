/**
 * app/(shop)/sale/page.tsx  — Sale listing (shows sale items from both collections)
 */

import ProductListingPage from "@/components/ProductsListing";
import { MEN_PRODUCTS, WOMEN_PRODUCTS } from "@/config/products";

// Combine and pre-filter to only sale items
const SALE_PRODUCTS = [...MEN_PRODUCTS, ...WOMEN_PRODUCTS]
  .filter((p) => p.badge === "Sale")
  .map((p, i) => ({ ...p, id: i + 1 }));

const OPTIONS = [
  { label: "Men",   value: "men"   },
  { label: "Women", value: "women" },
];

const PILLS = [
  { label: "All",   value: "all"   },
  { label: "Men",   value: "men"   },
  { label: "Women", value: "women" },
];

export const metadata = {
  title:       "Sale | Unique Collection",
  description: "Shop discounted men's and women's clothing at Unique Collection.",
};

export default function SalePage() {
  return (
    <ProductListingPage
      title="Sale"
      description="Limited-time discounts on premium men's and women's clothing."
      products={SALE_PRODUCTS}
      filterOptions={OPTIONS}
      pills={PILLS}
    />
  );
}
