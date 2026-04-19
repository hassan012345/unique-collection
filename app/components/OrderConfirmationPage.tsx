"use client";

/**
 * components/OrderConfirmationPage.tsx
 *
 * Pixel-perfect from Figma node 2130:10295
 *
 * Outer wrapper:  px-10 py-32, flex items-center justify-center
 * Inner max-w:    1039px, flex-col, gap-32, items-center
 *
 * Sections (top → bottom):
 *   1. OrderConfirmationHero   — check icon + heading + subtitle
 *   2. OrderMetaCards          — ORDER NUMBER / DATE / TOTAL
 *   3. OrderItemsList          — "Order Items" + cart items card
 *   4. OrderInfoCards          — Shipping Address + Payment Method
 *   5. Continue Shopping btn   — full-width green pill
 *
 * Accepts either static props (from server component) or dynamic
 * data from the cart store after a successful payment.
 */

import Link from "next/link";
import OrderConfirmationHero               from "@/components/OrderConfirmationHero";
import OrderMetaCards, { type OrderMeta }  from "@/components/OrderMetaCards";
import OrderItemsList,  { type OrderLineItem } from "@/components/OrderItemsList";
import OrderInfoCards,
  { type ShippingAddress, type PaymentMethod } from "@/components/OrderInfoCards";

const NM = "var(--font-neue-montreal)";

// ── Full order type ──────────────────────────────────────────────
export interface OrderConfirmationData {
  // Hero
  heading?:  string;
  subtitle?: string;

  // Meta cards
  meta: OrderMeta;

  // Items
  items: OrderLineItem[];

  // Info cards
  shipping: ShippingAddress;
  payment:  PaymentMethod;
}

// ── Arrow icon for button ────────────────────────────────────────
function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M3.75 9h10.5M10 4.5l4.5 4.5-4.5 4.5"
        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Page component ───────────────────────────────────────────────
export default function OrderConfirmationPage({
  heading,
  subtitle,
  meta,
  items,
  shipping,
  payment,
}: OrderConfirmationData) {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{ padding: "32px 10px" }}
    >
      {/* Inner content — max-w 1039px, gap-32 between all sections */}
      <div
        className="flex flex-col items-center w-full"
        style={{ maxWidth: "1039px", gap: "32px" }}
      >

        {/* 1. Hero */}
        <OrderConfirmationHero heading={heading} subtitle={subtitle} />

        {/* 2. Meta cards */}
        <OrderMetaCards
          orderNumber={meta.orderNumber}
          orderDate={meta.orderDate}
          orderTotal={meta.orderTotal}
        />

        {/* 3. Order items */}
        <OrderItemsList items={items} />

        {/* 4. Shipping + Payment */}
        <OrderInfoCards shipping={shipping} payment={payment} />

        {/* 5. Continue Shopping button */}
        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2 transition-colors"
          style={{
            height:          "56px",
            backgroundColor: "#245749",
            borderRadius:    "999px",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#184335"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#245749"; }}
        >
          <span
            className="text-[16px] font-medium text-white leading-[1.5] whitespace-nowrap"
            style={{ fontFamily: NM }}
          >
            Continue Shopping
          </span>
        </Link>

      </div>
    </div>
  );
}
