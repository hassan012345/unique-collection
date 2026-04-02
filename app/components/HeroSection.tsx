"use client";

import { useState } from "react";
import Link from "next/link";

// local copy from public/ (downloaded from Figma)
const heroImageUrl = "/HeroSection.png";

const slides = [
  {
    title: "Premium Men's Wear - Ready-Made & Custom Stitched",
    subtitle: "Designed with your comfort in mind and styled to boost your confidence, this piece is perfect for any occasion.",
  },
  {
    title: "Unique Women's Collection - Crafted for Every Occasion",
    subtitle: "Elegant fabrics and precision tailoring for the modern woman who values style and grace.",
  },
  {
    title: "Custom Tailoring - Your Style, Your Measurements",
    subtitle: "Order unstitched fabric and let our master tailors craft it into your perfect outfit.",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImageUrl}
          alt="Hero background"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-5 lg:px-20 flex flex-col justify-between py-5 lg:py-8">
        <div className="flex flex-1 flex-col justify-center gap-8 max-w-[500px]">
          {/* Text */}
          <div className="flex flex-col gap-5 text-white">
            <h1
              className="text-[36px] md:text-[48px] lg:text-[64px] leading-tight lg:leading-[69px] font-[400]"
              style={{ fontFamily: "var(--font-perfectly-nineties)" }}
            >
              {slides[active].title}
            </h1>
            <p
              className="text-sm lg:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
            >
              {slides[active].subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/tailoring"
              className="flex-1 min-w-[180px] max-w-[235px] h-[48px] lg:h-[56px] flex items-center justify-center rounded-full bg-[#245749] text-white text-sm lg:text-base font-[500] hover:bg-[#184335] transition-colors"
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              Customize your Clothing
            </Link>
            <Link
              href="/shop"
              className="flex-1 min-w-[160px] max-w-[235px] h-[48px] lg:h-[56px] flex items-center justify-center rounded-full bg-[#FAFAFA] border border-[#245749] text-[#245749] text-sm lg:text-base font-[500] hover:bg-white transition-colors"
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              Shop Ready-Made
            </Link>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2 pb-2 justify-center lg:justify-start">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all ${
                i === active
                  ? "bg-[#245749] w-[10px] h-[10px]"
                  : "bg-[#B7C5C0] w-[8px] h-[8px]"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
