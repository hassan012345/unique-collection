"use client";

import Link from "next/link";

// local copies from public/ (downloaded from Figma)
const menImageUrl = "/men.png";
const womenImageUrl = "/women.png";
const arrowUrl = "/assets/arrow-right.svg"; // add your own arrow icon in public/assets/arrow-right.svg or replace with SVG component

function ArrowRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface CategoryCardProps {
  image: string;
  title: string;
  items: string[];
  href: string;
  linkLabel: string;
}

function CategoryCard({
  image,
  title,
  items,
  href,
  linkLabel,
}: CategoryCardProps) {
  return (
    <div className="relative rounded-[32px] overflow-hidden w-full h-[500px] md:flex-1 md:min-w-0 md:h-[600px] lg:h-[734px]">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3
            className="text-white text-2xl lg:text-[32px] font-[500] leading-relaxed"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
          >
            {title}
          </h3>
          <ul
            className="flex flex-col gap-1.5 text-[#E5E5E5] text-base lg:text-[18px]"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
          >
            {items.map((item) => (
              <li key={item} className="list-disc ml-5">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-white text-base lg:text-[18px] font-[700] border-b border-white pb-1.5 w-fit hover:gap-3 transition-all"
          style={{ fontFamily: "var(--font-neue-montreal)" }}
        >
          {linkLabel}
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default function GenderCategories() {
  return (
    <section className="w-full px-5 lg:px-20 py-8 lg:py-12">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        <h2
          className="text-[#0A0A0A] text-3xl lg:text-[48px] font-[600] capitalize text-center leading-relaxed"
          style={{ fontFamily: "var(--font-perfectly-nineties)" }}
        >
          Browse by Gender Category
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <CategoryCard
            image={menImageUrl}
            title="Men's Collection"
            items={["Shalwar Kameez", "Waistcoats", "Formal Wear"]}
            href="/men"
            linkLabel="View All Men's"
          />
          <CategoryCard
            image={womenImageUrl}
            title="Woman's Collection"
            items={["Shirts & Kurti", "Stitched Sets", "Unstitched Fabrics"]}
            href="/women"
            linkLabel="View All Women's"
          />
        </div>
      </div>
    </section>
  );
}
