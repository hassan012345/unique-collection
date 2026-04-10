"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "./BreadCrumb";
import ShowMore from "./SeeMore";
import DeliveryInfo from "./DeliveryInfo";
import ProductReviews from "./Reviews";
import reviews from "@/lib/data/reviews";

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    price: string;
    originalPrice?: string;
    rating?: number;
    reviews?: number;
    inStock: boolean;
    description?: string;
    details?: string[];
    images?: string[];
    colors?: { name: string; code: string }[];
    sizes?: string[];
  };
  previewLines?: number;
  relatedProducts?: any[];
}

export default function ProductDetail({
  product,
  relatedProducts = [],
  previewLines = 13,
}: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.name || "",
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [unlocked, setUnlocked] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const images = product.images || [
    "/men1.png",
    "/men2.png",
    "/men3.png",
    "/men4.png",
  ];
  const displayPrice = product.price;
  const hasDiscount = !!product.originalPrice;

  const getSizeLabel = (size: string): string => {
    const sizeMap: { [key: string]: string } = {
      xs: "Extra Small",
      s: "Small",
      m: "Medium",
      l: "Large",
      xl: "Extra Large",
      xxl: "2X Large",
    };
    return sizeMap[size.toLowerCase()] || size;
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Men's Collection", href: "/men" },
    { label: product.name },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <BreadCrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Left: Image Gallery */}
            <div className="flex flex-col gap-4">
              {/* Main Image */}
              <div className="relative bg-neutral-100 rounded-lg overflow-hidden aspect-square md:aspect-[4/5]">
                <Image
                  src={images[activeImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {hasDiscount && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Sale
                  </div>
                )}
                {/* Favorite Button */}
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2.5 hover:bg-neutral-100 transition-colors shadow-md"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={isFavorite ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    className={isFavorite ? "text-red-500" : "text-neutral-600"}
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImageIndex === idx
                        ? "border-green-500"
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - View ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col gap-6">
              {/* Product Name & Rating */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 mb-3">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl md:text-3xl font-bold text-green-500">
                    {displayPrice}
                  </span>
                  {hasDiscount && (
                    <span className="text-lg text-neutral-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <p className="font-medium text-lg leading-[1.5] tracking-normal">
                  {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
                </p>
                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={
                          i < Math.floor(product.rating || 5)
                            ? "currentColor"
                            : "none"
                        }
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={
                          i < Math.floor(product.rating || 5)
                            ? "text-orange-400"
                            : "text-neutral-300"
                        }
                      >
                        <polygon points="12 2 15.09 10.26 24 10.26 17.55 16.74 20.64 25 12 19.52 3.36 25 6.45 16.74 0 10.26 8.91 10.26" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600">
                    5 ({product.reviews || 128} reviews)
                  </span>
                </div>
              </div>

              <hr className="border-t border-neutral-200" />

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-3">
                    Color:{" "}
                    <span className="text-green-500">{selectedColor}</span>
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`relative p-0.5 rounded-full border-2 transition-colors ${
                          selectedColor === color.name
                            ? "border-green-500"
                            : "border-neutral-300 hover:border-neutral-400"
                        }`}
                        title={color.name}
                      >
                        <div
                          className="w-10 h-10 rounded-full"
                          style={{ backgroundColor: color.code }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-3">
                    Size:{" "}
                    <span className="text-green-500">
                      {" "}
                      {getSizeLabel(selectedSize)}
                    </span>
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`relative p-0.5 rounded-full border-2 transition-colors w-10 h-10 flex items-center justify-center font-medium ${
                          selectedSize === size
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-neutral-300 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex gap-3">
                {/* Quantity Selector */}
                <div className="flex items-center">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="relative p-0.5 rounded-full border-2 border-neutral-300 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50 transition-colors w-10 h-10 flex items-center justify-center font-medium"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 1;
                      setQuantity(Math.max(1, val));
                    }}
                    className="w-16 text-center border-0 outline-none font-semibold [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&]:appearance-textfield"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="relative p-0.5 rounded-full border-2 border-neutral-300 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50 transition-colors w-10 h-10 flex items-center justify-center font-medium"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                  Add to Cart
                </button>
              </div>

              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                Buy Now
              </button>

              <ShowMore
                lines={previewLines}
                label="Read More"
                collapseLabel="Show Less"
                className="text-neutral-600 leading-relaxed"
              >
                <p>Gender:  Men</p>
                <p>Category:  Clothing </p>
                <p>Outfit Type:  Eastern</p>
                <p>Sub-Category:  Shalwar Kameez </p>
                <p>Bottom Style:  Loose-Fit </p>
                <p>Color Type:  Olive Green </p>
                <p>Fabric:  Wash & Wear </p>
                <p>Number of Pieces:  2 Piece - Top & Bottom </p>
                <p>Product Type:  Daily/Basic </p>
                <p>Wear Season: Summer Wear </p>
                <p>Top Style:  Straight-Cut </p>
                <p>
                  Additional Description: Blended Exclusive kameez shalwar
                  crafted with premium wash n wear fabric. Disclaimer:  Actual
                  product color may vary slightly from the image.
                </p>
              </ShowMore>

              <DeliveryInfo />
            </div>
          </div>
          <ProductReviews
            average={3.0}
            total={234}
            breakdown={[
              { stars: 5, count: 203 },
              { stars: 4, count: 156 },
              { stars: 3, count: 13 },
              { stars: 2, count: 3 },
              { stars: 1, count: 0 },
            ]}
            items={reviews}
          />
        </div>
      </section>

      {/* You May Also Like Section */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="border-t border-neutral-200 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.slice(0, 4).map((relProduct) => (
                <Link
                  key={relProduct.id}
                  href={relProduct.href}
                  className="group"
                >
                  <div className="relative bg-neutral-100 rounded-lg overflow-hidden aspect-[3/4] mb-4">
                    <Image
                      src={relProduct.image}
                      alt={relProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-sm group-hover:text-green-500 transition-colors line-clamp-2">
                    {relProduct.name}
                  </h3>
                  <p className="text-green-500 font-bold mt-2">
                    {relProduct.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
