import React from "react";
import Image from "next/image";
import { LuStar, LuShoppingCart, LuScissors, LuEye } from "react-icons/lu";


interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isStitchable?: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col group h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-[#FDFD96] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
          New Arrival
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow px-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-gray-900 text-lg leading-tight truncate">
            {product.title}
          </h3>
          <div className="flex items-center gap-1 text-sm shrink-0">
            <LuStar className="w-4 h-4 fill-orange-400 text-orange-400" />
            <span className="font-medium text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-1">{product.description}</p>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-[#1A4D2E] font-bold text-lg">
            PKR {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              PKR {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <button className="flex-1 bg-[#234E41] text-white py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition-colors hover:bg-[#1a3a31]">
            {product.isStitchable ? (
              <>
                <LuScissors className="w-4 h-4" /> Stitch
              </>
            ) : (
              <>
                <LuShoppingCart className="w-4 h-4" /> Add to cart
              </>
            )}
          </button>
          <button className="flex-1 border border-gray-300 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
            <LuEye className="w-4 h-4" /> View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
