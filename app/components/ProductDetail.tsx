"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "./BreadCrumb";

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
  relatedProducts?: any[];
}

export default function ProductDetail({
  product,
  relatedProducts = [],
}: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.name || "",
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
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

              {/* Additional Info */}
              <div className="pt-4 border-t border-neutral-200">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-green-500 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-neutral-600">
                      Free shipping on orders over PKR 5,000
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-green-500 flex-shrink-0"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span className="text-neutral-600">
                      30-day return policy
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-green-500 flex-shrink-0"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                    <span className="text-neutral-600">
                      Easy returns & exchanges
                    </span>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="pt-4 border-t border-neutral-200">
                <p className="text-sm font-semibold text-neutral-900 mb-3">
                  Share:
                </p>
                <div className="flex gap-2">
                  {[
                    { icon: "facebook", label: "Facebook" },
                    { icon: "twitter", label: "Twitter" },
                    { icon: "pinterest", label: "Pinterest" },
                    { icon: "whatsapp", label: "WhatsApp" },
                  ].map((social) => (
                    <button
                      key={social.icon}
                      className="w-10 h-10 rounded-lg border-2 border-neutral-300 hover:border-green-500 hover:text-green-500 transition-colors flex items-center justify-center text-neutral-600"
                      title={social.label}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="1" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details & Reviews Tabs */}
      <section className="border-t border-neutral-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left: Description */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Product Details
              </h2>
              {product.description && (
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {product.description}
                </p>
              )}

              {product.details && product.details.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    Features
                  </h3>
                  <ul className="space-y-3">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-neutral-600">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-green-500 flex-shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Quick Info */}
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Product Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-600 mb-1">SKU</p>
                  <p className="font-semibold text-neutral-900">
                    UC-MEN-{String(product.id).padStart(4, "0")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600 mb-1">Category</p>
                  <p className="font-semibold text-neutral-900">
                    Men's Collection
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600 mb-1">Availability</p>
                  <p className="font-semibold text-green-500">In Stock</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600 mb-1">Delivery Time</p>
                  <p className="font-semibold text-neutral-900">
                    3-5 Business Days
                  </p>
                </div>
              </div>
            </div>
          </div>
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
