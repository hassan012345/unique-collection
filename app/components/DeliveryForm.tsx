"use client";

/**
 * components/checkout/DeliveryForm.tsx
 *
 * Figma — left panel, "Delivery Information" section:
 *   Heading:    "Delivery Information" ~16px semibold
 *   Sub-link:   "Already have an account? Login" right-aligned, green link
 *   Fields (top→bottom):
 *     Email address             (full width)
 *     Pakistan                  (full width, country select)
 *     First Name | Last Name    (two columns)
 *     Address                   (full width)
 *     City | Postal Code (Optional) (two columns)
 *     Phone Number              (full width)
 */

import { useState } from "react";
import CheckoutInput from "@/components/CheckoutInput";
import Link from "next/link";

const NM = "var(--font-neue-montreal)";

interface DeliveryData {
  email:      string;
  country:    string;
  firstName:  string;
  lastName:   string;
  address:    string;
  city:       string;
  postalCode: string;
  phone:      string;
}

interface Props {
  data:     DeliveryData;
  onChange: (field: keyof DeliveryData, value: string) => void;
  errors?:  Partial<Record<keyof DeliveryData, string>>;
}

// Country selector styled like a CheckoutInput
function CountrySelect({
  value, onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const countries = [
    "Pakistan", "Afghanistan", "Bangladesh", "India",
    "United Arab Emirates", "Saudi Arabia", "United Kingdom",
    "United States", "Canada", "Australia",
  ];

  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 px-4 rounded-lg border border-[#E5E5E5] text-[14px] text-[#171717]
          bg-[#F9FAFB] outline-none transition-colors appearance-none cursor-pointer
          hover:border-[#D4D4D4] focus:border-[#184335]"
        style={{ fontFamily: NM, fontWeight: 400 }}
      >
        {countries.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      {/* Chevron */}
      <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
        width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3.5 5.25l3.5 3.5 3.5-3.5"
          stroke="#525252" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default function DeliveryForm({ data, onChange, errors = {} }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {/* Section heading + login link */}
      <div className="flex items-center justify-between">
        <h2 className="" style={{ fontFamily: NM }}>
          Delivery Information
        </h2>
        <p className="text-[13px] text-green-500" style={{ fontFamily: NM, fontWeight: 400 }}>
          Already have an account?{" "}
          <Link href="/login"
            className="text-[#184335] font-medium underline hover:underline underline-offset-2">
            Login
          </Link>
        </p>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-3">
        {/* Email */}
        <CheckoutInput
          placeholder="Email address"
          type="email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={errors.email}
        />
        <CheckoutInput
          placeholder="Country"
          type="text"
          value={data.country}
          onChange={(e) => onChange("country", e.target.value)}
          error={errors.country}
        />

        {/* Country
        <CountrySelect value={data.country} onChange={(v) => onChange("country", v)} /> */}

        {/* First / Last name */}
        <div className="grid grid-cols-2 gap-3">
          <CheckoutInput
            placeholder="First Name"
            value={data.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            error={errors.firstName}
          />
          <CheckoutInput
            placeholder="Last Name"
            value={data.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            error={errors.lastName}
          />
        </div>

        {/* Address */}
        <CheckoutInput
          placeholder="Address"
          value={data.address}
          onChange={(e) => onChange("address", e.target.value)}
          error={errors.address}
        />

        {/* City / Postal */}
        <div className="grid grid-cols-2 gap-3">
          <CheckoutInput
            placeholder="City"
            value={data.city}
            onChange={(e) => onChange("city", e.target.value)}
            error={errors.city}
          />
          <CheckoutInput
            placeholder="Postal Code (Optional)"
            value={data.postalCode}
            onChange={(e) => onChange("postalCode", e.target.value)}
          />
        </div>

        {/* Phone */}
        <CheckoutInput
          placeholder="Phone Number"
          type="tel"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          error={errors.phone}
        />
      </div>
    </div>
  );
}
