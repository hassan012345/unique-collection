import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/config/products";
import ProductCard from "./ProductCard";

// ── Icons ─────────────────────────────────────────────────────────
function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M9 15.5S1.5 10.5 1.5 5.75A3.75 3.75 0 019 3.2a3.75 3.75 0 017.5 2.55C16.5 10.5 9 15.5 9 15.5z"
        stroke={filled ? "#C0392B" : "#525252"}
        strokeWidth="1.5"
        fill={filled ? "#C0392B" : "none"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartPlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 2h1.5l1.9 7.3a1.5 1.5 0 001.45 1.2h5.8a1.5 1.5 0 001.45-1.13L15 5H4.5"
        stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.5" cy="13.5" r="1" fill="white" />
      <circle cx="12.5" cy="13.5" r="1" fill="white" />
      <path d="M11 3v4M9 5h4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// // ── Product card ──────────────────────────────────────────────────
// function ProductCard({ product }: { product: Product }) {
//   const [wishlisted, setWishlisted] = useState(false);

//   return (
//     <div className="group flex flex-col gap-3 md:gap-4">
//       {/* Image wrapper */}
//       <div className="relative overflow-hidden rounded-lg bg-[#F5F5F5] aspect-[3/4]">
//         <Link href={product.href}>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
//           />
//         </Link>

//         {/* Sale badge — top left */}
//         {product.badge === "Sale" && (
//           <span className="absolute top-3 left-3 bg-white text-[#C0392B] text-[11px] font-semibold px-2 py-0.5 rounded"
//             style={{ fontFamily: "var(--font-neue-montreal)" }}>
//             Sale
//           </span>
//         )}

//         {/* Wishlist button — top right */}
//         <button
//           onClick={() => setWishlisted(!wishlisted)}
//           aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
//           className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110 active:scale-95"
//         >
//           <HeartIcon filled={wishlisted} />
//         </button>

//         {/* Quick Add overlay — bottom */}
//         <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//           <button
//             className="w-full flex items-center justify-center gap-2 bg-[#184335] hover:bg-[#0A1C16] text-white text-sm py-3 transition-colors"
//             style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
//           >
//             <CartPlusIcon />
//             Quick Add
//           </button>
//         </div>
//       </div>

//       {/* Info */}
//       <div className="flex flex-col gap-1">
//         {/* New Arrival tag */}
//         {product.tag === "New Arrival" && (
//           <span className="text-[11px] font-medium text-[#FFB86A] uppercase tracking-wide"
//             style={{ fontFamily: "var(--font-neue-montreal)" }}>
//             New Arrival
//           </span>
//         )}

//         <Link href={product.href}
//           className="text-sm font-medium text-[#171717] hover:text-[#184335] transition-colors line-clamp-2 leading-snug"
//           style={{ fontFamily: "var(--font-neue-montreal)" }}>
//           {product.name}
//         </Link>

//         <div className="flex items-center gap-2 mt-0.5">
//           <span className="text-sm font-semibold text-[#171717]"
//             style={{ fontFamily: "var(--font-neue-montreal)" }}>
//             {product.price}
//           </span>
//           {product.originalPrice && (
//             <span className="text-xs text-[#A1A1A1] line-through"
//               style={{ fontFamily: "var(--font-neue-montreal)" }}>
//               {product.originalPrice}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// ── Empty state ───────────────────────────────────────────────────
function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 gap-5 text-center">
      <div className="w-16 h-16 rounded-full bg-[#E8ECEB] flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 6h2.5L10 21h12l2.5-10H8" stroke="#184335" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11.5" cy="24.5" r="1.5" fill="#184335" />
          <circle cx="20.5" cy="24.5" r="1.5" fill="#184335" />
        </svg>
      </div>
      <div>
        <p className="text-base font-semibold text-[#171717]"
          style={{ fontFamily: "var(--font-neue-montreal)" }}>
          No products found
        </p>
        <p className="text-sm text-[#737373] mt-1"
          style={{ fontFamily: "var(--font-neue-montreal)" }}>
          Try adjusting your filters to see more results.
        </p>
      </div>
      <button onClick={onClear}
        className="px-5 py-2.5 bg-[#184335] text-white text-sm rounded-lg hover:bg-[#0A1C16] transition-colors"
        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}>
        Clear Filters
      </button>
    </div>
  );
}

// ── Grid ──────────────────────────────────────────────────────────
interface Props {
  products: Product[];
  onClear:  () => void;
}

export default function ProductGrid({ products, onClear }: Props) {
  if (products.length === 0) {
    return (
      <div>
        <EmptyState onClear={onClear} />
      </div>
    );
  }

  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
