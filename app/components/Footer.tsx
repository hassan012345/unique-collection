"use client";

import Link from "next/link";

const logoUrl = "https://www.figma.com/api/mcp/asset/a3c25e0e-b9b4-4fdf-a76b-edd12d4f42ed";
const facebookIcon = "https://www.figma.com/api/mcp/asset/12693f50-d2fb-42fa-aba4-cb930f10e092";
const twitterIcon = "https://www.figma.com/api/mcp/asset/c92825bc-b4a9-4bb1-915a-7e56702c8685";

// Payment card images from Figma
const paymentCards = [
  "https://www.figma.com/api/mcp/asset/83af4236-d640-4b05-8309-73225211e517",
  "https://www.figma.com/api/mcp/asset/0896b752-9f4c-49c1-a7ca-1a869c4c7f4d",
  "https://www.figma.com/api/mcp/asset/3b1a8a61-9c4d-431e-9f07-f0d984b3c774",
  "https://www.figma.com/api/mcp/asset/46b31901-16db-465f-9eb3-bdbdefce9119",
];

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1" fill="white"/>
    </svg>
  );
}

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
              <img src={logoUrl} alt="Unique Collection" className="h-[41px] w-auto" />
              <p
                className="text-[#D4D4D4] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                Peshawar's premier destination for custom and ready-made menswear
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
                <a href="#" className="bg-[#262626] w-[34px] h-[34px] rounded-full flex items-center justify-center hover:bg-[#333] transition-colors" aria-label="Facebook">
                  <img src={facebookIcon} alt="Facebook" className="w-[13px] h-[13px] object-contain" />
                </a>
                <a href="#" className="bg-[#262626] w-[34px] h-[34px] rounded-full flex items-center justify-center hover:bg-[#333] transition-colors" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="#" className="bg-[#262626] w-[34px] h-[34px] rounded-full flex items-center justify-center hover:bg-[#333] transition-colors" aria-label="Twitter">
                  <img src={twitterIcon} alt="Twitter" className="w-[13px] h-[13px] object-contain" />
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
                        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
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
            <Link href="/privacy" className="text-[#D4D4D4] text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-neue-montreal)" }}>
              Privacy Policy
            </Link>
            <span className="text-[#737373]">•</span>
            <Link href="/terms" className="text-[#D4D4D4] text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-neue-montreal)" }}>
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
            <img key={i} src={src} alt={`Payment method ${i + 1}`} className="h-[24px] w-[38px] object-contain" />
          ))}
        </div>
      </div>
    </footer>
  );
}
