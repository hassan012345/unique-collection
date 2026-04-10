"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import CartDrawer from "@/components/Cart";

const logoUrl = "/Logo.png";

// ── Dropdown data (from Figma screenshots) ────────────────────────
const DROPDOWNS = {
  Sale: {
    columns: [
      {
        heading: "Men's Collection",
        links: [
          "New Arrival",
          "Sale",
          "Unstitched",
          "Shalwaar Kameez",
          "Kurtas",
          "Waist Coats",
          "3-Piece Suits",
          "Blazers",
        ],
      },
      {
        heading: "Women's Collection",
        links: [
          "New Arrival",
          "Sale",
          "Unstitched",
          "Shalwaar Kameez",
          "Kurtas",
        ],
      },
    ],
  },
  Men: {
    columns: [
      {
        heading: "Men's Collection",
        links: [
          "New Arrival",
          "Sale",
          "Unstitched",
          "Shalwaar Kameez",
          "Kurtas",
          "Waist Coats",
          "3-Piece Suits",
          "Blazers",
        ],
      },
    ],
  },
  Women: {
    columns: [
      {
        heading: "Women's Collection",
        links: [
          "New Arrival",
          "Sale",
          "Unstitched",
          "Shalwaar Kameez",
          "Kurtas",
        ],
      },
    ],
  },
} as const;

type NavItemKey = keyof typeof DROPDOWNS;

const NAV_ITEMS: { label: string; href: string; hasDropdown: boolean }[] = [
  { label: "Sale", href: "/sale", hasDropdown: true },
  { label: "Men", href: "/men", hasDropdown: true },
  { label: "Women", href: "/women", hasDropdown: true },
  { label: "Custom Tailoring", href: "/tailoring", hasDropdown: false },
];

// ── Mobile sections (from Figma Image 4) ─────────────────────────
const MOBILE_SECTIONS = [
  {
    heading: "Men's Collection",
    links: [
      "New Arrival",
      "Sale",
      "Unstitched",
      "Shalwaar Kameez",
      "Kurtas",
      "Waist Coats",
      "3-Piece Suits",
      "Blazers",
    ],
    href: "/men",
  },
  {
    heading: "Women's Collection",
    links: ["New Arrival", "Sale", "Unstitched", "Shalwaar Kameez", "Kurtas"],
    href: "/women",
  },
  {
    heading: "Account",
    links: [],
    href: "/account",
  },
];

// ── SVG Icons ─────────────────────────────────────────────────────
function ChevronDown({ open }: { open?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4L6 7.5L9.5 4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="9.5" cy="9.5" r="6.5" stroke="white" strokeWidth="1.8" />
      <path
        d="M14.5 14.5L19 19"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="7" r="4" stroke="white" strokeWidth="1.8" />
      <path
        d="M3 19c0-4 3.58-7 8-7s8 3 8 7"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon({ count = 0 }: { count?: number }) {
  return (
    <div className="relative">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 3h2l2.68 10.39a2 2 0 001.94 1.61h7.72a2 2 0 001.94-1.51L20.6 7H6"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="20" r="1.2" fill="white" />
        <circle cx="17" cy="20" r="1.2" fill="white" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-[#FFB86A] text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
          {count}
        </span>
      )}
    </div>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {open ? (
        <>
          <line
            x1="4"
            y1="4"
            x2="20"
            y2="20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="4"
            x2="4"
            y2="20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <line
            x1="3"
            y1="6"
            x2="21"
            y2="6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="18"
            x2="21"
            y2="18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

// ── Mega-dropdown panel ────────────────────────────────────────────
function MegaDropdown({ item }: { item: NavItemKey }) {
  const data = DROPDOWNS[item];
  return (
    <div
      className="absolute top-full left-0 w-full bg-[#184335] z-40 px-20 py-8"
      style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
    >
      <div className="max-w-[1440px] mx-auto flex gap-20">
        {data.columns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-4">
            <h3
              className="text-white text-base font-semibold"
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              {col.heading}
            </h3>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    href={`/${item.toLowerCase()}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[#B7C5C0] text-sm hover:text-white transition-colors"
                    style={{
                      fontFamily: "var(--font-neue-montreal)",
                      fontWeight: 400,
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Navbar ────────────────────────────────────────────────────
export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<NavItemKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavHover = (label: string) => {
    if (label in DROPDOWNS) setActiveDropdown(label as NavItemKey);
    else setActiveDropdown(null);
  };

  return (
    <nav ref={navRef} className="w-full bg-[#184335] sticky top-0 z-50">
      {/* ── Desktop bar ─────────────────────────────────────────── */}
      <div
        className="hidden lg:flex max-w-[1440px] mx-auto px-20 py-4 items-center justify-between relative"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src={logoUrl}
            alt="Unique Collection"
            className="h-[31px] w-auto"
          />
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-16">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleNavHover(item.label)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-sm transition-colors ${
                  activeDropdown === item.label
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
                style={{
                  fontFamily: "var(--font-neue-montreal)",
                  fontWeight: 400,
                }}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown open={activeDropdown === item.label} />
                )}
              </Link>

              {/* Underline indicator */}
              {activeDropdown === item.label && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-white rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button
            className="text-white hover:text-white/70 transition-colors"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
          <button
            className="text-white hover:text-white/70 transition-colors"
            aria-label="Account"
          >
            <UserIcon />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-white hover:text-white/70 transition-colors"
            aria-label="Cart"
          >
            <CartIcon count={2} />
          </button>
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
        </div>
      </div>

      {/* ── Desktop mega-dropdown (full-width, attached to navbar) ── */}
      {activeDropdown && (
        <div
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
          className="hidden lg:block"
        >
          <MegaDropdown item={activeDropdown} />
        </div>
      )}

      {/* ── Mobile bar ──────────────────────────────────────────── */}
      <div className="lg:hidden flex items-center justify-between px-5 py-4">
        <Link href="/" className="shrink-0">
          <img src={logoUrl} alt="Unique Collection" className="h-7 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <button className="text-white" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="text-white" aria-label="Cart">
            <CartIcon count={2} />
          </button>
          <button
            className="text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* ── Mobile slide-down menu (matches Figma Image 4) ────── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#245749] bg-[#184335] overflow-y-auto max-h-[80vh]">
          <div className="px-5 py-6 flex flex-col gap-6">
            {MOBILE_SECTIONS.map((section) => (
              <div key={section.heading} className="flex flex-col gap-3">
                {/* Section heading */}
                <Link
                  href={section.href}
                  className="text-white text-lg font-semibold"
                  style={{ fontFamily: "var(--font-neue-montreal)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {section.heading}
                </Link>

                {/* Section links */}
                {section.links.length > 0 && (
                  <ul className="flex flex-col gap-3 pl-1">
                    {section.links.map((link) => (
                      <li key={link}>
                        <Link
                          href={`/${section.href.replace("/", "")}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-[#B7C5C0] text-sm hover:text-white transition-colors"
                          style={{
                            fontFamily: "var(--font-neue-montreal)",
                            fontWeight: 400,
                          }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Custom Tailoring standalone link */}
            <div className="border-t border-[#245749] pt-4">
              <Link
                href="/tailoring"
                className="text-white text-lg font-semibold"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
                onClick={() => setMobileOpen(false)}
              >
                Custom Tailoring
              </Link>
            </div>

            {/* Account icon links */}
            <div className="border-t border-[#245749] pt-4 flex items-center gap-5">
              <Link
                href="/account"
                onClick={() => setMobileOpen(false)}
                aria-label="Account"
              >
                <UserIcon />
              </Link>
              <Link
                href="/search"
                onClick={() => setMobileOpen(false)}
                aria-label="Search"
              >
                <SearchIcon />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
