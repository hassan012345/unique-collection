"use client";

/**
 * components/order-confirmation/OrderMetaCards.tsx
 *
 * Figma specs (each card):
 *   Width:          325px (flex in a row, gap-32)
 *   bg:             #F5F5F5
 *   border:         1px solid #B7C5C0
 *   border-radius:  24px
 *   padding:        24px
 *   gap:            16px between label and value
 *   Label:          Neue Montreal Medium 20px #245749, uppercase
 *   Value:          Neue Montreal Medium 28px black
 *
 * On mobile: stacks vertically (flex-col)
 */

const NM = "var(--font-neue-montreal)";

export interface OrderMeta {
  orderNumber: string;   // e.g. "#PK-3293712901"
  orderDate:   string;   // e.g. "OCT 24, 2026"
  orderTotal:  string;   // e.g. "Rs. 18,500"
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex flex-col gap-4 flex-1"
      style={{
        backgroundColor: "#F5F5F5",
        border:          "1px solid #B7C5C0",
        borderRadius:    "24px",
        padding:         "24px",
        minWidth:        "0",
      }}
    >
      <p
        className="text-[20px] font-medium text-[#245749] leading-[1.5]"
        style={{ fontFamily: NM }}
      >
        {label}
      </p>
      <p
        className="text-[28px] font-medium text-black leading-[1.5]"
        style={{ fontFamily: NM }}
      >
        {value}
      </p>
    </div>
  );
}

export default function OrderMetaCards({ orderNumber, orderDate, orderTotal }: OrderMeta) {
  return (
    <div className="flex flex-col sm:flex-row gap-8 w-full">
      <MetaCard label="ORDER NUMBER" value={orderNumber} />
      <MetaCard label="ORDER DATE"   value={orderDate}   />
      <MetaCard label="ORDER TOTAL"  value={orderTotal}  />
    </div>
  );
}
