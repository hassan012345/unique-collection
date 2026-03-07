"use client";

import { useState, useRef } from "react";
import Link from "next/link";

// Product image assets from Figma
const menProducts = [
  {
    id: 1,
    image: "https://www.figma.com/api/mcp/asset/1355a27c-d6a2-44e5-9ec7-e3c80c9ded50",
    name: "Classic White Shalwar Kameez",
    price: "PKR 4,500",
    originalPrice: "PKR 6,000",
    badge: "Sale",
    tag: "New Arrival",
  },
  {
    id: 2,
    image: "https://www.figma.com/api/mcp/asset/a15410c8-f28a-4feb-8458-53222cd7e65a",
    name: "Red Shalwaar kameez suite",
    price: "PKR 3,500",
    originalPrice: null,
    badge: null,
    tag: "New Arrival",
  },
  {
    id: 3,
    image: "https://www.figma.com/api/mcp/asset/187ac882-6b19-4831-a6a5-80f8e1c1da38",
    name: "Blue Banarsi Kameez",
    price: "PKR 2,500",
    originalPrice: "PKR 4,500",
    badge: "Sale",
    tag: null,
  },
  {
    id: 4,
    image: "https://www.figma.com/api/mcp/asset/703f25eb-c9ee-444e-900d-fffbf735a246",
    name: "Classic White Shalwar Kameez",
    price: "PKR 10,500",
    originalPrice: null,
    badge: null,
    tag: null,
  },
  {
    id: 5,
    image: "https://www.figma.com/api/mcp/asset/f279f0b9-07fc-407f-a8c2-05d9db6a9c4e",
    name: "Classic White Shalwar Kameez",
    price: "PKR 10,500",
    originalPrice: null,
    badge: null,
    tag: null,
  },
];

const womenProducts = [
  {
    id: 1,
    image: "https://www.figma.com/api/mcp/asset/bc8bcf07-bf66-4302-a92f-a8d03ca3f038",
    name: "Classic White Shalwar Kameez",
    price: "PKR 4,500",
    originalPrice: "PKR 6,000",
    badge: "Sale",
    tag: "New Arrival",
  },
  {
    id: 2,
    image: "https://www.figma.com/api/mcp/asset/7bc6083d-b654-4be5-af61-ed1a6ca4fd3e",
    name: "Red Shalwaar kameez suite",
    price: "PKR 3,500",
    originalPrice: null,
    badge: null,
    tag: "New Arrival",
  },
  {
    id: 3,
    image: "https://www.figma.com/api/mcp/asset/b7bf97e2-51da-4024-9768-35b35e081ce2",
    name: "Blue Banarsi Kameez",
    price: "PKR 2,500",
    originalPrice: "PKR 4,500",
    badge: "Sale",
    tag: null,
  },
  {
    id: 4,
    image: "https://www.figma.com/api/mcp/asset/70b1689e-8cf0-4a34-8dae-295264ea133e",
    name: "Classic White Shalwar Kameez",
    price: "PKR 10,500",
    originalPrice: null,
    badge: null,
    tag: null,
  },
  {
    id: 5,
    image: "https://www.figma.com/api/mcp/asset/f279f0b9-07fc-407f-a8c2-05d9db6a9c4e",
    name: "Classic White Shalwar Kameez",
    price: "PKR 10,500",
    originalPrice: null,
    badge: null,
    tag: null,
  },
];

const MEN_FILTERS = ["New Arrival", "Sale", "Unstitched", "Shalwar kameez", "Kurtas", "Waist Coats", "3-Piece Suits", "Blazers"];
const WOMEN_FILTERS = ["New Arrival", "Sale", "Unstitched", "Shalwar kameez", "Kurtas"];

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  originalPrice: string | null;
  badge: string | null;
  tag: string | null;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card flex-none w-[240px] md:w-[280px] lg:w-[302px]">
      {/* Image container */}
      <div className="relative h-[300px] md:h-[350px] lg:h-[397px] rounded-lg overflow-hidden bg-[#F5F5F5]">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img w-full h-full object-cover"
        />
        {/* Top badge (Sale) */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span
              className="bg-white text-black text-sm px-4 py-1.5 rounded-full"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
            >
              {product.badge}
            </span>
          </div>
        )}
        {/* Bottom tag (New Arrival) */}
        {product.tag && (
          <div className="absolute bottom-3 left-3">
            <span
              className="bg-[#FFD6A8] text-black text-sm px-3 py-1 rounded-[6px]"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
            >
              {product.tag}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-5 flex flex-col gap-1.5">
        <h4
          className="text-black text-lg lg:text-[20px] leading-relaxed line-clamp-2"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
        >
          {product.name}
        </h4>
        <div className="flex items-center gap-2">
          <span
            className="text-[#184335] text-lg lg:text-[20px] font-[500]"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
          >
            {product.price}
          </span>
          {product.originalPrice && (
            <span
              className="text-[#737373] text-sm line-through"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
            >
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 5L7 11L13 17" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5L15 11L9 17" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface ClothesSelectionProps {
  title: string;
  products: Product[];
  filters: string[];
  viewAllHref: string;
}

function ClothesSelection({ title, products, filters, viewAllHref }: ClothesSelectionProps) {
  const [activeFilter, setActiveFilter] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full px-5 lg:px-20 py-8 lg:py-10">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h2
              className="text-[#0A0A0A] text-2xl md:text-3xl lg:text-[48px] font-[600] capitalize leading-relaxed"
              style={{ fontFamily: "var(--font-perfectly-nineties)" }}
            >
              {title}
            </h2>
            {/* Filter pills */}
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {filters.map((f, i) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(i)}
                  className={`px-4 lg:px-5 py-2 lg:py-3 rounded-[60px] text-sm font-[500] transition-all ${
                    i === activeFilter ? "pill-active" : "pill-inactive"
                  }`}
                  style={{ fontFamily: "var(--font-neue-montreal)" }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <Link
            href={viewAllHref}
            className="self-start lg:self-auto shrink-0 border border-[#245749] text-[#245749] text-base font-[500] px-6 py-2 rounded-full bg-[#FAFAFA] hover:bg-[#E8ECEB] transition-colors"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
          >
            View All
          </Link>
        </div>

        {/* Product carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 lg:-left-3 top-[calc(50%-70px)] z-10 bg-white border border-[#A1A1A1] rounded-[30px] w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center shadow-sm hover:border-[#184335] transition-colors"
            aria-label="Previous"
          >
            <ChevronLeftIcon />
          </button>

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-5 lg:gap-6 overflow-x-auto scrollbar-hide px-8 lg:px-10"
          >
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 lg:-right-3 top-[calc(50%-70px)] z-10 bg-white border border-[#A1A1A1] rounded-[30px] w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center shadow-sm hover:border-[#184335] transition-colors"
            aria-label="Next"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export function MensCollection() {
  return (
    <ClothesSelection
      title="Unique Men's Collection"
      products={menProducts}
      filters={MEN_FILTERS}
      viewAllHref="/men"
    />
  );
}

export function WomensCollection() {
  return (
    <ClothesSelection
      title="Unique Women's Collection"
      products={womenProducts}
      filters={WOMEN_FILTERS}
      viewAllHref="/women"
    />
  );
}