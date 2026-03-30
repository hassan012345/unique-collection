/**
 * app/(shop)/men/page.tsx
 *
 * To change filter options → edit the OPTIONS array below.
 * To change products       → config/products.ts → MEN_PRODUCTS
 */

import TopToast from "@/components/TopToast";
import Navbar from "@/components/Navbar";
import ProductListingPage from "@/components/ProductsListing";
import Footer from "@/components/Footer";
import { MEN_PRODUCTS } from "@/config/products";

const OPTIONS = [
  { label: "New Arrival",     value: "new-arrival"     },
  { label: "Sale",            value: "sale"            },
  { label: "Unstitched",      value: "unstitched"      },
  { label: "Shalwaar Kameez", value: "shalwaar-kameez" },
  { label: "Kurtas",          value: "kurtas"          },
  { label: "Waist Coats",     value: "waist-coats"     },
  { label: "3-Piece Suits",   value: "3-piece-suits"   },
  { label: "Blazers",         value: "blazers"         },
];

// Same list used for pills strip AND the filter panel checkboxes
const PILLS = [{ label: "All", value: "all" }, ...OPTIONS];

export const metadata = {
  title:       "Men's Collection | Unique Collection",
  description: "Shop premium men's clothing — Shalwaar Kameez, Kurtas, Waistcoats & more.",
};

export default function MenPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <TopToast />
      <Navbar />
      <div className="flex-1">
        <ProductListingPage
          title="Men's Collection"
          description="Premium men's clothing crafted for comfort and confidence."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Men's Collection"  },
          ]}
          products={MEN_PRODUCTS}
          filterOptions={OPTIONS}
          pills={PILLS}
        />
      </div>
      <Footer />
    </main>
  );
}