"use client";

/**
 * components/checkout/CheckoutInput.tsx
 *
 * Figma specs:
 *   Height:        48px
 *   Border:        1px solid #E5E5E5
 *   Border-radius: 8px
 *   Padding:       0 16px
 *   Placeholder:   Neue Montreal Regular 14px #A1A1A1
 *   Value text:    Neue Montreal Regular 14px #171717
 *   Focus border:  #184335
 *   Background:    white
 */

import { forwardRef } from "react";

interface CheckoutInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const NM = "var(--font-neue-montreal)";

const CheckoutInput = forwardRef<HTMLInputElement, CheckoutInputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            className="text-[13px] font-medium text-[#171717]"
            style={{ fontFamily: NM }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full h-12 px-4 rounded-lg border text-[14px] text-[#171717] bg-[#F9FAFB]
            outline-none transition-colors placeholder:text-[#A1A1A1]
            focus:border-[#184335] hover:border-[#D4D4D4] ${className}`}
          style={{
            fontFamily:  NM,
            fontWeight:  400,
            borderColor: error ? "#C0392B" : "#E5E5E5",
          }}
          {...props}
        />
        {error && (
          <p className="text-[12px] text-[#C0392B]" style={{ fontFamily: NM }}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

CheckoutInput.displayName = "CheckoutInput";
export default CheckoutInput;
