"use client";

export default function TopToast() {
  return (
    <div className="w-full bg-[#245749] border-b border-[#46695D] flex items-center justify-center px-5 py-2">
      <div className="flex gap-2 items-center">
        {/* Fire emoji icon */}
        <span className="text-[#FFB86A] text-base">🔥</span>
        <div className="flex gap-1 items-center text-white text-sm">
          <span className="font-[400]" style={{ fontFamily: "var(--font-neue-montreal)" }}>
            Free Delivery on Orders Above
          </span>
          <span className="font-[500]" style={{ fontFamily: "var(--font-neue-montreal)" }}>
            PKR 5,000
          </span>
        </div>
      </div>
    </div>
  );
}
