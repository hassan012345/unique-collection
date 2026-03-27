/**
 * app/(shop)/sale/page.tsx  — Sale listing (shows sale items from both collections)
 */

import ProductListingPage from "@/components/ProductListingPage";
import { MEN_PRODUCTS, WOMEN_PRODUCTS } from "@/config/products";
import { MEN_FILTER_GROUPS }            from "@/config/filters";

// Combine and pre-filter to only sale items
const SALE_PRODUCTS = [...MEN_PRODUCTS, ...WOMEN_PRODUCTS]
  .filter((p) => p.badge === "Sale")
  .map((p, i) => ({ ...p, id: i + 1 }));

export const metadata = {
  title:       "Sale | Unique Collection",
  description: "Shop discounted men's and women's clothing at Unique Collection.",
};

export default function SalePage() {
  return (
    <ProductListingPage
      title="Sale"
      description="Limited-time discounts on premium men's and women's clothing."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sale"            },
      ]}
      products={SALE_PRODUCTS}
      filterGroups={MEN_FILTER_GROUPS}
      maxPrice={25000}
    />
  );
}
