"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items?:     BreadcrumbItem[];
  className?: string;
}


const ROUTE_LABELS: Record<string, string> = {
  men:               "Men's Collection",
  women:             "Women's Collection",
  sale:              "Sale",
  tailoring:         "Custom Tailoring",
  unstitched:        "Unstitched",
  "new-arrival":     "New Arrival",
  "new-arrivals":    "New Arrivals",
  "shalwaar-kameez": "Shalwaar Kameez",
  "waist-coats":     "Waist Coats",
  "3-piece-suits":   "3-Piece Suits",
  blazers:           "Blazers",
  kurtas:            "Kurtas",
  formal:            "Formal Wear",
  account:           "Account",
  orders:            "Orders",
  saved:             "Saved",
  measurements:      "Measurements",
};

function slugToLabel(slug: string) {
  return (
    ROUTE_LABELS[slug] ??
    slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")
  );
}

function useAutoCrumbs(): BreadcrumbItem[] {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
  segments.forEach((seg, i) => {
    const isLast = i === segments.length - 1;
    crumbs.push({
      label: slugToLabel(seg),
      href:  isLast ? undefined : "/" + segments.slice(0, i + 1).join("/"),
    });
  });
  return crumbs;
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M5.5 3L8.5 7L5.5 11" stroke="#A1A1A1" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Breadcrumb({ items, className }: Props) {
  const auto   = useAutoCrumbs();
  const crumbs = items ?? auto;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1"
        itemScope itemType="https://schema.org/BreadcrumbList">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-1"
              itemProp="itemListElement" itemScope
              itemType="https://schema.org/ListItem">
              {i > 0 && <ChevronRight />}

              {isLast || !crumb.href ? (
                <span
                  className="text-sm font-medium text-[#171717]"
                  style={{ fontFamily: "var(--font-neue-montreal)" }}
                  aria-current="page" itemProp="name"
                >
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href}
                  className="text-sm text-[#737373] hover:text-[#184335] transition-colors"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                  itemProp="item">
                  <span itemProp="name">{crumb.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}