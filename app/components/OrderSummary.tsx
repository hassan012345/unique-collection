"use client";

/**
 * components/checkout/OrderSummary.tsx
 *
 * Figma — right panel "Items in Cart":
 *   Background:   #F5F5F5 (light grey panel)
 *   Border-radius: 12px
 *   Padding:       24px
 *
 *   Each item row:
 *     Product image: 64×72px rounded-lg
 *     Name:          14px medium #171717
 *     Variant:       13px regular #737373 (e.g. "Red / S")
 *     Qty controls:  − N + inline, small grey text
 *     Delete icon:   green trash top-right
 *     Price:         14px regular #171717 right-aligned
 *
 *   Subtotal row:   "Subtotal (N items)"  + price
 *   Shipping row:   "Shipping"            + price
 *   Divider line
 *   Total row:      "Total" bold          + bold price (both bigger)
 *
 *   Pay Now button: full width, green pill, "Pay Now →"
 */

import { useState } from "react";
import CartProduct from "./CartItem";

const NM = "var(--font-neue-montreal)";

export interface CartItem {
  id: string;
  name: string;
  variant: string; // e.g. "Red / S"
  price: number;
  qty: number;
  image: string;
}

interface Props {
  items: CartItem[];
  shippingCost: number;
  onItemQtyChange: (id: string, qty: number) => void;
  onItemRemove: (id: string) => void;
  onPayNow: () => void;
}

function formatPKR(n: number) {
  return `Rs ${n.toLocaleString("en-PK", { minimumFractionDigits: 2 })}`;
}

/* ── Trash icon ─────────────────────────────────────────────────── */
function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 4h12M5.5 4V3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1M6.5 7v5M9.5 7v5M3 4l.75 9a1 1 0 001 .9h6.5a1 1 0 001-.9L13 4"
        stroke="#184335"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Arrow right ────────────────────────────────────────────────── */
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Single cart item ───────────────────────────────────────────── */
function CartItemRow({
  item,
  onQtyChange,
  onRemove,
}: {
  item: CartItem;
  onQtyChange: (qty: number) => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-[#E5E5E5] last:border-0">
      {/* Thumbnail */}
      <div
        className="flex-none rounded-lg overflow-hidden bg-[#EBEBEB]"
        style={{ width: "64px", height: "72px" }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        {/* Name + trash */}
        <div className="flex items-start justify-between gap-2">
          <p
            className="text-[14px] font-medium text-[#171717] leading-snug"
            style={{ fontFamily: NM }}
          >
            {item.name}
          </p>
          <button
            type="button"
            onClick={onRemove}
            className="flex-none hover:opacity-70 transition-opacity mt-0.5"
            aria-label="Remove item"
          >
            <TrashIcon />
          </button>
        </div>

        {/* Variant */}
        <p
          className="text-[13px] text-[#737373]"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          {item.variant}
        </p>

        {/* Qty controls + price */}
        <div className="flex items-center justify-between mt-1">
          {/* − qty + */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onQtyChange(Math.max(1, item.qty - 1))}
              className="w-6 h-6 flex items-center justify-center text-[#525252] hover:text-[#171717]
                text-base leading-none select-none transition-colors"
            >
              −
            </button>
            <span
              className="text-[14px] text-[#171717] min-w-[16px] text-center"
              style={{ fontFamily: NM, fontWeight: 400 }}
            >
              {item.qty}
            </span>
            <button
              type="button"
              onClick={() => onQtyChange(item.qty + 1)}
              className="w-6 h-6 flex items-center justify-center text-[#525252] hover:text-[#171717]
                text-base leading-none select-none transition-colors"
            >
              +
            </button>
          </div>

          {/* Price */}
          <p
            className="text-[14px] text-[#171717]"
            style={{ fontFamily: NM, fontWeight: 400 }}
          >
            {formatPKR(item.price * item.qty)}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
export default function OrderSummary({
  items,
  shippingCost,
  onItemQtyChange,
  onItemRemove,
  onPayNow,
}: Props) {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + shippingCost;
  const itemCount = items.reduce((s, i) => s + i.qty, 0);

  return (
    <div
      className="flex flex-col gap-4 rounded-xl p-6"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      {/* Heading */}
      <h2
        className="text-[16px] font-semibold text-[#171717]"
        style={{ fontFamily: NM }}
      >
        Items in Cart
      </h2>

      {/* Cart items */}
      <CartProduct
        id="1"
        name="Classic White Shalwar Kameez"
        variant="Red / S"
        price={4500}
        image="/images/product1.jpg"
        quantity={2}
        onIncrease={(id) => console.log("increase", id)}
        onDecrease={(id) => console.log("decrease", id)}
        onRemove={(id) => console.log("remove", id)}
      />
      <div className="flex flex-col">
        {items.map((item) => (
          <CartItemRow
            key={item.id}
            item={item}
            onQtyChange={(qty) => onItemQtyChange(item.id, qty)}
            onRemove={() => onItemRemove(item.id)}
          />
        ))}
      </div>

      {/* Subtotal */}
      <div className="flex items-center justify-between pt-1">
        <p
          className="text-[14px] text-[#525252]"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
        </p>
        <p
          className="text-[14px] text-[#171717]"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          {formatPKR(subtotal)}
        </p>
      </div>

      {/* Shipping */}
      <div className="flex items-center justify-between">
        <p
          className="text-[14px] text-[#525252]"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          Shipping
        </p>
        <p
          className="text-[14px] text-[#171717]"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          {formatPKR(shippingCost)}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#E5E5E5]" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <p
          className="text-[16px] font-semibold text-[#171717]"
          style={{ fontFamily: NM }}
        >
          Total
        </p>
        <p
          className="text-[16px] font-semibold text-[#171717]"
          style={{ fontFamily: NM }}
        >
          {formatPKR(total)}
        </p>
      </div>

      {/* Pay Now */}
      <button
        type="button"
        onClick={onPayNow}
        className="w-full h-12 flex items-center justify-center gap-2 rounded-full
          text-white text-[15px] font-medium transition-colors"
        style={{
          fontFamily: NM,
          backgroundColor: "#184335",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "#0A1C16";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "#184335";
        }}
      >
        Pay Now
        <ArrowRight />
      </button>
    </div>
  );
}
