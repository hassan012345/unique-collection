/**
 * app/(shop)/sale/page.tsx  — Sale listing (shows sale items from both collections)
 */

import TopToast from "@/components/TopToast";
import Navbar from "@/components/Navbar";
import ProductListingPage from "@/components/ProductsListing";
import Footer from "@/components/Footer";
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
    <main className="min-h-screen flex flex-col bg-white">
      <TopToast />
      <Navbar />
      <div className="flex-1">
        <ProductListingPage
          title="Sale"
          description="Limited-time discounts on premium men's and women's clothing."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Sale"            },
          ]}
          products={SALE_PRODUCTS}
          filterOptions={OPTIONS}
          pills={PILLS}
        />
      </div>
      <Footer />
    </main>
  );
}
