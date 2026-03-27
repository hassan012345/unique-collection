"use client";

/**
 * components/FilterSidebar.tsx
 *
 * Right-side slide-in panel — triggered by the filter icon on BOTH
 * desktop and mobile (exactly as in Figma).
 *
 * Structure (matches screenshot):
 *   ┌─────────────────────────┐
 *   │ Filter Results       ✕  │  ← fixed header
 *   ├─────────────────────────┤
 *   │ Category          ︿   │  ← collapsible group header
 *   │  ☑ New Arrivals         │
 *   │  ☑ Sale                 │
 *   │  ☐ Unstitched           │
 *   │  ...                    │  ← scrollable body
 *   ├─────────────────────────┤
 *   │  [ View N Products ]    │  ← fixed footer
 *   └─────────────────────────┘
 *
 * Props:
 *   options       – checkbox items: { label, value }[]
 *   selected      – string[] of active values
 *   onChange      – (values: string[]) => void
 *   onClose       – () => void
 *   productCount  – shown on the Apply button
 */

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────
export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterSidebarProps {
  options:      FilterOption[];
  selected:     string[];
  onChange:     (values: string[]) => void;
  onClose:      () => void;
  productCount?: number;
}

// ── Custom checkbox ────────────────────────────────────────────────
function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className={`
        flex-none w-[18px] h-[18px] rounded-[4px] border transition-colors duration-150
        flex items-center justify-center
        ${checked
          ? "bg-[#184335] border-[#184335]"
          : "bg-white border-[#D4D4D4] hover:border-[#184335]"}
      `}
    >
      {checked && (
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden>
          <path
            d="M1.5 4.5L4 7L9.5 1.5"
            stroke="white" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

// ── Chevron ────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden
      className={`flex-none transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M4 6L8 10L12 6" stroke="#525252"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────────
export default function FilterSidebar({
  options, selected, onChange, onClose, productCount,
}: FilterSidebarProps) {
  const [open, setOpen] = useState(true);

  function toggle(value: string) {
    onChange(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  }

  function clearAll() {
    onChange([]);
  }

  return (
    <>
      {/* ── Backdrop ──────────────────────────────────────────── */}
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={onClose}
        aria-hidden
      />

      {/* ── Panel ─────────────────────────────────────────────── */}
      <div
        className="fixed top-0 right-0 h-full z-50 bg-white flex flex-col shadow-2xl"
        style={{ width: "min(300px, 88vw)" }}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E5E5] flex-none">
          <h2
            className="text-base font-semibold text-[#171717]"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
          >
            Filter Results
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M4 4l10 10M14 4L4 14" stroke="#171717"
                strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-3">

          {/* Clear link */}
          {selected.length > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="text-xs font-medium text-[#184335] underline underline-offset-2 mb-4 block hover:text-[#0A1C16] transition-colors"
              style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
              Clear all ({selected.length})
            </button>
          )}

          {/* Divider above first group */}
          <div className="h-px bg-[#E5E5E5] mb-0" />

          {/* ── Category group ── */}
          <div>
            {/* Group header */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="w-full flex items-center justify-between py-3"
            >
              <span
                className="text-sm font-medium text-[#171717]"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
              >
                Category
              </span>
              <Chevron open={open} />
            </button>

            {/* Checkbox list */}
            {open && (
              <ul className="flex flex-col gap-[14px] pb-4">
                {options.map((opt) => (
                  <li key={opt.value}>
                    <label className="flex items-center gap-3 cursor-pointer group/opt">
                      <Checkbox
                        checked={selected.includes(opt.value)}
                        onChange={() => toggle(opt.value)}
                      />
                      <span
                        className={`text-sm leading-[1.5] select-none transition-colors ${
                          selected.includes(opt.value)
                            ? "text-[#171717] font-medium"
                            : "text-[#525252] group-hover/opt:text-[#171717]"
                        }`}
                        style={{
                          fontFamily: "var(--font-neue-montreal)",
                          fontWeight: selected.includes(opt.value) ? 500 : 400,
                        }}
                      >
                        {opt.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            )}

            <div className="h-px bg-[#E5E5E5]" />
          </div>
        </div>

        {/* Footer — Apply button */}
        <div className="flex-none px-5 py-4 border-t border-[#E5E5E5]">
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-[#184335] hover:bg-[#0A1C16] text-white text-sm font-medium py-3 rounded-lg transition-colors"
            style={{ fontFamily: "var(--font-neue-montreal)" }}
          >
            {productCount !== undefined
              ? `View ${productCount} Product${productCount !== 1 ? "s" : ""}`
              : "Apply Filters"}
          </button>
        </div>

      </div>
    </>
  );
}   