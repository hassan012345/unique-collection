"use client";

/**
 * components/order-confirmation/OrderItemsList.tsx
 *
 * Figma specs:
 *   Section heading: Neue Montreal Medium 28px black, gap-24 above card
 *   Card outer:      bg-#F5F5F5, border 1px #E8ECEB, radius 24px, p-32, gap-32 between items
 *
 *   Each item row:
 *     Image:   100×100px, radius 12px, border 1px white, shadow 0px 4px 5px rgba(0,0,0,0.25)
 *     Gap between image and text: 23px
 *     Name:    Neue Montreal Medium 18px black, truncated
 *     Variant: Neue Montreal Regular 18px #737373 (e.g. "Red / S"), truncated
 *     Price:   Neue Montreal Regular 18px #737373, right-aligned, whitespace-nowrap
 *     Gap (name→variant): 6px
 */

const NM = "var(--font-neue-montreal)";

export interface OrderLineItem {
  id:      string;
  name:    string;
  variant: string;   // e.g. "Red / S"
  price:   string;   // pre-formatted, e.g. "Rs 4,500.00"
  image:   string;
}

function OrderItem({ item }: { item: OrderLineItem }) {
  return (
    <div className="flex items-center gap-3 w-full">
      {/* Thumbnail */}
      <div
        className="shrink-0 overflow-hidden"
        style={{
          width:        "100px",
          height:       "100px",
          borderRadius: "12px",
          border:       "1px solid white",
          boxShadow:    "0px 4px 5px 0px rgba(0,0,0,0.25)",
          background:   "#D9D9D9",
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          style={{ borderRadius: "12px" }}
        />
      </div>

      {/* Name + variant */}
      <div
        className="flex flex-col flex-1 min-w-0"
        style={{ gap: "6px" }}
      >
        <p
          className="text-[18px] font-medium text-black leading-[1.5] overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ fontFamily: NM }}
        >
          {item.name}
        </p>
        <p
          className="text-[18px] text-[#737373] leading-[1.5] overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          {item.variant}
        </p>
      </div>

      {/* Price — right-aligned */}
      <p
        className="text-[18px] text-[#737373] leading-[1.5] whitespace-nowrap shrink-0"
        style={{ fontFamily: NM, fontWeight: 400 }}
      >
        {item.price}
      </p>
    </div>
  );
}

interface Props {
  items: OrderLineItem[];
}

export default function OrderItemsList({ items }: Props) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Section heading */}
      <h2
        className="text-[28px] font-medium text-black leading-[1.5]"
        style={{ fontFamily: NM }}
      >
        Order Items
      </h2>

      {/* Items card */}
      <div
        className="flex flex-col w-full"
        style={{
          backgroundColor: "#F5F5F5",
          border:          "1px solid #E8ECEB",
          borderRadius:    "24px",
          padding:         "32px",
          gap:             "32px",
        }}
      >
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
