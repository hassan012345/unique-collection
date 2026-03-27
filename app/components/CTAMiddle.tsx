"use client";

import Link from "next/link";

const ctaBgUrl = "https://www.figma.com/api/mcp/asset/809487d4-71c4-4373-b684-a7b1f7b93d51";

export default function CTAMiddle() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ctaBgUrl}
          alt="CTA background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-20 py-20 lg:py-[150px] flex flex-col gap-8 items-start lg:items-center text-center">
        <div className="flex flex-col gap-5 text-white text-left lg:text-center max-w-[500px]">
          <h2
            className="text-[36px] md:text-[48px] lg:text-[64px] font-[400] leading-tight lg:leading-[69px]"
            style={{ fontFamily: "var(--font-perfectly-nineties)" }}
          >
            Customize your Unstitched Clothes
          </h2>
          <p
            className="text-sm lg:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
          >
            Buy Unstitched clothes and help us customize them according to your needs
          </p>
        </div>

        <Link
          href="/tailoring"
          className="h-[48px] lg:h-[56px] px-8 lg:px-10 flex items-center justify-center rounded-full bg-[#245749] text-white text-sm lg:text-base font-[500] hover:bg-[#184335] transition-colors whitespace-nowrap"
          style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
          Customize your Clothing
        </Link>
      </div>
    </section>
  );
}
