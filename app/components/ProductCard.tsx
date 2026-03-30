import Link from "next/link";
import type { Product } from "@/config/products";

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={product.href} className="product-card block group">
      {/* Image container */}
      <div className="relative h-[235px] md:h-[350px] lg:h-[397px] rounded-lg overflow-hidden bg-[#F5F5F5] group-hover:shadow-lg transition-shadow duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span className="bg-white text-black text-sm px-4 py-1.5 rounded-full">
              {product.badge}
            </span>
          </div>
        )}
        {product.tag && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-[#FFD6A8] text-black text-sm px-3 py-1 rounded-[6px]">
              {product.tag}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-5 flex flex-col gap-1.5">
        <h4
          className="
      text-black 
      text-[14px] lg:text-[20px] 
      leading-[150%] 
      font-normal 
      line-clamp-2
      group-hover:text-[#184335]
      transition-colors
    "
          style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
          {product.name}
        </h4>

        <div className="flex items-center gap-2">
          <span
            className="
        text-[#184335] 
        text-[14px] lg:text-[20px] 
        leading-[150%] 
        font-medium
      "
            style={{ fontFamily: "var(--font-neue-montreal)" }}
          >
            {product.price}
          </span>

          {product.originalPrice && (
            <span
              className="
          text-[#737373] 
          text-[12px] lg:text-[14px] 
          leading-[150%] 
          font-normal 
          line-through
        "
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
