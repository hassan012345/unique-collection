"use client";

/**
 * components/order-confirmation/OrderInfoCards.tsx
 *
 * Figma specs (each card):
 *   bg:             #F5F5F5
 *   border:         1px solid #B7C5C0
 *   border-radius:  24px
 *   padding:        24px
 *   gap (rows):     8px
 *
 *   Card header row:
 *     icon:   33×33px
 *     label:  Neue Montreal Medium 20px #245749
 *
 *   Name:    Neue Montreal Medium 18px black
 *   Details: Neue Montreal Regular 18px black
 *   TXN ID:  Neue Montreal Regular 18px #184335
 *
 * Desktop: side-by-side (flex-row, gap-24)
 * Mobile:  stacked (flex-col)
 */

const NM = "var(--font-neue-montreal)";

export interface ShippingAddress {
  name:    string;
  address: string;
  phone:   string;
}

export interface PaymentMethod {
  cardLabel:     string;   // e.g. "Visa ending in 2452"
  billedTo:      string;   // e.g. "Ahmad Hassan"
  transactionId: string;   // e.g. "TXN_2391023"
}

/* ── Truck SVG (Figma: 33×33) ─────────────────────────────────── */
function TruckIcon() {
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" aria-hidden>
      <path d="M1.5 8h18v15H1.5V8z" stroke="#245749" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.5 12.5h5l4 5v5.5h-9V12.5z" stroke="#245749" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7"  cy="24.5" r="2" stroke="#245749" strokeWidth="1.6"/>
      <circle cx="24" cy="24.5" r="2" stroke="#245749" strokeWidth="1.6"/>
    </svg>
  );
}

/* ── Credit card SVG (Figma: 33×33) ─────────────────────────────── */
function CreditCardIcon() {
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" aria-hidden>
      <rect x="2" y="6.5" width="29" height="20" rx="3"
        stroke="#245749" strokeWidth="1.6"/>
      <path d="M2 12.5h29" stroke="#245749" strokeWidth="1.6"/>
      <rect x="5.5" y="17.5" width="8" height="4" rx="1"
        fill="#245749"/>
    </svg>
  );
}

/* ── Individual info card ─────────────────────────────────────────── */
function InfoCard({
  icon, label, children,
}: {
  icon:     React.ReactNode;
  label:    string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col flex-1"
      style={{
        backgroundColor: "#F5F5F5",
        border:          "1px solid #B7C5C0",
        borderRadius:    "24px",
        padding:         "24px",
        gap:             "8px",
      }}
    >
      {/* Header: icon + label */}
      <div className="flex items-center gap-4 w-full">
        <span className="shrink-0">{icon}</span>
        <p
          className="text-[20px] font-medium text-[#245749] leading-[1.5] whitespace-nowrap"
          style={{ fontFamily: NM }}
        >
          {label}
        </p>
      </div>

      {/* Content rows */}
      {children}
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
interface Props {
  shipping: ShippingAddress;
  payment:  PaymentMethod;
}

export default function OrderInfoCards({ shipping, payment }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full">

      {/* Shipping Address */}
      <InfoCard icon={<TruckIcon />} label="Shipping Address">
        <p
          className="body-text"
          style={{ fontFamily: NM }}
        >
          {shipping.name}
        </p>
        <p
          className="text-[18px] text-black leading-[1.5]"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          {shipping.address}
        </p>
        <p
          className="text-[18px] text-black leading-[1.5]"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          {shipping.phone}
        </p>
      </InfoCard>

      {/* Payment Method */}
      <InfoCard icon={<CreditCardIcon />} label="Payment Method">
        <p
          className="text-[18px] font-medium text-black leading-[1.5]"
          style={{ fontFamily: NM }}
        >
          {payment.cardLabel}
        </p>
        <p
          className="text-[18px] text-black leading-[1.5]"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          {payment.billedTo}
        </p>
        <p
          className="text-[18px] text-[#184335] leading-[1.5]"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          TRANSACTION ID: {payment.transactionId}
        </p>
      </InfoCard>

    </div>
  );
}
