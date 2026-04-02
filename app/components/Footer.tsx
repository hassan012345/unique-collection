"use client";

import Link from "next/link";
import Image from "next/image";

// local copies from public/ (downloaded from Figma)
const logoUrl = "/Logo.png";

// Payment card images (local placeholders)
const paymentCards = [
  "/ApplePay.png",
  "/GPay.png",
  "/UnionPay.png",
  "/VisaPay.png",
];

const footerLinks = {
  Shop: [
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Unstitched", href: "/unstitched" },
    { label: "Formal Wear", href: "/formal" },
    { label: "Sale", href: "/sale" },
    { label: "New Arrivals", href: "/new-arrivals" },
  ],
  Tailoring: [
    { label: "Customize Outfit", href: "/tailoring/customize" },
    { label: "Unstitched", href: "/unstitched" },
  ],
  Account: [
    { label: "Dashboard", href: "/account" },
    { label: "Orders", href: "/account/orders" },
    { label: "Saved", href: "/account/saved" },
    { label: "Measurements", href: "/account/measurements" },
  ],
  Company: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#171717] px-5 lg:px-20 py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Brand column */}
          <div className="flex flex-col gap-5 max-w-[275px]">
            <div className="flex flex-col gap-5">
              <img
                src={logoUrl}
                alt="Unique Collection"
                className="h-[41px] w-auto"
              />
              <p
                className="text-[#D4D4D4] text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-neue-montreal)",
                  fontWeight: 400,
                }}
              >
                Peshawar's premier destination for custom and ready-made
                menswear
              </p>
            </div>
            {/* Social */}
            <div className="flex items-center gap-4">
              <span
                className="text-white text-base font-[700]"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
              >
                Follow Us
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="bg-[#262626] w-[34px] h-[34px] rounded-full flex items-center justify-center hover:bg-[#333] transition-colors"
                  aria-label="Facebook"
                >
                  <Image
                    src={'/Facebook.png'}
                    alt="Facebook"
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="bg-[#262626] w-[34px] h-[34px] rounded-full flex items-center justify-center hover:bg-[#333] transition-colors"
                  aria-label="Instagram"
                >
                  <Image
                    src={'/Instagram.png'}
                    alt="Instagram"
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="bg-[#262626] w-[34px] h-[34px] rounded-full flex items-center justify-center hover:bg-[#333] transition-colors"
                  aria-label="Twitter"
                >
                  <Image
                    src={'/X.png'}
                    alt="Twitter"
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-4 lg:gap-5">
                <h4
                  className="text-white text-base font-[700]"
                  style={{ fontFamily: "var(--font-neue-montreal)" }}
                >
                  {section}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[#D4D4D4] text-sm hover:text-white transition-colors"
                        style={{
                          fontFamily: "var(--font-neue-montreal)",
                          fontWeight: 400,
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#262626]" />

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <p
            className="text-[#D4D4D4] text-sm text-center lg:text-left"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
          >
            © 2026 Unique Collection. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/privacy"
              className="text-[#D4D4D4] text-sm hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              Privacy Policy
            </Link>
            <span className="text-[#737373]">•</span>
            <Link
              href="/terms"
              className="text-[#D4D4D4] text-sm hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#262626]" />

        {/* Payment methods */}
        <div className="flex flex-wrap items-center justify-end gap-3">
          <span
            className="text-[#D4D4D4] text-sm mr-1"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
          >
            Accepted Payment Method
          </span>
          {paymentCards.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Payment method ${i + 1}`}
              className="h-[24px] w-[38px] object-contain"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
