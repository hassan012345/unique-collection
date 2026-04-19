"use client";

/**
 * components/checkout/ShippingMethod.tsx
 *
 * Figma specs:
 *   Section heading:  "Shipping Method" 16px semibold
 *   Option row:       border 1px #E5E5E5, rounded-lg, h-48, px-16
 *                     green radio dot on left, label center, price right
 *   Active state:     border-[#184335], green filled radio
 *   Price:            "Rs 200.00" right-aligned, #171717
 */

const NM = "var(--font-neue-montreal)";

export interface ShippingOption {
  id:    string;
  label: string;
  price: number;    // in PKR
}

interface Props {
  options:  ShippingOption[];
  selected: string;          // option id
  onChange: (id: string) => void;
}

function formatPrice(p: number) {
  return `Rs ${p.toLocaleString("en-PK", { minimumFractionDigits: 2 })}`;
}

export default function ShippingMethod({ options, selected, onChange }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[16px] font-semibold text-[#171717]" style={{ fontFamily: NM }}>
        Shipping Method
      </h2>

      <div className="flex flex-col gap-2">
        {options.map((opt) => {
          const active = selected === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className="w-full flex items-center justify-between px-4 rounded-lg transition-colors"
              style={{
                height:      "48px",
                border:      `1px solid ${active ? "#184335" : "#E5E5E5"}`,
                backgroundColor: active ? "#F0F4F2" : "white",
              }}
            >
              {/* Radio + label */}
              <div className="flex items-center gap-3">
                {/* Radio dot */}
                <div
                  className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-none transition-colors"
                  style={{ borderColor: active ? "#184335" : "#D4D4D4" }}
                >
                  {active && (
                    <div className="w-2 h-2 rounded-full bg-[#184335]" />
                  )}
                </div>
                <span
                  className="text-[14px] text-[#171717]"
                  style={{ fontFamily: NM, fontWeight: active ? 500 : 400 }}
                >
                  {opt.label}
                </span>
              </div>

              {/* Price */}
              <span
                className="text-[14px] text-[#171717]"
                style={{ fontFamily: NM, fontWeight: 400 }}
              >
                {formatPrice(opt.price)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
