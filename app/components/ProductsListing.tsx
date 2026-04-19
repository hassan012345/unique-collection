"use client";

/**
 * components/ProductListingPage.tsx
 *
 * Key design decisions (matching your Figma):
 *
 * - NO inline sidebar on desktop. The filter panel is always a
 *   right-side slide-in triggered by the filter icon, same on
 *   both desktop and mobile.
 *
 * - Filter icon sits next to the pills row (desktop) and next to
 *   the page title (mobile) — both open the same panel.
 *
 * - One filter group: Category, checkbox only.
 *   Options come from the `filterOptions` prop so they're driven
 *   by config/filters.ts in the page file.
 *
 * - Full-width product grid (4 cols desktop, 2 cols mobile).
 *
 * - Active chips shown below the pill strip when filters are on.
 *
 * - Pagination + sort dropdown included.
 */

import { useState, useMemo } from "react";
import Breadcrumb, { type BreadcrumbItem } from "@/components/BreadCrumb";
import FilterSidebar, { type FilterOption } from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductsGrid";
import type { Product } from "@/config/products";
import { SORT_OPTIONS, type SortValue } from "@/config/filters";

// ── Icons ──────────────────────────────────────────────────────────
function FilterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M3 5h14M6 10h8M9 15h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseSmIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path
        d="M1 1l8 8M9 1L1 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── Props ──────────────────────────────────────────────────────────
interface Props {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  products: Product[];
  filterOptions: FilterOption[]; // category options from config
  pills?: { label: string; value: string }[];
}

const PAGE_SIZE = 12;

export default function ProductListingPage({
  title,
  description,
  breadcrumbs,
  products,
  filterOptions,
  pills = [],
}: Props) {
  // ── State ──────────────────────────────────────────────────────
  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState<SortValue>("featured");
  const [activePill, setActivePill] = useState(0);
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  // ── Filter + sort ──────────────────────────────────────────────
  const filtered = useMemo(() => {
    let list = [...products];

    if (selected.length > 0) {
      list = list.filter((p) =>
        selected.some((v) => p.href.split("/").pop()?.includes(v)),
      );
    }

    if (sort === "price-asc")
      list.sort(
        (a, b) =>
          parseInt(a.price.replace(/\D/g, "")) -
          parseInt(b.price.replace(/\D/g, "")),
      );
    if (sort === "price-desc")
      list.sort(
        (a, b) =>
          parseInt(b.price.replace(/\D/g, "")) -
          parseInt(a.price.replace(/\D/g, "")),
      );

    return list;
  }, [products, selected, sort]);

  // ── Pagination ─────────────────────────────────────────────────
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // ── Active chips ───────────────────────────────────────────────
  const activeChips = useMemo(
    () => filterOptions.filter((o) => selected.includes(o.value)),
    [filterOptions, selected],
  );

  function dismissChip(value: string) {
    setSelected((s) => s.filter((v) => v !== value));
    setPage(1);
  }

  function clearAll() {
    setSelected([]);
    setPage(1);
  }

  // ── Filter button (shared between desktop + mobile) ────────────
  const FilterButton = (
    <button
      type="button"
      onClick={() => setFilterOpen(true)}
      className="flex items-center gap-1.5 border border-[#184335] text-[#184335] rounded-full px-3 py-1.5 text-sm font-medium hover:bg-[#E8ECEB] transition-colors flex-none"
      style={{ fontFamily: "var(--font-neue-montreal)" }}
    >
      <FilterIcon />
      Filters
      {selected.length > 0 && (
        <span className="bg-[#184335] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
          {selected.length}
        </span>
      )}
    </button>
  );

  return (
    <>
      {/* ── Page header ───────────────────────────────────────── */}
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-5 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            <h1
              className="text-[28px] lg:text-[40px] font-semibold text-[#0A1C16] leading-tight"
              style={{ fontFamily: "var(--font-perfectly-nineties)" }}
            >
              {title}
            </h1>
            {/* Mobile filter button — shows only when there are NO pills */}
            {pills.length === 0 && <div>{FilterButton}</div>}
          </div>
          {description && (
            <p
              className="text-sm text-[#46695D] max-w-xl mt-1"
              style={{
                fontFamily: "var(--font-neue-montreal)",
                fontWeight: 400,
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {/* ── Pill strip + filter icon ───────────────────────────── */}
      {pills.length > 0 && (
        <div className="w-full bg-white border-b border-[#E5E5E5] sticky top-[63px] z-30">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-3 flex items-center gap-3">
            {/* Pills */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5 flex-1 min-w-0">
              {pills.map((pill, i) => (
                <button
                  key={pill.value}
                  type="button"
                  onClick={() => {
                    setActivePill(i);
                    setPage(1);
                  }}
                  className={`
                    flex-none px-4 py-1.5 rounded-full text-sm border transition-colors whitespace-nowrap
                    ${
                      i === activePill
                        ? "bg-[#E8ECEB] text-[#184335] border-[#184335]"
                        : "bg-white text-[#525252] border-[#E5E5E5] hover:border-[#184335] hover:text-[#184335]"
                    }
                  `}
                  style={{
                    fontFamily: "var(--font-neue-montreal)",
                    fontWeight: 500,
                  }}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Filter icon — SAME button for both desktop and mobile */}
            {FilterButton}
          </div>
        </div>
      )}

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-6 lg:py-8">
        {/* Sort + result count */}
        <div className="flex items-center justify-between mb-4 gap-4">
          <p
            className="text-sm text-[#737373]"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
          >
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value as SortValue);
                setPage(1);
              }}
              className="appearance-none pl-3 pr-8 py-2 border border-[#E5E5E5] rounded-lg text-sm text-[#525252] bg-white hover:border-[#184335] focus:outline-none focus:border-[#184335] cursor-pointer"
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="#737373"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Active filter chips */}
        {activeChips.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {activeChips.map((chip) => (
              <span
                key={chip.value}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#E8ECEB] text-[#184335] text-xs rounded-full font-medium"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
              >
                {chip.label}
                <button
                  type="button"
                  onClick={() => dismissChip(chip.value)}
                  aria-label={`Remove ${chip.label}`}
                  className="hover:text-[#0A1C16] transition-colors"
                >
                  <CloseSmIcon />
                </button>
              </span>
            ))}
            <button
              type="button"
              onClick={clearAll}
              className="text-xs text-[#737373] hover:text-[#171717] underline underline-offset-2 transition-colors"
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              Clear all
            </button>
          </div>
        )}

        <ProductGrid products={paginated} onClear={clearAll} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 border border-[#E5E5E5] rounded-lg text-sm text-[#525252] hover:border-[#184335] hover:text-[#184335] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  p === page
                    ? "bg-[#184335] text-white"
                    : "border border-[#E5E5E5] text-[#525252] hover:border-[#184335] hover:text-[#184335]"
                }`}
                style={{ fontFamily: "var(--font-neue-montreal)" }}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 border border-[#E5E5E5] rounded-lg text-sm text-[#525252] hover:border-[#184335] hover:text-[#184335] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* ── Filter panel (right-side, same for desktop + mobile) ── */}
      {filterOpen && (
        <FilterSidebar
          options={filterOptions}
          selected={selected}
          onChange={(vals) => {
            setSelected(vals);
            setPage(1);
          }}
          onClose={() => setFilterOpen(false)}
          productCount={filtered.length}
        />
      )}
    </>
  );
}
