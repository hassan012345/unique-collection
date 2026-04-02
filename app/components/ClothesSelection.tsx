"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ProductCard from './ProductCard';
import type { Product } from "@/config/products";
import { MEN_PRODUCTS, WOMEN_PRODUCTS } from "@/config/products";

const MEN_FILTERS = ["New Arrival", "Sale", "Unstitched", "Shalwar kameez", "Kurtas", "Waist Coats", "3-Piece Suits", "Blazers"];
const WOMEN_FILTERS = ["New Arrival", "Sale", "Unstitched", "Shalwar kameez", "Kurtas"];

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
            className="flex items-start w-full gap-5 lg:gap-6 overflow-x-auto scrollbar-hide px-8 lg:px-10"
          >
            {products.map((p) => (
              <div key={p.id} className="flex-shrink-0 min-w-[220px] sm:min-w-[240px] md:min-w-[280px]">
                <ProductCard product={p} />
              </div>
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
      products={MEN_PRODUCTS}
      filters={MEN_FILTERS}
      viewAllHref="/men"
    />
  );
}

export function WomensCollection() {
  return (
    <ClothesSelection
      title="Unique Women's Collection"
      products={WOMEN_PRODUCTS}
      filters={WOMEN_FILTERS}
      viewAllHref="/women"
    />
  );
}